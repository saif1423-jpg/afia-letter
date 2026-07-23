const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const letterPage = document.getElementById("letter-page");

startBtn.addEventListener("click", () => {
    if (startBtn.classList.contains("open")) {
        return;
    }

    startBtn.classList.add("open");

    setTimeout(() => {
        intro.style.opacity = "0";
        intro.style.transition = "opacity .7s ease";
    }, 1100);

    setTimeout(() => {
        intro.classList.add("hide");
        letterPage.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 1800);
});