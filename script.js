// =========================
// PJ MUSIC ACADEMY
// Mobile Navigation Toggle
// =========================

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navbar nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("mobile-open");
    });
}
