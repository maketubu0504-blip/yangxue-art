document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".yx-nav, #navbar");
    const menuButton = document.querySelector("[data-menu-button]");
    const mobileMenu = document.querySelector("[data-mobile-menu]");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("is-open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });
    }

    if (nav) {
        const updateNav = () => {
            nav.classList.toggle("is-scrolled", window.scrollY > 24);
        };
        updateNav();
        window.addEventListener("scroll", updateNav, { passive: true });
    }

    const fadeElements = document.querySelectorAll(".fade-in");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.14 });

        fadeElements.forEach((element) => observer.observe(element));
    } else {
        fadeElements.forEach((element) => element.classList.add("visible"));
    }
});
