// Balansı 0-a bərabər qoyuruq
let balance = 0;

// HTML-dəki "balance" elementini seçirik
const balanceElement = document.getElementById("balance");

// HTML-dəki "amount" inputunu seçirik
const amountInput = document.getElementById("amount");

// Balansı yeniləmək üçün funksiya
function updateBalance() {
  // HTML-dəki "balance" elementinin məzmununu balans dəyəri ilə dəyişirik
  balanceElement.textContent = balance;
}

// Balansı göstərmək üçün funksiya
function showBalance() {
  // İstifadəçiyə balansı göstərən bir bildiriş pəncərəsi çıxarır
  alert(`Balansiniz: ${balance} AZN`);
}

// Pul köçürmək üçün funksiya
function deposit() {
  // "amountInput"dan daxil olunan məbləği əldə edirik və tipini əvvəlcədən nəzərdə tutduğumuz kimi float-a çeviririk
  const amount = parseFloat(amountInput.value);

  // Əgər daxil edilən məbləğ nömrə deyilsə və ya 0-dan kiçikdirsə
  if (isNaN(amount) || amount <= 0) {
    // İstifadəçiyə düzgün məbləğ daxil etməsi üçün bir xəbərdarlıq bildirişi çıxarır
    alert("Zehmet olmasa duzgun mebleg qeyd edin.");
  } else {
    // Daxil edilən məbləği balansa əlavə edirik
    balance += amount;
    // Balansı yeniləyirik
    updateBalance();
    // İstifadəçiyə əlavə edilən məbləğ və yeni balansı göstərən bir bildiriş pəncərəsi çıxarır
    alert(`${amount} AZN kocuruldu. Yeni Balansiniz: ${balance} AZN`);
  }
}

// Pul çəkmək üçün funksiya
function withdraw() {
  // "amountInput"dan daxil olunan məbləği əldə edirik və tipini əvvəlcədən nəzərdə tutduğumuz kimi float-a çeviririk
  const amount = parseFloat(amountInput.value);

  // Əgər daxil edilən məbləğ nömrə deyilsə və ya 0-dan kiçikdirsə
  if (isNaN(amount) || amount <= 0) {
    // İstifadəçiyə düzgün məbləğ daxil etməsi üçün bir xəbərdarlıq bildirişi çıxarır
    alert("Zehmet olmasa duzgun mebleg qeyd edin.");
  } else if (amount > balance) {
    // Əgər çəkilmək istənilən məbləğ balansdan böyükdursə
    // İstifadəçiyə kifayət qədər məbləğ olmadığını bildirən bir xəbərdarlıq bildirişi çıxarır
    alert("Kifayet qeder mebleg yoxdur.");
  } else {
    // Əgər yuxarıdakı şərtlər uygun gelirse, çəkilmək istənilən məbləği balansdan çıxırıq
    balance -= amount;
    // Balansı yeniləyirik
    updateBalance();
    // İstifadəçiyə çəkdiyi məbləği və yeni balansı göstərən bir bildiriş pəncərəsi çıxarır
    alert(`${amount} AZN cekildi. Yeni Balansiniz: ${balance} AZN`);
  }
}
