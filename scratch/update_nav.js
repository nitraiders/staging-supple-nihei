const fs = require('fs');
const files = ['index.html', 'services.html', 'company.html', 'product.html', 'contact.html', 'privacy.html', 'security.html', 'commerce.html', 'about.html'];
files.forEach(f => {
  let p = 'public/' + f;
  if (!fs.existsSync(p)) return;
  let text = fs.readFileSync(p, 'utf8');
  text = text.replace(/<li><a href="product\.html">商品紹介<\/a><\/li>/g, '<li><a href="product.html">商品紹介<small>Products</small></a></li>');
  fs.writeFileSync(p, text, 'utf8');
});
