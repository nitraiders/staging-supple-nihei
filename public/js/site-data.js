/**
 * サイトの基本情報管理ファイル
 * 今後、LINEなどで修正指示があった場合はこのファイルを編集するだけで反映されます。
 */
const SITE_DATA = {
    company: {
        name: "株式会社ニヘイ・コーポレーション",
        nameEn: "NIHEI Corp.",
        address: "〒100-0000 東京都千代田区XX-XX-XX",
        phone: "03-XXXX-XXXX",
        email: "info@nihei-corp.example.com"
    },
    slogan: {
        main: "笑顔から広がる<br>価値を創造します。",
        sub: "天然素材と最先端科学の融合による、<br>次世代のウェルネス体験をあなたに。"
    },
    product: {
        name: "脳覚",
        nameEn: "BrainUp",
        concept: "天然由来 × 科学的サポート",
        description: "厳選された天然成分を、最新のバイオテクノロジーで最適化。現代人の「思考」と「活力」を支える、安心と信頼のフラッグシップモデルです。"
    },
    news: [
        { date: "2026.04.10", category: "お知らせ", text: "公式サイトをリニューアルオープンいたしました。", link: "#" },
        { date: "2026.04.05", category: "製品", text: "「脳覚」の新ラインナップが登場。", link: "#" }
    ]
};

// HTMLにデータを反映させる関数
function syncSiteData() {
    // ロゴ
    document.querySelectorAll('.logo, .logo-footer').forEach(el => {
        el.innerHTML = `<a href="/">${SITE_DATA.company.nameEn.split(' ')[0]}<span>${SITE_DATA.company.nameEn.split(' ')[1]}</span></a>`;
    });

    // キャッチコピー
    if (document.querySelector('.hero-title')) {
        document.querySelector('.hero-title').innerHTML = SITE_DATA.slogan.main;
    }
    if (document.querySelector('.hero-subtitle')) {
        document.querySelector('.hero-subtitle').innerHTML = SITE_DATA.slogan.sub;
    }

    // 製品セクション
    if (document.querySelector('.product-special .section-title')) {
        document.querySelector('.product-special .section-title').innerHTML = `${SITE_DATA.product.name}<span>${SITE_DATA.product.nameEn}</span>`;
    }
    if (document.querySelector('.product-special .emphasize')) {
        document.querySelector('.product-special .emphasize').innerText = SITE_DATA.product.concept;
    }
    if (document.querySelector('.product-special p:not(.emphasize)')) {
        document.querySelector('.product-special p:not(.emphasize)').innerText = SITE_DATA.product.description;
    }

    // フッターコピーライト
    if (document.querySelector('.copyright')) {
        document.querySelector('.copyright').innerHTML = `&copy; ${new Date().getFullYear()} ${SITE_DATA.company.name}. All rights reserved.`;
    }
}

// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', syncSiteData);
