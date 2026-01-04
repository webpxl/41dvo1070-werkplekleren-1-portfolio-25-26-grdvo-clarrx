console.log("Portfolio volledig geladen");

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("welcome-popup");
    const closeBtn = document.getElementById("close-popup");

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
});