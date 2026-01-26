#!/bin/bash
# Setup script for Astro Portfolio
# Automatically switches to Node.js 18 using nvm if available

set -e

echo "🚀 Setting up Astro Portfolio..."

# Check if nvm is available
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  echo "📦 Loading nvm..."
  source "$HOME/.nvm/nvm.sh"
  
  # Check if .nvmrc exists
  if [ -f ".nvmrc" ]; then
    NODE_VERSION=$(cat .nvmrc)
    echo "📌 Found .nvmrc with Node.js version: $NODE_VERSION"
    
    # Install if not already installed
    if ! nvm list | grep -q "v$NODE_VERSION"; then
      echo "⬇️  Installing Node.js $NODE_VERSION..."
      nvm install "$NODE_VERSION"
    fi
    
    # Use the version
    echo "🔄 Switching to Node.js $NODE_VERSION..."
    nvm use "$NODE_VERSION"
  else
    echo "🔄 Switching to Node.js 18..."
    nvm use 18 || nvm install 18 && nvm use 18
  fi
else
  echo "⚠️  nvm not found. Please ensure Node.js >= 18.14.1 is installed."
  echo "   Current Node version: $(node --version 2>/dev/null || echo 'not found')"
fi

# Verify Node version
NODE_VERSION=$(node --version)
echo "✓ Node.js version: $NODE_VERSION"

# Install dependencies
echo ""
echo "📥 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "The site will be available at: http://localhost:4321/"
