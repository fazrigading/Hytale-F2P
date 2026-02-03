# Development Setup Guide

This guide helps new developers set up the Hytale-F2P project for local development.

## Quick Start

### 1. Start Development

Simply run:

```bash
npm run dev
```

That's it! The setup script will automatically:
- ✅ Create a `.env` file if it doesn't exist
- ✅ Set `NODE_ENV=development` automatically
- ✅ Enable direct connection fallback
- ✅ Show helpful configuration information

### 2. Configure Proxy Settings (Optional)

If you have a proxy server available, edit the `.env` file and set:

```env
HF2P_PROXY_URL=http://your-proxy-server:port
HF2P_SECRET_KEY=your-secret-key-for-jwt
```

**Note:** If you don't have a proxy server configured, the application will automatically fall back to direct connections in development mode. This is useful for:
- Testing features that don't require proxy authentication
- Developing new features without proxy infrastructure
- Local testing and debugging

### 3. Development Mode (Automatic)

The `npm run dev` command automatically sets up development mode:

- ✅ Missing proxy configuration shows helpful warnings instead of errors
- ✅ Direct connection fallback is enabled by default
- ✅ You can work without a fully configured proxy server
- ✅ Better error messages for debugging
- ✅ `.env` file is created automatically if missing

## Proxy Client Behavior

The `proxyClient.js` module provides intelligent request handling:

### Smart Request Functions (Recommended)

These functions automatically handle fallback logic:

```javascript
const { smartRequest, smartDownloadStream } = require('./backend/utils/proxyClient');

// Automatically tries direct connection first, falls back to proxy if needed
const response = await smartRequest('https://api.example.com/data');

// For downloads with progress tracking
const stream = await smartDownloadStream('https://example.com/file.zip', (chunk, downloaded, total) => {
  console.log(`Downloaded: ${downloaded}/${total} bytes`);
});
```

### Direct Functions (For Development)

If you want to bypass proxy entirely during development:

```javascript
const { directRequest, directDownloadStream } = require('./backend/utils/proxyClient');

// Direct connection without proxy
const response = await directRequest('https://api.example.com/data');
```

### Proxy Functions (For Production)

For explicit proxy usage:

```javascript
const { proxyRequest, getProxyDownloadStream } = require('./backend/utils/proxyClient');

// Always use proxy
const response = await proxyRequest('https://api.example.com/data');
```

## Configuration Options

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `HF2P_PROXY_URL` | No* | `null` | Proxy server URL |
| `HF2P_SECRET_KEY` | No* | `null` | JWT secret key for proxy auth |
| `HF2P_USE_FALLBACK` | No | `true` | Enable direct connection fallback |
| `NODE_ENV` | No | `development` | Set to `production` for production mode |

*Required in production mode, optional in development mode

## Troubleshooting

### "Missing configuration detected" Warning

This warning appears when proxy settings are not configured. In development mode, this is normal and expected. The application will use direct connections instead.

**Solution:** Either:
1. Configure proxy settings in `.env` file, or
2. Continue developing with direct connections (recommended for new features)

### Proxy Connection Fails

If you have proxy configured but connections fail:

1. Verify the proxy URL is correct: `HF2P_PROXY_URL=http://proxy-host:port`
2. Verify the secret key is correct: `HF2P_SECRET_KEY=your-secret`
3. Check that the proxy server is running and accessible
4. Review the console logs for detailed error messages

### Direct Connection Fails

If direct connections fail:

1. Check your internet connection
2. Verify the target URL is accessible
3. Check firewall/network restrictions
4. Review the console logs for detailed error messages

## Adding New Features

When adding new features that require HTTP requests:

1. **Use `smartRequest` or `smartDownloadStream`** - These handle fallback automatically
2. **Don't worry about proxy configuration** - Development mode handles missing config gracefully
3. **Test with direct connections first** - Easier for debugging
4. **Add proxy support later** - Once feature is working, configure proxy for production

Example:

```javascript
const { smartRequest } = require('./backend/utils/proxyClient');

async function fetchGameData() {
  try {
    const response = await smartRequest('https://api.hytale.com/game-data');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch game data:', error.message);
    throw error;
  }
}
```

## Production Deployment

Before deploying to production:

1. **Set `NODE_ENV=production`**
2. **Configure all required environment variables:**
   - `HF2P_PROXY_URL` - Must be set
   - `HF2P_SECRET_KEY` - Must be set
3. **Disable fallback if needed:** `HF2P_USE_FALLBACK=false`
4. **Test thoroughly** with proxy configuration

## Getting Help

If you encounter issues:

1. Check the console logs for detailed error messages
2. Review this guide's troubleshooting section
3. Check the `proxyClient.js` comments for implementation details
4. Ask in the project's discussion/issues section

## CI/CD Integration

The GitHub Actions workflow automatically handles `.env` configuration:

1. **Development (`npm run dev`)**: The setup script creates `.env` from `.env.example`
2. **CI/CD (GitHub Actions)**: The workflow creates `.env` with secrets from GitHub Actions
3. **Production builds**: `NODE_ENV=production` is set automatically

### For CI Maintainers

The setup script detects CI environments and skips `.env` creation. Supported CI systems:
- GitHub Actions (`GITHUB_ACTIONS`)
- GitLab CI (`GITLAB_CI`)
- CircleCI (`CIRCLECI`)
- Travis CI (`TRAVIS`)
- Buildkite (`BUILDKITE`)
- Drone (`DRONE`)

The workflow creates `.env` with:
- `HF2P_PROXY_URL` from GitHub secrets
- `HF2P_SECRET_KEY` from GitHub secrets
- `NODE_ENV=production` for production builds

## Related Files

- `.env.example` - Environment variable template
- `backend/utils/proxyClient.js` - Proxy client implementation
- `scripts/setup-dev.js` - Development setup script
- `.github/workflows/release.yml` - CI/CD workflow
- `docs/` - Additional documentation
