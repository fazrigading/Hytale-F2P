const crypto = require('crypto');
const axios = require('axios');
const https = require('https');
const { PassThrough } = require('stream');

const PROXY_URL = process.env.HF2P_PROXY_URL || 'your_proxy_url_here';
const SECRET_KEY = process.env.HF2P_SECRET_KEY || 'your_secret_key_here_for_jwt';

function generateToken() {
  const timestamp = Date.now().toString();
  const hash = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(timestamp)
    .digest('hex');
  return `${timestamp}:${hash}`;
}

async function proxyRequest(url, options = {}) {
  const token = generateToken();
  const urlObj = new URL(url);
  const targetUrl = `${urlObj.protocol}//${urlObj.host}`;

  const config = {
    method: options.method || 'GET',
    url: `${PROXY_URL}/proxy${urlObj.pathname}${urlObj.search}`,
    headers: {
      'X-Auth-Token': token,
      'X-Target-URL': targetUrl,
      ...(options.headers || {})
    },
    timeout: options.timeout || 30000,
    responseType: options.responseType
  };

  return axios(config);
}

function getProxyDownloadStream(url, onData) {
  return new Promise((resolve, reject) => {
    const token = generateToken();
    const urlObj = new URL(url);
    const targetUrl = `${urlObj.protocol}//${urlObj.host}`;

    const proxyUrl = new URL(PROXY_URL);
    const requestPath = `/proxy${urlObj.pathname}${urlObj.search}`;

    const options = {
      hostname: proxyUrl.hostname,
      port: proxyUrl.port || (proxyUrl.protocol === 'https:' ? 443 : 80),
      path: requestPath,
      method: 'GET',
      headers: {
        'X-Auth-Token': token,
        'X-Target-URL': targetUrl
      }
    };

    const protocol = proxyUrl.protocol === 'https:' ? https : require('http');

    const handleResponse = (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        const redirectUrl = response.headers.location;
        if (redirectUrl.startsWith('http')) {
          getProxyDownloadStream(redirectUrl, onData).then(resolve).catch(reject);
        } else {
          reject(new Error(`Invalid redirect: ${redirectUrl}`));
        }
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      if (onData) {
        const totalSize = parseInt(response.headers['content-length'], 10);
        let downloaded = 0;
        
        const passThrough = new PassThrough();
        
        response.on('data', (chunk) => {
          downloaded += chunk.length;
          onData(chunk, downloaded, totalSize);
        });
        
        response.pipe(passThrough);
        resolve(passThrough);
      } else {
        resolve(response);
      }
    };

    protocol.get(options, handleResponse).on('error', reject);
  });
}

module.exports = {
  proxyRequest,
  getProxyDownloadStream,
  generateToken
};
