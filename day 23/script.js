
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      validateForm();
    });

    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();

      let valid = true;

      // Reset errors
      document.querySelectorAll(".error").forEach(e => e.textContent = "");
      document.getElementById("message").textContent = "";

      // Name validation
      if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
      }

      // Email validation
      if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
      } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
      }

      // Password validation
      if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        valid = false;
      }

      // Confirm Password validation
      if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent = "Passwords do not match";
        valid = false;
      }

      // Success message
      if (valid) {
        document.getElementById("message").textContent = "✅ Form submitted successfully!";
        form.reset();
      }
    }

    // Real-time validation (Bonus)
    document.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", () => {
        input.style.borderColor = input.value.trim() ? "green" : "red";
      });
    });
  