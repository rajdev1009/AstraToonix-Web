// CONFIG
const SELLER_WHATSAPP = "919395744401"; 
const BOT_TOKEN = "8546441412:AAHaEQ0PEnJeoDuDAyfDEL_qbv4kWI1IkmU";
const CHAT_ID = "-1003766501173";

// UI Toggles
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { document.getElementById('gameModal').classList.toggle('hidden'); if(typeof showGameMenu === 'function') showGameMenu(); }

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('themeIcon');
    if(document.body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Product Filtering
function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    if(typeof products === 'undefined') return;
    const filtered = category === 'all' ? products : products.filter(p => p.name.toLowerCase().includes(category));
    renderGrid(filtered);
}

// Main Grid Rendering
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if (!grid || !items || items.length === 0) { grid.innerHTML = '<p>No products found.</p>'; return; }
    
    grid.innerHTML = items.map(p => {
        const rating = (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1);
        const reviews = Math.floor(Math.random() * 200) + 20;
        return `
        <div class="product-card">
            <div class="id-badge">#${p.id}</div>
            <div class="img-box"><img src="${p.img}" alt="${p.name}"></div>
            <div class="info-box">
                <div class="p-title">${p.name}</div>
                <div class="rating-stars">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                    <span>(${rating}) • ${reviews} sold</span>
                </div>
                <div class="p-price">${p.price}</div>
                <button class="buy-btn" onclick="openOrderModal('${p.name.replace(/'/g, "\\'")}', '${p.id}', '${p.price}')">BUY NOW</button>
            </div>
        </div>`;
    }).join('');
}

// Fake Notifications Loop
function showNotification() {
    if(!products || products.length === 0) return;
    const notif = document.getElementById('notificationPopup');
    const p = products[Math.floor(Math.random() * products.length)];
    const names = ["Rahul", "Amit", "Priya", "Sneha", "Vikram"];
    const cities = ["Delhi", "Mumbai", "Pune", "Bihar", "UP"];

    document.getElementById('notifImg').src = p.img;
    document.getElementById('notifText').innerHTML = `<strong>${names[Math.floor(Math.random()*5)]} from ${cities[Math.floor(Math.random()*5)]}</strong> just ordered ${p.name}!`;
    
    notif.style.left = "20px";
    setTimeout(() => { notif.style.left = "-350px"; }, 4000);
}
setInterval(showNotification, 15000);

// Order Logic
let currentProduct = {}; let currentQty = 1;
function openOrderModal(name, id, price) {
    currentProduct = { name, id, price }; currentQty = 1;
    document.getElementById('modalProductName').innerText = name;
    document.getElementById('modalProductPrice').innerText = price;
    document.getElementById('qtyDisplay').innerText = "1";
    document.getElementById('orderModal').classList.remove('hidden');
}
function closeOrderModal() { document.getElementById('orderModal').classList.add('hidden'); }
function updateQty(change) { currentQty = Math.max(1, currentQty + change); document.getElementById('qtyDisplay').innerText = currentQty; }

function confirmOrder() {
    const name = document.getElementById('custName').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    if (!name || !address) { alert("Please enter Name and Address!"); return; }

    const rawPrice = currentProduct.price.replace(/[^0-9]/g, '');
    const total = parseInt(rawPrice) * currentQty;

    const msg = `*🆕 NEW ORDER ALERT*\n\n👤 *Name:* ${name}\n🏠 *Address:* ${address}\n🛒 *Item:* ${currentProduct.name}\n🔢 *Qty:* ${currentQty}\n💰 *Total:* ₹${total}`;

    // Telegram Log (Professional)
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown' })
    });

    // WhatsApp Redirect
    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

// Init
window.onload = () => {
    if(typeof products !== 'undefined') renderGrid(products);
    setTimeout(showNotification, 5000);
};
