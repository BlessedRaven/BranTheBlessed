fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        const ratesDiv = document.getElementById('rates');
        ratesDiv.innerHTML = `
            <p>Bitcoin (BTC): $${data.bitcoin.usd}</p>
            <p>Ethereum (ETH): $${data.ethereum.usd}</p>
        `;
    })
    .catch(error => console.error('Error fetching rates:', error));
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<canvas id="priceChart"></canvas>
<script>
fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7')
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById('priceChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.prices.map(price => new Date(price[0]).toLocaleDateString()),
                datasets: [{
                    label: 'Bitcoin Price (USD)',
                    data: data.prices.map(price => price[1]),
                    borderColor: '#f7931a',
                    fill: false
                }]
            }
        });
    });
</script>
