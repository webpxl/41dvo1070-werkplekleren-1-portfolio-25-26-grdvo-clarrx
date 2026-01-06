console.log("Portfolio volledig geladen");

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("welcome-popup");
    const closeBtn = document.getElementById("close-popup");

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
