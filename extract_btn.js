const fs = require('fs');
const html = fs.readFileSync('scratch_reiwa_product.html', 'utf8');

const regex = /<a\s+href="([^"]+)"[^>]*?class="[^"]*?btn[^"]*?"[^>]*?>(.*?)<\/a>|<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
let match;
console.log("BUTTONS:");
while ((match = regex.exec(html)) !== null) {
    let href = match[1] || match[3];
    let text = match[2] || match[4];
    text = text.replace(/<[^>]+>/g, '').trim();
    if(href.includes('cart') || text.includes('購入') || text.includes('定期') || text.includes('お試し')) {
        console.log(`[${text}](${href})`);
    }
}
