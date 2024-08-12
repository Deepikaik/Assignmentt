const expenses = [];

// Function to add an expense
function addExpense(name, amount) {
    expenses.push({ name, amount });
    updateExpenseList();
    updateTotalExpense();
}

// Function to update the expense list in the DOM
function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = ''; // Clear the existing list

    expenses.forEach((expense) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);
    });
}

// Function to update the total expense in the DOM
function updateTotalExpense() {
    const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
}

// Event listener for the form submission
document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (name && !isNaN(amount) && amount > 0) {
        addExpense(name, amount);
        // Clear input fields
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    } else {
        alert('Please enter a valid name and amount.');
    }
});