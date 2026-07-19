const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.textContent = isHidden ? "Hide" : "Show";
  togglePassword.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  togglePassword.setAttribute("aria-pressed", String(isHidden));
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  let valid = true;

  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  if (!emailInput.validity.valid) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (!valid) return;

  formMessage.textContent = "Signed in successfully!";
  loginForm.reset();
  passwordInput.type = "password";
  togglePassword.textContent = "Show";
  togglePassword.setAttribute("aria-label", "Show password");
  togglePassword.setAttribute("aria-pressed", "false");
});
