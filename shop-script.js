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

// SLIDER LOGIC (Better Images)
function initSlider() {
    const slider = document.getElementById('heroSlider');
    if(!slider || !products || products.length === 0) return;
    const items = products.slice(0, 10);
    // Use high res background images
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

// RENDER PRODUCTS (Updated with Image Click)
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if(!grid) return;
    grid.innerHTML = items.map(p => {
        // Safe string escape for onclick
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

// NEW: IMAGE PREVIEW MODAL
function openImageModal(img, name, id, price) {
    const modal = document.getElementById('imageModal');
    document.getElementById('previewImage').src = img;
    document.getElementById('previewTitle').innerText = name;
    
    // Set up the button inside the preview to trigger order
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
    document.getElementById('notifText').innerHTML = `<strong>${names[Math.floor(Math.random()*names.length)]}</strong> ordered <br>${p.name}`;
    notif.style.left = "20px";
    setTimeout(() => { notif.style.left = "-350px"; }, 4000);
}

// ORDER LOGIC
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
    const size = document.getElementById('prodSize').value;
    const color = document.getElementById('prodColor').value;
    
    if(!name || !addr) return alert("Please fill Name and Address!");

    const msg = `*🆕 NEW ASTRATOONIX ORDER*\n----------------------\n👤 *Name:* ${name}\n🏠 *Address:* ${addr}\n🛒 *Item:* ${currentProduct.name}\n📏 *Size:* ${size}\n🎨 *Color:* ${color}\n🔢 *Qty:* ${currentQty}\n💰 *Price:* ${currentProduct.price}\n----------------------`;
    
    // Telegram API
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown'})
    });

    // WhatsApp Redirect
    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

window.onload = () => {
    if(typeof products !== 'undefined') { renderGrid(products); initSlider(); }
    setInterval(showNotification, 10000);
};
