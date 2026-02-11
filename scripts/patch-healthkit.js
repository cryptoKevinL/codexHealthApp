const fs = require('fs');
const path = require('path');

const filePath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@kingstinct',
  'react-native-healthkit',
  'ios',
  'QuantityTypeModule.swift'
);

if (!fs.existsSync(filePath)) {
  console.log('patch-healthkit: file not found, skipping');
  process.exit(0);
}

const original = fs.readFileSync(filePath, 'utf8');
const replaced = original.replace(
  /\s*if\s+anyMap\.isBigInt\(key:\s*key\)\s*\{\s*return\s+anyMap\.getBigInt\(key:\s*key\)\s*\}\s*/m,
  '\n    // BigInt not available in older RN/Expo bridges.\n'
);

if (original === replaced) {
  console.log('patch-healthkit: no changes needed');
  process.exit(0);
}

fs.writeFileSync(filePath, replaced);
console.log('patch-healthkit: applied');
