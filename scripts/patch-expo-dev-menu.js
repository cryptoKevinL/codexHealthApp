const fs = require('fs');
const path = require('path');

const filePath = path.join(
  __dirname,
  '..',
  'node_modules',
  'expo-dev-menu',
  'ios',
  'DevMenuViewController.swift'
);

if (!fs.existsSync(filePath)) {
  console.log('patch-expo-dev-menu: file not found, skipping');
  process.exit(0);
}

const original = fs.readFileSync(filePath, 'utf8');
const needle = 'let isSimulator = TARGET_IPHONE_SIMULATOR > 0';
const replacement = `#if targetEnvironment(simulator)
    let isSimulator = true
    #else
    let isSimulator = false
    #endif`;

const replaced = original.replace(needle, replacement);

if (original === replaced) {
  console.log('patch-expo-dev-menu: no changes needed');
  process.exit(0);
}

fs.writeFileSync(filePath, replaced);
console.log('patch-expo-dev-menu: applied');
