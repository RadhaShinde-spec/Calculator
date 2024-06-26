function convertCurrency() {
    const inr = document.getElementById('inr').value;
    const exchangeRate = 0.012; // Example exchange rate (1 INR = 0.012 USD)
    const usd = inr * exchangeRate;
    document.getElementById('result').value = `${usd.toFixed(2)} USD`;
}
