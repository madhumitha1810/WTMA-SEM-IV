document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("changeTextBtn");
    const msg = document.getElementById("message");

    btn.addEventListener("click", function () {
        msg.textContent = "Thanks for clicking the button!";
        msg.style.fontSize = "1.5rem";
        msg.style.marginTop = "20px";
    });
});
