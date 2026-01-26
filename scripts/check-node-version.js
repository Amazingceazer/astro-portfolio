#!/usr/bin/env node
/**
 * Node Version Check Script
 * Ensures Node.js >= 18.14.1 before running Astro commands
 */

const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('\n❌ Error: Node.js version 18.14.1 or higher is required.');
  console.error(`   Current version: ${nodeVersion}`);
  console.error('\n📝 To fix this:');
  console.error('   1. Install nvm (if not already installed)');
  console.error('   2. Run: source ~/.nvm/nvm.sh');
  console.error('   3. Run: nvm install 18');
  console.error('   4. Run: nvm use 18');
  console.error('   5. Verify: node --version\n');
  process.exit(1);
}

const minorVersion = parseInt(nodeVersion.slice(1).split('.')[1]);
if (majorVersion === 18 && minorVersion < 14) {
  console.error('\n⚠️  Warning: Node.js 18.14.1+ recommended.');
  console.error(`   Current version: ${nodeVersion}\n`);
}

console.log(`✓ Node.js ${nodeVersion} is compatible with Astro 4.0+\n`);
