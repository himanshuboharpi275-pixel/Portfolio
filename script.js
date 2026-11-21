const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("formStatus").textContent = "";

    let valid = true;

    if (name.length < 2) {
        document.getElementById("nameError").textContent = "Please enter your name.";
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        valid = false;
    }

    if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
        valid = false;
    }

    if (valid) {
    document.getElementById("formStatus").textContent =
        "Sending your message...";
    form.submit();
}
});