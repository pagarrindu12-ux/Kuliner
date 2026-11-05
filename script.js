// ================================
// MOBILE NAVBAR
// ================================

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}


// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll(".nav-menu a").forEach((link) => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Tutup menu di HP setelah diklik
            if (menu) {
                menu.classList.remove("active");
            }
        }

    });

});