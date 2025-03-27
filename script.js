// Simulated CLEM price data (replace with real API later)
function fetchClemPrice() {
    // Simulate fetching CLEM price (e.g., from a custom API or CoinGecko if CLEM were real)
    const simulatedPrice = (Math.random() * 100 + 50).toFixed(2); // Random price between $50-$150
    document.getElementById('clem-price').innerText = `CLEM Price: $${simulatedPrice}`;
}

// Payment method redirects (replace with actual API integrations)
function buyWithStripe() {
    window.location.href = 'https://stripe.com'; // Replace with Stripe Checkout link
}

function buyWithPaypal() {
    window.location.href = 'https://paypal.com'; // Replace with PayPal payment link
}

function buyWithCrypto() {
    window.location.href = 'https://commerce.coinbase.com'; // Replace with Coinbase Commerce link
}

function buyWithBank() {
    alert('Bank transfer instructions will be emailed to you.');
    // Redirect to a custom bank transfer page or form
}

function buyWithMobile() {
    window.location.href = 'https://apple.com/apple-pay'; // Replace with Apple Pay/Google Pay link
}

function buyWithCashApp() {
    window.location.href = 'https://cash.app'; // Replace with Cash App payment link
}

// Chart data for CLEM price trend (simulated)
function loadClemChart() {
    const ctx = document.getElementById('clemChart').getContext('2d');
    const prices = Array.from({ length: 7 }, () => Math.random() * 100 + 50); // 7 days of random prices
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'CLEM Price (USD)',
                data: prices,
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: false }
            }
        }
    });
}

// Initialize
fetchClemPrice();
loadClemChart();
setInterval(fetchClemPrice, 5000); // Update price every 5 seconds
