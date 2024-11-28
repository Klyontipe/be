document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    details.classList.add("visible");
}

function hideDetails(detailsId) {
    const details = document.getElementById(detailsId);
    details.classList.remove("visible");
}
