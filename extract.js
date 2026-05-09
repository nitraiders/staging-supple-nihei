const fs = require('fs');
let c = fs.readFileSync('brainup.html', 'utf8');
if (c.includes('\0')) c = fs.readFileSync('brainup.html', 'utf16le');
const regex = /<a class="elementor-toggle-title"[^>]*>(.*?)<\/a>\s*<\/div>\s*<div[^>]*class="elementor-tab-content[^>]*>(.*?)<\/div>/gs;
let m;
let count = 0;
while (m = regex.exec(c)) {
    console.log('Q: ' + m[1].trim());
    console.log('A: ' + m[2].trim());
    console.log('---');
    count++;
}
if (count === 0) {
    console.log("No Q&A found! Looking for alternative structure...");
    // Alternative match if structure is slightly different
    const altRegex = /<dt[^>]*>(.*?)<\/dt>\s*<dd[^>]*>(.*?)<\/dd>/gs;
    while (m = altRegex.exec(c)) {
        console.log('Q: ' + m[1].trim());
        console.log('A: ' + m[2].trim());
        console.log('---');
    }
}
