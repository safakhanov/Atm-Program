let balance = 0;

const balanceElement = document.getElementById("balance");
const amountInput = document.getElementById("amount");

function updateBalance() {
  balanceElement.textContent = balance;
}
// balansi gosterir
function showBalance() {
  alert(`Balansiniz: ${balance} Azn`);
}
//pul kocurmek ucun funksiya
function deposit() {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Zehmet olmasa duzgun mebleg qeyd edin.");
  } else {
    balance += amount;
    updateBalance();
    alert(`${amount} Azn kocuruldu. Yeni Balansiniz: ${balance} AZN`);
  }
}
// pul cekmek ucun funksiya
function withdraw() {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Zehmet olmasa duzgun mebleg qeyd edin.");
  } else if (amount > balance) {
    alert("Kifayet qeder mebleg yoxdur.");
  } else {
    balance -= amount;
    updateBalance();
    alert(`${amount} Azn cekildi. Yeni Balansiniz: ${balance} AZN`);
  }
}
