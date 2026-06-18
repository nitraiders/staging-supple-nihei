document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("site-nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("active");
            hamburger.classList.toggle("active", isOpen);
            hamburger.setAttribute("aria-expanded", String(isOpen));
            document.body.classList.toggle("menu-open", isOpen);
        });

        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                hamburger.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
                document.body.classList.remove("menu-open");
            });
        });
    }

    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".site-nav a, .footer-nav a").forEach((link) => {
        const target = link.getAttribute("href");
        if (target === current) {
            link.classList.add("is-current");
        }
    });

    document.querySelectorAll("[data-year]").forEach((el) => {
        el.textContent = new Date().getFullYear();
    });

    document.querySelectorAll("[data-company-name]").forEach((el) => {
        el.textContent = window.SITE_DATA.brand.operator;
    });

    document.querySelectorAll("[data-brand-name]").forEach((el) => {
        el.textContent = window.SITE_DATA.brand.name;
    });

    const newsRoot = document.querySelector("[data-news-list]");
    if (newsRoot && window.SITE_DATA.news) {
        newsRoot.innerHTML = window.SITE_DATA.news.map((item) => (
            `<li><time datetime="${item.date.replaceAll(".", "-")}">${item.date}</time><span class="badge">${item.category}</span><span>${item.text}</span></li>`
        )).join("");
    }

    const lpBannerSection = document.querySelector("[data-lp-banner-section]");
    const lpBannerList = document.querySelector("[data-lp-banner-list]");
    const lpBannerImages = [
        { src: "assets/kokoromi-lp-banner-main.jpg", alt: "KoKoRoMi 販促バナー" },
        { src: "assets/kokoromi-lp-banner-ingredients.jpg", alt: "KoKoRoMi 注目成分バナー" },
        { src: "assets/kokoromi-lp-banner-order.jpg", alt: "KoKoRoMi ご注文案内バナー" },
    ];

    if (lpBannerSection && lpBannerList) {
        let visibleCount = 0;

        lpBannerImages.forEach((item) => {
            const image = new Image();
            image.className = "lp-banner-image";
            image.alt = item.alt;
            image.onload = () => {
                visibleCount += 1;
                lpBannerList.appendChild(image);
                lpBannerSection.hidden = false;
            };
            image.src = item.src;
        });
    }
});
