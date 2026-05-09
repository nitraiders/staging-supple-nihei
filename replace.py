import os
import glob
import re

public_dir = r"c:\Users\NEC-PCuser\Documents\kazu_midnight_fortress\project-s-responsive\public"
html_files = glob.glob(os.path.join(public_dir, "*.html"))

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 1. Nav list
    content = re.sub(r'\s*<li><a href="lab\.html">.*?</a></li>', '', content)
    content = re.sub(r'\s*<li><a href="news\.html">.*?</a></li>', '', content)
    
    # Change product.html text in nav
    content = re.sub(r'<a href="product\.html">脳覚</a>', r'<a href="product.html">商品紹介</a>', content)
    
    # 2. Footer nav
    content = re.sub(r'\s*<a href="lab\.html"[^>]*>ニヘイ研究所</a>', '', content)
    content = re.sub(r'\s*<a href="news\.html"[^>]*>ニュース</a>', '', content)
    content = re.sub(r'<a href="product\.html" style="color: #aaa;">脳覚</a>', r'<a href="product.html" style="color: #aaa;">商品紹介</a>', content)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
print("Done!")
