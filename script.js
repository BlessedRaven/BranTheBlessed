// Simulated CLEM price data (replace with real API later)
function fetchClemPrice() {
    const simulatedPrice = (Math.random() * 100 + 50).toFixed(2); // Random price between $50-$150
    document.getElementById('clem-price').innerText = `CLEM Price: $${simulatedPrice}`;
}

// Handle trade form submission
document.getElementById('trade-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const osrsGp = document.getElementById('osrs-gp').value;
    const clemAmount = document.getElementById('clem-amount').value;
    const contact = document.getElementById('contact').value;

    // Create trade object
    const trade = {
        osrsGp: osrsGp + 'M GP',
        clem: clemAmount + ' CLEM',
        contact: contact,
        timestamp: new Date().toLocaleString()
    };

    // Add trade to local storage (simulated persistence for static site)
    let trades = JSON.parse(localStorage.getItem('trades')) || [];
    trades.push(trade);
    localStorage.setItem('trades', JSON.stringify(trades));

    // Clear form
    document.getElementById('trade-form').reset();

    // Update trade list
    displayTrades();
});

// Display trades in the monitor
function displayTrades() {
    const tradeList = document.getElementById('trade-list');
    const trades = JSON.parse(localStorage.getItem('trades')) || [];

    tradeList.innerHTML = trades.map((trade, index) => `
        <div class="trade-card">
            <p><strong>OSRS GP:</strong> ${trade.osrsGp}</p>
            <p><strong>CLEM:</strong> ${trade.clem}</p>
            <p><strong>Contact:</strong> ${trade.contact}</p>
            <p><strong>Posted:</strong> ${trade.timestamp}</p>
            <button onclick="removeTrade(${index})" class="mt-2 bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded">Remove</button>
        </div>
    `).join('');
}

// Remove a trade
function removeTrade(index) {
    let trades = JSON.parse(localStorage.getItem('trades')) || [];
    trades.splice(index, 1);
    localStorage.setItem('trades', JSON.stringify(trades));
    displayTrades();
}

// Initialize
fetchClemPrice();
displayTrades();
setInterval(fetchClemPrice, 5000); // Update price every 5 seconds
