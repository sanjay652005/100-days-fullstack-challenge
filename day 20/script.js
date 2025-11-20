// Select elements
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");
const clearAllBtn = document.getElementById("clearAll");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Function to render expenses
function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach((expense, index) => {
    const li = document.createElement("li");
    li.className = "expense-item";
    li.innerHTML = `
      <span>${expense.name} - ₹${expense.amount}</span>
      <button class="delete-btn" onclick="deleteExpense(${index})">🗑️</button>
    `;
    expenseList.appendChild(li);
    total += expense.amount;
  });

  totalDisplay.textContent = total;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Function to add expense
addExpenseBtn.addEventListener("click", () => {
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value);

  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense name and amount.");
    return;
  }

  const newExpense = { name, amount };
  expenses.push(newExpense);

  expenseNameInput.value = "";
  expenseAmountInput.value = "";

  renderExpenses();
});

// Delete expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

// Clear all expenses
clearAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all expenses?")) {
    expenses = [];
    renderExpenses();
  }
});

// Initialize on load
renderExpenses();
