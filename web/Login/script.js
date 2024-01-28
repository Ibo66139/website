














const passwordInput = document.getElementById("password");
const zeigPasswordButton = document.getElementById("zeigPasswordButton");

zeigPasswordButton.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    zeigPasswordButton.textContent = "Ausblenden";
  } else {
    passwordInput.type = "password";
    zeigPasswordButton.textContent = "Anzeigen";
  }
});