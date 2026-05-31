# KoKoRoMi static site

株式会社二信興業の静的コーポレート / 商品紹介サイトです。サプリメント・化粧品等を扱う企業サイトとして、主力商品 KoKoRoMi の情報と販売準備状況を掲載します。

## 構成

- `public/`: Cloudflare Pages で公開する静的ファイル一式
- `public/index.html`: トップページ
- `public/css/index.css`: 共通スタイル
- `public/js/site-data.js`: 会社名、商品名、お知らせなどの共通データ
- `public/js/main.js`: ナビゲーションなどの軽量な表示制御
- `scratch/public-source-docs/`: 公開ディレクトリから退避した作業用資料

Express / Render 前提の `server.js` と npm 依存関係は削除済みです。HTML/CSS/JS のみで表示できます。

## Cloudflare Pages 設定例

- Framework preset: `None`
- Build command: 空欄
- Build output directory: `public`
- Root directory: リポジトリ直下

GitHub 連携後、上記設定で `public` 配下がそのまま公開対象になります。

## 問い合わせについて

現在の問い合わせページは、送信処理を実装していません。公開時点で誤解が出ないよう、窓口は「現在準備中」と表示しています。

今後の実装候補:

- Cloudflare Pages Functions で問い合わせ API を追加する
- 外部フォームサービスを利用し、`contact.html` からリンクする
- 受付用メールアドレスが確定したら `mailto:` 導線を追加する

## 公開前に確認する情報

- 正式な問い合わせ先メールアドレス
- 通信販売を開始する場合の注文方法、支払い方法、配送条件
- 特定商取引法に基づく表記の公開範囲
- 商品画像、商品説明、栄養機能食品表示の最終確認
