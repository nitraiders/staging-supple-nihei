const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 静的ファイルの提供（マルチページ対応）
app.use(express.static(path.join(__dirname, 'public')));

// 404エラー時に index.html へ戻す
app.use((req, res) => {
      res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
});
