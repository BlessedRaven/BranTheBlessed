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
