
  
    function calculate(num1, num2, operation) {
      switch (operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Can't divide by 0!";
        default: return "Invalid Operation";
      }
    }

    function performCalculation() {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operation = document.getElementById("operation").value;

      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "⚠️ Please enter valid numbers!";
        return;
      }

      const result = calculate(num1, num2, operation);
      document.getElementById("result").innerText = `Result: ${result}`;
    }

    const colors = ["#FFB6C1", "#FFD700", "#90EE90", "#87CEFA", "#FFA07A", "#D8BFD8", "#FF69B4"];

    function changeBackground() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }

    function changeTextColor() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.color = randomColor;
    }

    function changeFontSize() {
      const sizes = ["16px", "18px", "20px", "22px", "24px"];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      document.body.style.fontSize = randomSize;
    }

    function resetPage() {
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "#222";
      document.body.style.fontSize = "16px";
      document.getElementById("result").innerText = "";
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
    }
 