const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const htmlFiles = fs.readdirSync(publicDir).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // 1. Nav list
    content = content.replace(/\s*<li><a href="lab\.html">.*?<\/a><\/li>/g, '');
    content = content.replace(/\s*<li><a href="news\.html">.*?<\/a><\/li>/g, '');
    
    // Change product.html text in nav
    content = content.replace(/<a href="product\.html">脳覚<\/a>/g, '<a href="product.html">商品紹介</a>');
    
    // 2. Footer nav
    content = content.replace(/\s*<a href="lab\.html"[^>]*>ニヘイ研究所<\/a>/g, '');
    content = content.replace(/\s*<a href="news\.html"[^>]*>ニュース<\/a>/g, '');
    content = content.replace(/<a href="product\.html" style="color: #aaa;">脳覚<\/a>/g, '<a href="product.html" style="color: #aaa;">商品紹介</a>');
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

// For index.html specific: remove lab block and news section
let indexPath = path.join(publicDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// remove lab block (approx)
indexContent = indexContent.replace(/<div style="border: 1px solid #eee; overflow: hidden; border-radius: 10px;">\s*<div style="height: 200px; background: #eee; display: flex; align-items: center; justify-content: center; color: #999;">\[ 画像 \]<\/div>\s*<div style="padding: 25px;">\s*<h4 style="font-weight: 800; margin-bottom: 10px;"><a href="lab\.html">ニヘイ研究所<\/a><\/h4>[\s\S]*?<\/div>\s*<\/div>/g, '');

// remove news section
indexContent = indexContent.replace(/<section class="section-padding" style="background: #f9f9f9;">\s*<div class="container" style="max-width: 900px;">\s*<h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 30px;">新着情報<\/h2>[\s\S]*?<\/section>/g, '');

fs.writeFileSync(indexPath, indexContent, 'utf-8');

// For product.html specific: update title
let productPath = path.join(publicDir, 'product.html');
let productContent = fs.readFileSync(productPath, 'utf-8');
productContent = productContent.replace(/<title>ニヘイ・コーポレーション 脳覚 Brain Up｜α-GPC配合サプリメントで記憶力・集中力をサポート<\/title>/g, '<title>商品紹介 | ニヘイ・コーポレーション</title>');

fs.writeFileSync(productPath, productContent, 'utf-8');

console.log("Done");
