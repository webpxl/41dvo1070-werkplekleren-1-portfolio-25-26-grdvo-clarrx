document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("close-popup").onclick = () =>
        document.getElementById("welcome-popup").style.display = "none";
});

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.onclick = () => window.scrollTo({top:0, behavior:"smooth"});
