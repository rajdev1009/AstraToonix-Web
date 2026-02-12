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
    icon.classList.toggle('fa-moon'); icon.classList.toggle('fa-sun');
}

// 10-PIECE SLIDER
function initSlider() {
    const slider = document.getElementById('heroSlider');
    if(!slider || !products || products.length === 0) return;
    const items = products.slice(0, 10);
    slider.innerHTML = items.map((p, i) => `<div class="slide ${i===0?'active':''}" style="background-image:url('${p.img}')"></div>`).join('');
    let cur = 0; const slides = document.querySelectorAll('.slide');
    setInterval(() => {
        if(!slides.length) return;
        slides[cur].classList.remove('active');
        cur = (cur + 1) % slides.length;
        slides[cur].classList.add('active');
    }, 3000);
}

// Render Grid (Buy Button Fix)
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if(!grid) return;
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <div class="img-box"><img src="${p.img}"></div>
            <div class="info-box">
                <div class="p-title">${p.name}</div>
                <div class="p-price">${p.price}</div>
                <button class="buy-btn" onclick="openOrderModal('${p.name.replace(/'/g, "\\'")}', '${p.id}', '${p.price}')">BUY NOW</button>
            </div>
        </div>`).join('');
}

// Notifications
function showNotification() {
    const notif = document.getElementById('notificationPopup');
    if(!notif || !products.length) return;
    const p = products[Math.floor(Math.random()*products.length)];
    const names = ["Rahul", "Amit", "Priya", "Sneha", "Vikram"];
    document.getElementById('notifImg').src = p.img;
    document.getElementById('notifText').innerHTML = `<strong>${names[Math.floor(Math.random()*5)]}</strong> just ordered ${p.name}!`;
    notif.style.left = "20px";
    setTimeout(() => { notif.style.left = "-350px"; }, 4000);
}

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
function updateQty(v) { currentQty = Math.max(1, currentQty + v); document.getElementById('qtyDisplay').innerText = currentQty; }

function confirmOrder() {
    const name = document.getElementById('custName').value.trim();
    const addr = document.getElementById('custAddress').value.trim();
    if(!name || !addr) return alert("Fill details Rajdev bhai!");

    const msg = `*🆕 NEW ORDER ALERT*\n👤 *Name:* ${name}\n🏠 *Address:* ${addr}\n🛒 *Item:* ${currentProduct.name}\n🔢 *Qty:* ${currentQty}\n💰 *Price:* ${currentProduct.price}`;
    
    // Telegram Professional Message
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown'})
    });

    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

window.onload = () => {
    if(typeof products !== 'undefined') { renderGrid(products); initSlider(); }
    setInterval(showNotification, 15000);
};
