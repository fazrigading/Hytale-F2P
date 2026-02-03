#!/usr/bin/env node

/**
 * Development Setup Script
 * 
 * This script runs before `npm run dev` to ensure the development environment is properly configured.
 * It automatically creates a .env file if it doesn't exist, allowing new developers to start immediately.
 * 
 * NOTE: This script is skipped in CI environments (GitHub Actions, etc.) where .env is created separately.
 */

const fs = require('fs');
const path = require('path');

// Detect CI environment
const isCI = !!(
  process.env.CI ||
  process.env.GITHUB_ACTIONS ||
  process.env.GITLAB_CI ||
  process.env.CIRCLECI ||
  process.env.TRAVIS ||
  process.env.BUILDKITE ||
  process.env.DRONE
);

const ENV_FILE = path.join(__dirname, '..', '.env');
const ENV_EXAMPLE_FILE = path.join(__dirname, '..', '.env.example');

console.log('\n🚀 Setting up development environment...\n');

if (isCI) {
  console.log('ℹ️  CI environment detected - skipping .env creation');
  console.log('   (CI will create .env with secrets from GitHub Actions)\n');
  process.env.NODE_ENV = 'development';
  return;
}

// Check if .env file exists
if (fs.existsSync(ENV_FILE)) {
  console.log('✓ .env file already exists');
  
  // Check if NODE_ENV is set in .env
  const envContent = fs.readFileSync(ENV_FILE, 'utf-8');
  if (!envContent.includes('NODE_ENV')) {
    console.log('⚠️  NODE_ENV not set in .env, adding NODE_ENV=development');
    fs.appendFileSync(ENV_FILE, '\n# Development mode\nNODE_ENV=development\n');
  }
} else {
  console.log('📝 Creating .env file from .env.example...');
  
  if (fs.existsSync(ENV_EXAMPLE_FILE)) {
    let envContent = fs.readFileSync(ENV_EXAMPLE_FILE, 'utf-8');
    
    // Add development mode flag
    envContent += '\n# Development mode - automatically set by setup-dev.js\nNODE_ENV=development\n';
    
    fs.writeFileSync(ENV_FILE, envContent);
    console.log('✓ .env file created successfully');
  } else {
    console.warn('⚠️  .env.example not found, creating minimal .env file');
    const minimalEnv = `# Proxy Configuration (optional for development)
HF2P_PROXY_URL=
HF2P_SECRET_KEY=

# Development mode - automatically set by setup-dev.js
NODE_ENV=development

# Optional: Disable direct connection fallback
# HF2P_USE_FALLBACK=true
`;
    fs.writeFileSync(ENV_FILE, minimalEnv);
    console.log('✓ Minimal .env file created');
  }
}

console.log('\n📋 Development Configuration:');
console.log('   - NODE_ENV: development');
console.log('   - Proxy fallback: ENABLED (direct connections will be used if proxy is not configured)');
console.log('   - Direct timeout: 7 seconds');
console.log('\n💡 Tip: Edit .env to configure proxy settings if needed');
console.log('📖 See docs/DEVELOPMENT-SETUP.md for more information\n');

// Set NODE_ENV for the current process
process.env.NODE_ENV = 'development';
