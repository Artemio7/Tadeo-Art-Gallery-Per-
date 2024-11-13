function togglePassword() {
    var passwordInput = document.getElementById("password");
    var toggleBtn = document.querySelector(".toggle-password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.textContent = "Ocultar contraseña";
    } else {
      passwordInput.type = "password";
      toggleBtn.textContent = "👀";
    }
  }
  