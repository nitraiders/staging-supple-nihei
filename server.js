const http = require("http");

const NEW_SITE_URL = "https://staging-supple-nihei.pages.dev";
const PORT = process.env.PORT || 3000;

function renderMovedPage() {
    return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="5;url=${NEW_SITE_URL}">
    <title>サイト移転のお知らせ | NKグループ</title>
    <style>
        :root {
            color-scheme: light;
            --primary: #5f8f55;
            --primary-dark: #315337;
            --surface-soft: #f7faf5;
            --line: #dfe8dd;
            --ink: #1f2d24;
            --muted: #657267;
        }

        * {
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            margin: 0;
            display: grid;
            place-items: center;
            padding: 32px 18px;
            color: var(--ink);
            font-family: "Hiragino Kaku Gothic ProN", Meiryo, Arial, sans-serif;
            line-height: 1.8;
            background:
                linear-gradient(135deg, rgba(247, 250, 245, 0.96), rgba(255, 255, 255, 0.96));
        }

        main {
            width: min(100%, 720px);
            padding: clamp(28px, 6vw, 56px);
            border: 1px solid var(--line);
            border-radius: 8px;
            background: #fff;
            box-shadow: 0 20px 48px rgba(31, 45, 36, 0.08);
            text-align: center;
        }

        .brand {
            margin: 0 0 18px;
            color: var(--primary-dark);
            font-size: 0.95rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        h1 {
            margin: 0;
            font-size: clamp(1.9rem, 5vw, 3rem);
            line-height: 1.35;
        }

        p {
            margin: 22px 0 0;
            color: var(--muted);
            font-size: 1.05rem;
        }

        a.button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 52px;
            margin-top: 30px;
            padding: 13px 26px;
            border-radius: 6px;
            background: var(--primary);
            color: #fff;
            font-weight: 800;
            text-decoration: none;
        }

        a.button:hover {
            background: var(--primary-dark);
        }

        .url {
            margin-top: 18px;
            overflow-wrap: anywhere;
            font-size: 0.92rem;
        }
    </style>
    <script>
        window.setTimeout(function () {
            window.location.href = "${NEW_SITE_URL}";
        }, 5000);
    </script>
</head>
<body>
    <main>
        <p class="brand">NKグループ</p>
        <h1>サイト移転のお知らせ</h1>
        <p>KoKoRoMi公式サイトは下記URLへ移転しました。</p>
        <a class="button" href="${NEW_SITE_URL}">新サイトはこちら</a>
        <p class="url">${NEW_SITE_URL}</p>
        <p>5秒後に新サイトへ自動転送します。自動で移動しない場合は、上のボタンからお進みください。</p>
    </main>
</body>
</html>`;
}

const server = http.createServer((request, response) => {
    if (request.url === "/healthz") {
        response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("ok");
        return;
    }

    response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
    });
    response.end(renderMovedPage());
});

server.listen(PORT, () => {
    console.log(`Render migration notice is running on port ${PORT}`);
});
