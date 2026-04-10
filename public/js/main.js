document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    // ハンバーガーメニューの開閉
    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        
        // メニューが開いているときはスクロールを防止
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    hamburger.addEventListener('click', toggleMenu);

    // リンクをクリックしたらメニューを閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // スクロール時のヘッダー演出（オプション）
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
        } else {
            header.style.padding = '0';
        }
    });
});
