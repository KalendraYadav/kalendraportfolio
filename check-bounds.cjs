const fs = require('fs');

// Read onee.avatar.ts
const content = fs.readFileSync('src/components/avatar/onee.avatar.ts', 'utf8');
const dataStr = content.slice(content.indexOf('{"version":1'), content.lastIndexOf('} as const satisfies AvatarData') + 1);
const data = JSON.parse(dataStr);

console.log('Surface:', data.avatar.surface);

// The surface is: width: 250, height: 182, depth: 225
// In the 3D projection, x goes roughly from -125 to +125, y from -91 to +91.
// Let's inspect expression head offsets:
let minHeadX = Infinity, maxHeadX = -Infinity;
let minHeadY = Infinity, maxHeadY = -Infinity;
let minHeadZ = Infinity, maxHeadZ = -Infinity;

for (const expr of Object.values(data.expressions)) {
  if (expr.headX < minHeadX) minHeadX = expr.headX;
  if (expr.headX > maxHeadX) maxHeadX = expr.headX;
  if (expr.headY < minHeadY) minHeadY = expr.headY;
  if (expr.headY > maxHeadY) maxHeadY = expr.headY;
  if (expr.headZ < minHeadZ) minHeadZ = expr.headZ;
  if (expr.headZ > maxHeadZ) maxHeadZ = expr.headZ;
}

console.log({ minHeadX, maxHeadX, minHeadY, maxHeadY, minHeadZ, maxHeadZ });
