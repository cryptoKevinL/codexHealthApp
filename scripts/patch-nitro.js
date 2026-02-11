const fs = require('fs');
const path = require('path');

const filePath = path.join(
  __dirname,
  '..',
  'node_modules',
  'react-native-nitro-modules',
  'cpp',
  'core',
  'HybridObject.cpp'
);

if (!fs.existsSync(filePath)) {
  console.log('patch-nitro: file not found, skipping');
  process.exit(0);
}

const original = fs.readFileSync(filePath, 'utf8');
const replaced = original
  .replace(
    'value.getObject(runtime).setExternalMemoryPressure(runtime, getExternalMemorySize());',
    '// External memory pressure API not available on this RN/JSI version.'
  )
  .replace(
    'object.setExternalMemoryPressure(runtime, getExternalMemorySize());',
    '// External memory pressure API not available on this RN/JSI version.'
  );

if (original === replaced) {
  console.log('patch-nitro: no changes needed');
  process.exit(0);
}

fs.writeFileSync(filePath, replaced);
console.log('patch-nitro: applied');
