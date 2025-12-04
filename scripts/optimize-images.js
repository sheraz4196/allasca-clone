// Image optimization script: convert JPG/PNG to WebP in attached_assets/stock_images
import sharp from 'sharp';
const fs = require('fs');
const path = require('path');

const inputDir = path.resolve(__dirname, '..', 'attached_assets', 'stock_images');

if (!fs.existsSync(inputDir)) {
  console.error(`Input directory not found: ${inputDir}`);
  process.exit(1);
}

const files = fs.readdirSync(inputDir);

files.forEach((file) => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const src = path.join(inputDir, file);
    const dest = path.join(inputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    sharp(src)
      .webp({ quality: 80 })
      .toFile(dest)
      .then(() => {
        console.log(`Converted: ${path.basename(src)} -> ${path.basename(dest)}`);
      })
      .catch((err) => {
        console.error(`Failed to convert ${file}:`, err.message);
      });
  }
});