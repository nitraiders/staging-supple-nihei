# NS Group / KoKoRoMi static site

NSグループの静的ブランド / 商品紹介サイトです。KoKoRoMi の商品情報、事業内容、お問い合わせ導線を掲載します。

## 構成

- `public/`: Cloudflare Pages で公開する静的ファイル一式
- `public/index.html`: トップページ
- `public/css/index.css`: 共通スタイル
- `public/js/site-data.js`: 事業名、運営母体、商品名、お知らせなどの共通データ
- `public/js/main.js`: ナビゲーションなどの軽量な表示制御
- `scratch/public-source-docs/`: 公開ディレクトリから退避した作業用資料

Cloudflare Pages の本体サイトはHTML/CSS/JSのみで表示できます。ルートの `server.js` と `package.json` は、旧Render URLに移転案内だけを表示するための最小構成です。

## Cloudflare Pages 設定例

- Framework preset: `None`
- Build command: 空欄
- Build output directory: `public`
- Root directory: リポジトリ直下

GitHub 連携後、上記設定で `public` 配下がそのまま公開対象になります。

## Render 旧URLの移転案内

旧Render URLでは、本体サイトを配信せず、移転案内のみを表示します。ルートの `server.js` と `package.json` はRender用の最小構成です。

- Build command: 空欄、または `npm install`
- Start command: `npm start`
- Environment: `Node`
- 表示先: `https://ns-group.jp`

Render側では、どのパスにアクセスしても「サイト移転のお知らせ」を表示し、5秒後に新URLへ自動転送します。Cloudflare Pagesの公開対象は引き続き `public` のため、このRender用設定は静的サイト本体には影響しません。

## 問い合わせについて

問い合わせページでは、フリーダイヤルを主導線として表示しています。フォーム欄は送信ボタンを表示せず、送信できるようには見せない構成です。

今後の実装候補:

- Cloudflare Pages Functions で問い合わせ API を追加する
- 外部フォームサービスを利用し、`contact.html` からリンクする

## 運用時に確認する情報

- 注文方法、支払い方法、配送条件
- 特定商取引法に基づく表記の公開範囲
- 商品画像、商品説明、栄養機能食品表示の最終確認
- 会社名、屋号、販売元、運営体制の最新情報
