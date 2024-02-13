// script.js
document
	.getElementById("currency-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		var amount = document.getElementById("amount").value;
		var fromCurrency = document.getElementById("from-currency").value;
		var toCurrency = document.getElementById("to-currency").value;
		fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
			.then((response) => response.json())
			.then((data) => {
				var rate = data.rates[toCurrency];
				var result = amount * rate;
				document.getElementById(
					"result"
				).textContent = `Wynik: ${result.toFixed(2)} ${toCurrency}`;
			});
	});
