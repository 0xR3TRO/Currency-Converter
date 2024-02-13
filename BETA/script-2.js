// script-2.js
document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var fromCurrency = document.getElementById('from-currency').value;
    var toCurrency = document.getElementById('to-currency').value;

    // Fetch historical data and update chart
    fetch(`https://api.your-historical-data-api.com/${fromCurrency}/${toCurrency}`)
        .then(response => response.json())
        .then(data => {
            var datasets = data.map(item => {
                return {
                    t: item.date,
                    o: item.open,
                    h: item.high,
                    l: item.low,
                    c: item.close
                };
            });
            var ctx = document.getElementById('chart').getContext('2d');
            new Chart(ctx, {
                type: 'candlestick',
                data: {
                    datasets: [{
                        label: `${fromCurrency} to ${toCurrency}`,
                        data: datasets
                    }]
                }
            });
        });
});