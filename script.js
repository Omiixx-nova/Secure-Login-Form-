const form = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

// Email validation regex
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Clear previous messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    emailInput.classList.remove("error-border");
    passwordInput.classList.remove("error-border");

    let isValid = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Email validation
    if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("error-border");
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password cannot be empty.";
        passwordInput.classList.add("error-border");
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        successMessage.textContent = "Login successful!";
        
        // Safe DOM update using textContent (prevents XSS)
    }
});