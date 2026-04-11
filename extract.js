const fs = require('fs');
const html = fs.readFileSync('scratch_reiwa_product.html', 'utf8');

// Find iframe
const iframeMatches = html.match(/<iframe[^>]*\bsrc\s*=\s*(["'])(https:\/\/www\.youtube\.com.*?)(\1)[^>]*><\/iframe>/i);
if (iframeMatches) {
    console.log("IFRAME URL:", iframeMatches[2]);
} else {
    console.log("No Youtube iframe found.");
}

// Find images
const imgMatches = html.matchAll(/<img[^>]*\bsrc\s*=\s*(["'])(.*?nogaku.*?\.jpg|.*?otamesi.*?\.jpg)(\1)[^>]*>/gi);
const images = new Set();
for (const match of imgMatches) {
    images.add(match[2]);
}
console.log("IMAGES:", Array.from(images).join('\n'));
