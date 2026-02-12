// CONFIG
const SELLER_WHATSAPP = "919395744401"; 
const BOT_TOKEN = "8546441412:AAHaEQ0PEnJeoDuDAyfDEL_qbv4kWI1IkmU";
const CHAT_ID = "-1003766501173";

// Toggles
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { document.getElementById('gameModal').classList.toggle('hidden'); if(typeof showGameMenu === 'function') showGameMenu(); }

// --- FEATURE 7: DARK/LIGHT MODE TOGGLE ---
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('themeIcon');
    if(document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// --- FEATURE 2: FILTER LOGIC ---
function filterProducts(category) {
    // Buttons active state update
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter Logic
    if(typeof products !== 'undefined') {
        if(category === 'all') {
            renderGrid(products);
        } else {
            // Check if name contains the category string (Simple filter)
            const filtered = products.filter(p => p.name.toLowerCase().includes(category));
            renderGrid(filtered);
        }
    }
}

// --- RENDER GRID WITH RATINGS (FEATURE 6) ---
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if (!items || items.length === 0) { grid.innerHTML = '<p style="text-align:center; width:100%;">No products found.</p>'; return; }
    
    grid.innerHTML = items.map(p => {
        // Generate random rating between 4.0 and 5.0
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

// --- FEATURE 5: FAKE NOTIFICATIONS ---
const fakeNames = ["Rahul", "Amit", "Priya", "Sneha", "Vikram", "Rohan", "Anjali"];
const fakeCities = ["Delhi", "Mumbai", "Pune", "Bihar", "UP", "Bangalore"];

function showNotification() {
    if(typeof products === 'undefined' || products.length === 0) return;

    const notif = document.getElementById('notificationPopup');
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    const randomCity = fakeCities[Math.floor(Math.random() * fakeCities.length)];

    // HTML Update inside notification
    document.getElementById('notifImg').src = randomProduct.img;
    document.getElementById('notifText').innerHTML = `<strong>${randomName} from ${randomCity}</strong> just ordered ${randomProduct.name}!`;
    
    // Show Animation
    notif.style.left = "20px";
    
    // Hide after 4 seconds
    setTimeout(() => {
        notif.style.left = "-300px";
    }, 4000);
}

// Start Notifications Loop (Every 15 seconds)
setInterval(showNotification, 15000);
// First one after 5 seconds
setTimeout(showNotification, 5000);


// --- ORDER MODAL LOGIC (UNCHANGED) ---
let currentProduct = {}; 
let currentQty = 1;

function openOrderModal(name, id, price) {
    currentProduct = { name, id, price };
    currentQty = 1; 
    document.getElementById('modalProductName').innerText = name;
    document.getElementById('modalProductPrice').innerText = price;
    document.getElementById('qtyDisplay').innerText = "1";
    document.getElementById('prodSize').selectedIndex = 0;
    document.getElementById('prodColor').selectedIndex = 0;
    document.getElementById('orderModal').classList.remove('hidden');
}

function closeOrderModal() { document.getElementById('orderModal').classList.add('hidden'); }

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

    if (!name || !address) { alert("Please enter Name and Address first!"); return; }

    let rawPrice = String(currentProduct.price).replace(/[^0-9.]/g, ''); 
    let unitPrice = parseFloat(rawPrice);
    let totalVal = unitPrice ? (unitPrice * currentQty) : "Ask Seller";

    const waMessage = `*🆕 New Order Request*\n\n👤 *Name:* ${name}\n🏠 *Address:* ${address}\n\n🛒 *Product:* ${currentProduct.name}\n🆔 *ID:* #${currentProduct.id}\n📏 *Size:* ${size}\n🎨 *Color:* ${color}\n🔢 *Quantity:* ${currentQty}\n💰 *Unit Price:* ${currentProduct.price}\n💵 *Total Value:* ${totalVal}\n\n-----------------\nPlease confirm my order.`;
    const waURL = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(waMessage)}`;
    
    // Telegram Log
    const tgMessage = `📦 *Order!* ${name} | ${currentProduct.name} (x${currentQty}) | ${totalVal}`;
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: tgMessage, parse_mode: 'Markdown' })
    }).catch(e => console.error(e));

    closeOrderModal();
    window.location.href = waURL;
}

// Search
document.getElementById('searchInput')?.addEventListener('input', e => {
    if(typeof products !== 'undefined') renderGrid(products.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase())));
});

// Slider & Init
if(typeof products !== 'undefined') {
    const slider = document.getElementById('heroSlider');
    if(slider) {
        slider.innerHTML = products.slice(0, 5).map((p, i) => `<div class="slide ${i===0?'active':''}" style="background-image:url('${p.img}')"><div class="slide-content"><div class="slide-title">${p.name}</div></div></div>`).join('');
        let c = 0; setInterval(() => { const s = document.querySelectorAll('.slide'); if(s.length){ s[c].classList.remove('active'); c=(c+1)%s.length; s[c].classList.add('active'); } }, 3000);
        renderGrid(products);
    }
}
    
