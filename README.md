# KoKoRoMi / Nihei Corporation static site

株式会社ニヘイコーポレーション（仮称）/ KoKoRoMi Official の静的ブランド / 商品紹介サイトです。健康食品・美容関連商品の企画販売を行う仮称会社サイトとして、KoKoRoMi の情報と販売準備状況を掲載します。

法人化、正式名称、屋号、販売元など未確定の情報は捏造せず、確定情報に基づき順次更新する前提です。株式会社二信興業は既存の建築会社として公式サイトがあるため、本サイトでは前面に出しません。

## 構成

- `public/`: Cloudflare Pages で公開する静的ファイル一式
- `public/index.html`: トップページ
- `public/css/index.css`: 共通スタイル
- `public/js/site-data.js`: 仮称会社名、ブランド名、商品名、お知らせなどの共通データ
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
- 表示先: `https://staging-supple-nihei.pages.dev`

Render側では、どのパスにアクセスしても「サイト移転のお知らせ」を表示し、5秒後にCloudflare Pages側の新URLへ自動転送します。Cloudflare Pagesの公開対象は引き続き `public` のため、このRender用設定は静的サイト本体には影響しません。

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
- 正式会社名、屋号、販売元、運営体制の確定情報
