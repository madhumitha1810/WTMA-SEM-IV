const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters!";
        return;
    }

    message.style.color = "#00ffff";
    message.textContent = "Registration Successful 🎉";

    form.reset();
});
