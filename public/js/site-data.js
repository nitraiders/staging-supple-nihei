/**
 * サイトの基本情報管理ファイル
 * 今後、LINEなどで修正指示があった場合はこのファイルを編集するだけで反映されます。
 */
const SITE_DATA = {
    company: {
        name: "株式会社ニヘイ・コーポレーション",
        nameEn: "NIHEI Corp.",
        representative: "二瓶 亘広 (にへい のぶひろ)",
        address: "〒100-0000 東京都千代田区XX-XX-XX",
        phone: "03-XXXX-XXXX",
        email: "info@nihei-corp.example.com",
        foundingDate: "2015年4月"
    },
    slogan: {
        main: "笑顔から広がる<br>価値を創造します。",
        sub: "天然素材と最先端科学の融合による、<br>次世代のウェルネス体験をあなたに。"
    },
    product: {
        name: "脳覚",
        nameEn: "BrainUp",
        concept: "天然由来 × 科学的サポート",
        description: "厳選された天然成分を、最新のバイオテクノロジーで最適化。現代人の「思考」と「活力」を支える、安心と信頼のフラッグシップモデルです。",
        features: [
            { title: "黄金比の配合", detail: "L-テアニン、バコパ、イチョウ葉を科学的データに基づく最適な比率で配合。" },
            { title: "天然由来成分100%", detail: "身体への優しさを第一に、厳選された自然素材のみを使用しています。" },
            { title: "徹底した品質管理", detail: "国内GMP認定工場にて、一点の妥協もない品質検査をクリア。" }
        ],
        qa: [
            { q: "いつ飲むのが効果的ですか？", a: "健康食品ですので決まりはありませんが、朝の集中を求める方は起床時、午後のパフォーマンスを維持したい方は昼食後をお勧めしております。" },
            { q: "副作用はありますか？", a: "天然由来成分のみを使用しておりますが、まれに体質に合わない場合がございます。その場合は速やかに飲用を中止し、医師にご相談ください。" },
            { q: "他のサプリとの併用は可能ですか？", a: "基本的には問題ございませんが、不安な方は成分表を主治医にご提示の上、ご相談いただくことを推奨いたします。" }
        ]
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
        el.innerHTML = `<a href="index.html">NIHEI<span>Corp.</span></a>`;
    });

    // キャッチコピー
    if (document.querySelector('.hero-title')) {
        document.querySelector('.hero-title').innerHTML = SITE_DATA.slogan.main;
    }
    if (document.querySelector('.hero-subtitle')) {
        document.querySelector('.hero-subtitle').innerHTML = SITE_DATA.slogan.sub;
    }

    // 代表名 (一括置換用)
    document.querySelectorAll('.ceo-name').forEach(el => {
        el.innerText = SITE_DATA.company.representative;
    });

    // 製品セクション (トップページ)
    if (document.querySelector('.product-special .section-title')) {
        document.querySelector('.product-special .section-title').innerHTML = `${SITE_DATA.product.name}<span>${SITE_DATA.product.nameEn}</span>`;
    }

    // フッターコピーライト
    if (document.querySelector('.copyright')) {
        document.querySelector('.copyright').innerHTML = `&copy; ${new Date().getFullYear()} ${SITE_DATA.company.name}. All rights reserved.`;
    }
}

// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', syncSiteData);
