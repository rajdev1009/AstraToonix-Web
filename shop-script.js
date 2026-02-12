// CONFIGURATION
const SELLER_WHATSAPP = "919395744401"; 
const BOT_TOKEN = "8546441412:AAHaEQ0PEnJeoDuDAyfDEL_qbv4kWI1IkmU";
const CHAT_ID = "-1003766501173";

// GLOBAL STATE
let currentProduct = {}; 
let currentQty = 1;
let basePrice = 0; // Stores the numeric price of one item

// UI TOGGLES
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { document.getElementById('gameModal').classList.toggle('hidden'); if(typeof showGameMenu === 'function') showGameMenu(); }
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('themeIcon');
    icon.classList.toggle('fa-moon'); icon.classList.toggle('fa-sun');
}

// SLIDER LOGIC
function initSlider() {
    const slider = document.getElementById('heroSlider');
    if(!slider || !products || products.length === 0) return;
    const items = products.slice(0, 10);
    slider.innerHTML = items.map((p, i) => 
        `<div class="slide ${i===0?'active':''}" style="background-image:linear-gradient(to top, #000, transparent), url('${p.img}')"></div>`
    ).join('');
    
    let cur = 0; const slides = document.querySelectorAll('.slide');
    setInterval(() => {
        if(!slides.length) return;
        slides[cur].classList.remove('active');
        cur = (cur + 1) % slides.length;
        slides[cur].classList.add('active');
    }, 4000);
}

// RENDER PRODUCTS
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if(!grid) return;
    grid.innerHTML = items.map(p => {
        const safeName = p.name.replace(/'/g, "\\'");
        return `
        <div class="product-card">
            <div class="img-box" onclick="openImageModal('${p.img}', '${safeName}', '${p.id}', '${p.price}')">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="info-box">
                <div class="p-title">${p.name}</div>
                <div class="p-price">${p.price}</div>
                <button class="buy-btn" onclick="openOrderModal('${safeName}', '${p.id}', '${p.price}')">BUY NOW</button>
            </div>
        </div>`;
    }).join('');
}

// IMAGE PREVIEW MODAL
function openImageModal(img, name, id, price) {
    const modal = document.getElementById('imageModal');
    document.getElementById('previewImage').src = img;
    document.getElementById('previewTitle').innerText = name;
    
    // Configure the Buy Button inside preview
    const btn = document.getElementById('previewBuyBtn');
    btn.onclick = function() {
        closeImageModal();
        openOrderModal(name, id, price);
    };
    
    modal.classList.remove('hidden');
}

function closeImageModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

// SEARCH FUNCTION
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderGrid(filtered);
}

// NOTIFICATIONS
function showNotification() {
    const notif = document.getElementById('notificationPopup');
    if(!notif || !products.length) return;
    const p = products[Math.floor(Math.random()*products.length)];
    const names = ["Aman", "Rahul", "Priya", "Rohit", "Vikram", "Sneha"];
    document.getElementById('notifImg').src = p.img;
    document.getElementById('notifText').innerHTML = `<strong>${names[Math.floor(Math.random()*names.length)]}</strong> just ordered<br>${p.name}`;
    notif.style.left = "20px";
    setTimeout(() => { notif.style.left = "-350px"; }, 4000);
}

// --- ORDER LOGIC WITH CALCULATOR ---

function openOrderModal(name, id, priceString) {
    // 1. Reset Data
    currentProduct = { name, id, price: priceString };
    currentQty = 1;

    // 2. Parse Price (Remove ₹ and commas)
    // Example: "₹1,200" becomes 1200
    basePrice = parseInt(priceString.replace(/[^0-9]/g, ''));
    if(isNaN(basePrice)) basePrice = 0;

    // 3. Update UI
    document.getElementById('modalProductName').innerText = name;
    document.getElementById('modalProductPrice').innerText = priceString; // Unit Price
    document.getElementById('qtyDisplay').innerText = "1";
    document.getElementById('orderModal').classList.remove('hidden');

    // 4. Initial Calculation
    updateTotalCalculator();
}

function closeOrderModal() { document.getElementById('orderModal').classList.add('hidden'); }

function updateQty(change) {
    currentQty += change;
    if(currentQty < 1) currentQty = 1; // Min Limit
    document.getElementById('qtyDisplay').innerText = currentQty;
    updateTotalCalculator();
}

function updateTotalCalculator() {
    const totalAmount = basePrice * currentQty;
    
    // Update Total Display
    document.getElementById('totalPriceDisplay').innerText = "₹" + totalAmount;
    
    // Update Button Text
    document.getElementById('btnText').innerText = `PAY ₹${totalAmount} • CONFIRM`;
}

function confirmOrder() {
    const name = document.getElementById('custName').value.trim();
    const addr = document.getElementById('custAddress').value.trim();
    const size = document.getElementById('prodSize').value;
    const color = document.getElementById('prodColor').value;
    
    // Calculate Final Total again to be safe
    const totalPay = basePrice * currentQty;

    if(!name || !addr) return alert("Please fill Name and Address details!");

    // --- MESSAGE FORMATTING FOR TELEGRAM & WHATSAPP ---
    const msg = `
*🆕 NEW ORDER (AstraToonix)*
━━━━━━━━━━━━━━━━
👤 *Customer:* ${name}
🏠 *Address:* ${addr}

🛒 *Product:* ${currentProduct.name}
📏 *Size:* ${size}
🎨 *Color:* ${color}

🔢 *Quantity:* ${currentQty}
💵 *Unit Rate:* ${currentProduct.price}
💰 *TOTAL PAY:* ₹${totalPay}
━━━━━━━━━━━━━━━━
*✅ Status: Pending Confirmation*
`;

    // Send to Telegram
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown'})
    });

    // Send to WhatsApp
    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

window.onload = () => {
    if(typeof products !== 'undefined') { renderGrid(products); initSlider(); }
    setInterval(showNotification, 8000);
};
