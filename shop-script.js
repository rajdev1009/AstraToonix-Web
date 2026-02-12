// CONFIG
const SELLER_WHATSAPP = "919395744401"; 
const BOT_TOKEN = "8546441412:AAHaEQ0PEnJeoDuDAyfDEL_qbv4kWI1IkmU";
const CHAT_ID = "-1003766501173";

// Toggles
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { document.getElementById('gameModal').classList.toggle('hidden'); if(typeof showGameMenu === 'function') showGameMenu(); }

// --- ORDER MODAL LOGIC (UPDATED) ---
let currentProduct = {}; 
let currentQty = 1;

function openOrderModal(name, id, price) {
    currentProduct = { name, id, price };
    currentQty = 1; // Reset to 1
    
    // Fill Data
    document.getElementById('modalProductName').innerText = name;
    document.getElementById('modalProductPrice').innerText = price;
    document.getElementById('qtyDisplay').innerText = "1";
    
    // Reset Fields
    document.getElementById('prodSize').selectedIndex = 0;
    document.getElementById('prodColor').selectedIndex = 0;
    document.getElementById('custName').value = '';
    document.getElementById('custAddress').value = '';

    document.getElementById('orderModal').classList.remove('hidden');
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.add('hidden');
}

function updateQty(change) {
    currentQty += change;
    if (currentQty < 1) currentQty = 1;
    document.getElementById('qtyDisplay').innerText = currentQty;
}

function confirmOrder() {
    const name = document.getElementById('custName').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const size = document.getElementById('prodSize').value;
    const color = document.getElementById('prodColor').value;

    if (!name || !address) {
        alert("Please enter Name and Address first!");
        return;
    }

    // Price Calculation
    let rawPrice = String(currentProduct.price).replace(/[^0-9.]/g, ''); 
    let unitPrice = parseFloat(rawPrice);
    let totalVal = unitPrice ? (unitPrice * currentQty) : "Ask Seller";

    // 1. WhatsApp Message
    const waMessage = 
`*🆕 New Order Request*

👤 *Name:* ${name}
🏠 *Address:* ${address}

🛒 *Product:* ${currentProduct.name}
🆔 *ID:* #${currentProduct.id}
📏 *Size:* ${size}
🎨 *Color:* ${color}
🔢 *Quantity:* ${currentQty}
💰 *Unit Price:* ${currentProduct.price}
💵 *Total Value:* ${totalVal}

-----------------
Please confirm my order.`;

    const waURL = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(waMessage)}`;

    // 2. Telegram Log
    const tgMessage = `📦 *New Order Placed!*\n\n👤 Name: ${name}\n🛒 Item: ${currentProduct.name} (x${currentQty})\n📏 Size: ${size}\n🎨 Color: ${color}\n💰 Value: ${totalVal}`;
    
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: tgMessage, parse_mode: 'Markdown' })
    }).catch(e => console.error(e));

    // 3. Redirect
    closeOrderModal();
    window.location.href = waURL;
}

// --- RENDER GRID ---
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if (!items || items.length === 0) { grid.innerHTML = '<p>No products.</p>'; return; }
    
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <div class="id-badge">#${p.id}</div>
            <div class="img-box"><img src="${p.img}" alt="${p.name}"></div>
            <div class="info-box">
                <div class="p-title">${p.name}</div>
                <div class="p-price">${p.price}</div>
                <button class="buy-btn" onclick="openOrderModal('${p.name.replace(/'/g, "\\'")}', '${p.id}', '${p.price}')">BUY NOW</button>
            </div>
        </div>`).join('');
}

// Search & Slider
document.getElementById('searchInput')?.addEventListener('input', e => {
    if(typeof products !== 'undefined') renderGrid(products.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase())));
});

if(typeof products !== 'undefined') {
    const slider = document.getElementById('heroSlider');
    if(slider) {
        slider.innerHTML = products.slice(0, 5).map((p, i) => `<div class="slide ${i===0?'active':''}" style="background-image:url('${p.img}')"><div class="slide-content"><div class="slide-title">${p.name}</div></div></div>`).join('');
        let c = 0; setInterval(() => { const s = document.querySelectorAll('.slide'); if(s.length){ s[c].classList.remove('active'); c=(c+1)%s.length; s[c].classList.add('active'); } }, 3000);
        renderGrid(products);
    }
}
