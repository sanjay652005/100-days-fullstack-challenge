    const lengthEl = document.getElementById("length");
    const uppercaseEl = document.getElementById("uppercase");
    const lowercaseEl = document.getElementById("lowercase");
    const numbersEl = document.getElementById("numbers");
    const symbolsEl = document.getElementById("symbols");
    const passwordDisplay = document.getElementById("passwordDisplay");
    const generateBtn = document.getElementById("generate");
    const copyBtn = document.getElementById("copy");

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~<>?/";

    function getRandom(str) {
      return str[Math.floor(Math.random() * str.length)];
    }

    function generatePassword() {
      const len = +lengthEl.value;
      let chars = "";

      if (uppercaseEl.checked) chars += upperCase;
      if (lowercaseEl.checked) chars += lowerCase;
      if (numbersEl.checked) chars += numbers;
      if (symbolsEl.checked) chars += symbols;

      if (chars === "") {
        alert("Please select at least one option!");
        return "";
      }

      let password = "";
      for (let i = 0; i < len; i++) {
        password += getRandom(chars);
      }
      return password;
    }

    generateBtn.addEventListener("click", () => {
      const pwd = generatePassword();
      passwordDisplay.textContent = pwd || "Please select at least one option!";
    });

    copyBtn.addEventListener("click", () => {
      const text = passwordDisplay.textContent;
      if (text && text !== "Your password will appear here") {
        navigator.clipboard.writeText(text);
        alert("Password copied to clipboard!");
      }
    });
