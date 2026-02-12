// CONFIG
const SELLER_WHATSAPP = "919395744401"; 
const BOT_TOKEN = "8546441412:AAHaEQ0PEnJeoDuDAyfDEL_qbv4kWI1IkmU";
const CHAT_ID = "-1003766501173";

// STATE
let cart = [];
let currentProduct = {}; 
let currentQty = 1;

// --- 1. RENDER GRID (With Cart, Heart, Share, Timer) ---
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if(!grid) return;
    
    grid.innerHTML = items.map(p => {
        const safeName = p.name.replace(/'/g, "\\'");
        const discount = Math.floor(Math.random() * 40) + 10;
        const rating = (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1);
        const oldPrice = '₹' + Math.floor(parseInt(p.price.replace(/\D/g,'')) * 1.4);

        return `
        <div class="product-card">
            <div class="discount-badge">-${discount}% OFF</div>
            
            <div class="img-box">
                <img src="${p.img}" onclick="openImageModal('${p.img}')" alt="${p.name}">
                
                <div class="card-actions">
                    <div class="action-btn heart" onclick="toggleHeart(this)"><i class="far fa-heart"></i></div>
                    <div class="action-btn share" onclick="shareProduct('${safeName}', '${p.price}')"><i class="fas fa-share-alt"></i></div>
                </div>
                <div class="id-badge">#${p.id}</div>
            </div>
            
            <div class="info-box">
                <div class="rating-box">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                    <span>${rating}</span>
                </div>
                <div class="p-title">${p.name}</div>
                <div class="p-price">${p.price} <span style="text-decoration:line-through; color:#666; font-size:0.8rem;">${oldPrice}</span></div>
                
                <div class="btn-group">
                    <button class="cart-btn" onclick="addToCart('${p.id}', '${safeName}', '${p.price}')"><i class="fas fa-plus"></i></button>
                    <button class="buy-btn" onclick="openOrderModal('${safeName}', '${p.id}', '${p.price}')">BUY NOW</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

// --- 2. CART SYSTEM LOGIC ---
function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCartCount();
    
    // Animation effect
    const btn = event.target;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => btn.innerHTML = '<i class="fas fa-plus"></i>', 1000);
}

function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('cartItemCount').innerText = cart.length;
}

function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('hidden');
    renderCartList();
}

function renderCartList() {
    const list = document.getElementById('cartItemsList');
    if(cart.length === 0) {
        list.innerHTML = '<p style="text-align:center; color:#888; padding:20px;">Cart is empty!</p>';
        document.getElementById('cartTotalDisplay').innerText = "₹0";
        return;
    }

    let total = 0;
    list.innerHTML = cart.map((item, index) => {
        const val = parseInt(item.price.replace(/\D/g,''));
        total += val;
        return `
        <div class="cart-item">
            <div>
                <div style="color:white; font-size:0.9rem;">${item.name}</div>
                <div style="color:#25D366; font-size:0.8rem;">${item.price}</div>
            </div>
            <i class="fas fa-trash" style="color:red; cursor:pointer;" onclick="removeFromCart(${index})"></i>
        </div>`;
    }).join('');
    
    document.getElementById('cartTotalDisplay').innerText = "₹" + total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCartList();
}

function checkoutCart() {
    const name = document.getElementById('cartName').value;
    const addr = document.getElementById('cartAddress').value;
    if(!name || !addr || cart.length === 0) return alert("Cart empty or details missing!");

    let msg = `*🛒 CART ORDER (AstraToonix)*\n👤 *${name}*\n🏠 *${addr}*\n━━━━━━━━━━━━━━━━\n`;
    let total = 0;
    cart.forEach(item => {
        msg += `▪️ ${item.name} (${item.price})\n`;
        total += parseInt(item.price.replace(/\D/g,''));
    });
    msg += `━━━━━━━━━━━━━━━━\n💰 *GRAND TOTAL: ₹${total}*`;

    sendToSeller(msg);
}

// --- 3. PRO FEATURES (Timer, Heart, Share) ---
function startTimer() {
    // 3 hours countdown
    let time = 3 * 60 * 60; 
    setInterval(() => {
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = time % 60;
        document.getElementById('countdownTimer').innerText = 
            `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        time--;
        if(time < 0) time = 3 * 60 * 60; // Reset loop
    }, 1000);
}

function toggleHeart(btn) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if(btn.classList.contains('active')) {
        icon.classList.remove('far'); icon.classList.add('fas');
    } else {
        icon.classList.remove('fas'); icon.classList.add('far');
    }
}

function shareProduct(name, price) {
    const text = `Check out this ${name} for only ${price} at AstraToonix!`;
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
}

// --- 4. EXISTING SINGLE BUY LOGIC ---
function openOrderModal(name, id, price) {
    currentProduct = { name, id, price }; currentQty = 1;
    document.getElementById('modalProdId').innerText = `ID: #${id}`;
    document.getElementById('modalProductName').innerText = name;
    updateSingleTotal();
    document.getElementById('orderModal').classList.remove('hidden');
}
function closeOrderModal() { document.getElementById('orderModal').classList.add('hidden'); }
function updateQty(v) { currentQty = Math.max(1, currentQty + v); document.getElementById('qtyDisplay').innerText = currentQty; updateSingleTotal(); }
function updateSingleTotal() {
    const p = parseInt(currentProduct.price.replace(/\D/g,''));
    document.getElementById('totalPriceDisplay').innerText = "₹" + (p * currentQty);
}
function confirmOrder() {
    const name = document.getElementById('custName').value;
    const addr = document.getElementById('custAddress').value;
    if(!name || !addr) return alert("Fill Details!");
    const total = parseInt(currentProduct.price.replace(/\D/g,'')) * currentQty;
    
    const msg = `*🆔 ID: #${currentProduct.id}*\n*🆕 SINGLE ORDER*\n👤 ${name}\n🏠 ${addr}\n🛒 ${currentProduct.name}\n🔢 Qty: ${currentQty}\n💰 *PAY: ₹${total}*`;
    sendToSeller(msg);
}

function sendToSeller(msg) {
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown'})
    });
    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

// UTILS
function openImageModal(src) { document.getElementById('previewImage').src = src; document.getElementById('imageModal').classList.remove('hidden'); }
function closeImageModal() { document.getElementById('imageModal').classList.add('hidden'); }
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { document.getElementById('gameModal').classList.toggle('hidden'); }
function searchProducts() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    renderGrid(products.filter(p => p.name.toLowerCase().includes(q) || p.id == q.replace('#','')));
}

window.onload = () => {
    if(typeof products !== 'undefined') { renderGrid(products); }
    // Slider Logic
    const slider = document.getElementById('heroSlider');
    if(slider && products) {
        slider.innerHTML = products.slice(0,5).map((p,i) => `<div class="slide ${i===0?'active':''}" style="background-image:linear-gradient(to top,#000,transparent),url('${p.img}')"></div>`).join('');
        let cur = 0; const slides = document.querySelectorAll('.slide');
        setInterval(() => { slides[cur].classList.remove('active'); cur=(cur+1)%slides.length; slides[cur].classList.add('active'); }, 4000);
    }
    startTimer();
    setInterval(() => { // Fake Notif
        const p = products[Math.floor(Math.random()*products.length)];
        const n = document.getElementById('notificationPopup');
        document.getElementById('notifImg').src = p.img;
        document.getElementById('notifText').innerHTML = `Someone ordered<br>${p.name}`;
        n.style.left="20px"; setTimeout(()=>n.style.left="-350px", 4000);
    }, 10000);
};
