const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// public フォルダを静的ファイルとして提供
app.use(express.static(path.join(__dirname, 'public')));

// 全てのルートを index.html に向ける（SPA構成への配慮）
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
