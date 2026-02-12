// CONFIG
const SELLER_WHATSAPP = "919395744401"; 
const BOT_TOKEN = "8546441412:AAHaEQ0PEnJeoDuDAyfDEL_qbv4kWI1IkmU";
const CHAT_ID = "-1003766501173";

// STATE
let cart = [];
let currentProduct = {};
let currentQty = 1;
let selectedSize = 'S'; // Default
let selectedColor = 'Default';

// --- INITIALIZE ---
window.onload = () => {
    if(typeof products !== 'undefined') renderGrid(products);
    
    // Slider Logic
    const slider = document.getElementById('heroSlider');
    if(slider && products) {
        slider.innerHTML = products.slice(0,5).map((p,i) => `<div class="slide ${i===0?'active':''}" style="background-image:linear-gradient(to top,#000,transparent),url('${p.img}')"></div>`).join('');
        let cur = 0; const slides = document.querySelectorAll('.slide');
        setInterval(() => { slides[cur].classList.remove('active'); cur=(cur+1)%slides.length; slides[cur].classList.add('active'); }, 4000);
    }
    
    startTimer();
    updateCartCount();
    
    // Fake Notification
    setInterval(() => {
        const p = products[Math.floor(Math.random()*products.length)];
        const n = document.getElementById('notificationPopup');
        document.getElementById('notifImg').src = p.img;
        document.getElementById('notifText').innerHTML = `Someone ordered<br>${p.name}`;
        n.style.left="20px"; setTimeout(()=>n.style.left="-350px", 4000);
    }, 10000);
};

// --- RENDER GRID ---
function renderGrid(items) {
    const grid = document.getElementById('grid');
    grid.innerHTML = items.map(p => {
        const safeName = p.name.replace(/'/g, "\\'");
        const discount = Math.floor(Math.random() * 40) + 10;
        const oldPrice = '₹' + Math.floor(parseInt(p.price.replace(/\D/g,'')) * 1.4);
        
        return `
        <div class="product-card">
            <div class="discount-badge">-${discount}% OFF</div>
            <div class="id-badge">#${p.id}</div>
            <div class="img-box">
                <img src="${p.img}" alt="${p.name}" onclick="openProductPage('${p.id}', '${safeName}', '${p.price}', '${p.img}')">
            </div>
            <div class="info-box">
                <div class="rating-box"><i class="fas fa-star"></i> 4.5</div>
                <div class="p-title">${p.name}</div>
                <div class="p-price">${p.price} <span style="text-decoration:line-through; color:#666; font-size:0.8rem;">${oldPrice}</span></div>
                <button class="buy-btn" onclick="openProductPage('${p.id}', '${safeName}', '${p.price}', '${p.img}')">VIEW & BUY</button>
            </div>
        </div>`;
    }).join('');
}

// --- PRODUCT PAGE LOGIC (NEW) ---
function openProductPage(id, name, price, img) {
    currentProduct = { id, name, price, img };
    currentQty = 1;
    selectedSize = 'S'; // Default
    selectedColor = 'Default';
    
    // Switch Views
    document.getElementById('mainAppContainer').classList.add('hidden');
    document.getElementById('productViewPage').classList.remove('hidden');
    window.scrollTo(0,0);

    // Populate Data
    document.getElementById('mainImg').src = img;
    document.getElementById('pPageId').innerText = `ID: #${id}`;
    document.getElementById('pPageName').innerText = name;
    document.getElementById('pPagePrice').innerText = price;
    
    // Calc Old Price
    let val = parseInt(price.replace(/\D/g,''));
    document.getElementById('pPageOldPrice').innerText = '₹' + Math.floor(val * 1.5);
    
    // Reset Chips UI
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
    // Select defaults
    document.querySelector('#sizeChips .chip').classList.add('selected');
    document.querySelector('#colorChips .chip').classList.add('selected');
}

function closeProductPage() {
    document.getElementById('productViewPage').classList.add('hidden');
    document.getElementById('mainAppContainer').classList.remove('hidden');
}

function selectSize(el, size) {
    document.querySelectorAll('#sizeChips .chip').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedSize = size;
}

function selectColor(el, color) {
    document.querySelectorAll('#colorChips .chip').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedColor = color;
}

// --- ADD TO CART & BUY NOW ---
function addToCartFromPage() {
    cart.push({ ...currentProduct, size: selectedSize, color: selectedColor });
    updateCartCount();
    alert("Added to Cart!");
}

function openFinalCheckout() {
    // Open Address Form
    document.getElementById('checkoutPName').innerText = currentProduct.name;
    document.getElementById('checkoutDetails').innerText = `ID: #${currentProduct.id} | Size: ${selectedSize} | Color: ${selectedColor}`;
    document.getElementById('checkoutQty').innerText = currentQty;
    updateCheckoutTotal();
    document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutModal() { document.getElementById('checkoutModal').classList.add('hidden'); }

function updatePageQty(v) {
    currentQty = Math.max(1, currentQty + v);
    document.getElementById('checkoutQty').innerText = currentQty;
    updateCheckoutTotal();
}

function updateCheckoutTotal() {
    let p = parseInt(currentProduct.price.replace(/\D/g,''));
    document.getElementById('checkoutTotal').innerText = "₹" + (p * currentQty);
}

// --- FINAL CONFIRM (OLD MESSAGE FORMAT) ---
function confirmFinalOrder() {
    const name = document.getElementById('custName').value;
    const addr = document.getElementById('custAddress').value;
    if(!name || !addr) return alert("Please fill Name & Address");

    const total = parseInt(currentProduct.price.replace(/\D/g,'')) * currentQty;

    // DETAILED MESSAGE (OLD FORMAT)
    const msg = `
*🆔 Product ID: #${currentProduct.id}*
*🆕 NEW ORDER ALERT*
━━━━━━━━━━━━━━━━
👤 *Customer:* ${name}
🏠 *Address:* ${addr}

🛒 *Product:* ${currentProduct.name}
📏 *Size:* ${selectedSize}
🎨 *Color:* ${selectedColor}

🔢 *Quantity:* ${currentQty}
💵 *Unit Rate:* ${currentProduct.price}
💰 *TOTAL PAY:* ₹${total}
━━━━━━━━━━━━━━━━
*✅ Status: Pending Confirmation*`;

    sendToSeller(msg);
}

// --- CART LOGIC ---
function toggleCartModal() {
    const m = document.getElementById('cartModal');
    m.classList.toggle('hidden');
    renderCartList();
}

function renderCartList() {
    const list = document.getElementById('cartItemsList');
    if(cart.length === 0) { list.innerHTML = "<p style='text-align:center;'>Empty</p>"; document.getElementById('cartTotalDisplay').innerText="₹0"; return; }
    
    let total = 0;
    list.innerHTML = cart.map((item, i) => {
        let val = parseInt(item.price.replace(/\D/g,'')); total += val;
        return `<div style="display:flex; justify-content:space-between; margin-bottom:5px; border-bottom:1px solid #333; padding-bottom:5px;">
            <div><div style="color:white;">${item.name}</div><div style="font-size:0.8rem; color:#888;">${item.size}/${item.color}</div></div>
            <div style="text-align:right;"><div style="color:var(--accent-color);">${item.price}</div><i class="fas fa-trash" style="color:red; cursor:pointer;" onclick="cart.splice(${i},1);renderCartList();updateCartCount();"></i></div>
        </div>`;
    }).join('');
    document.getElementById('cartTotalDisplay').innerText = "₹" + total;
}

function checkoutCart() {
    const name = document.getElementById('cartName').value;
    const addr = document.getElementById('cartAddr').value;
    if(!name || !addr) return alert("Fill Details");
    
    let msg = `*🛒 CART ORDER*\n👤 ${name}\n🏠 ${addr}\n━━━━━━━━━━\n`;
    let total = 0;
    cart.forEach(c => { msg += `▪ #${c.id} ${c.name} [${c.size}/${c.color}]\n`; total += parseInt(c.price.replace(/\D/g,'')); });
    msg += `━━━━━━━━━━\n💰 TOTAL: ₹${total}`;
    sendToSeller(msg);
}

// UTILS
function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
    document.getElementById('pPageCartCount').innerText = cart.length;
}
function startTimer() {
    let t = 9000; setInterval(() => { t--; let h=Math.floor(t/3600), m=Math.floor((t%3600)/60), s=t%60; document.getElementById('countdownTimer').innerText=`${h}:${m}:${s}`; if(t<0)t=9000; }, 1000);
}
function sendToSeller(msg) {
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown'}) });
    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { document.getElementById('gameModal').classList.toggle('hidden'); }
function showGameMenu() { document.getElementById('tttGame').classList.add('hidden'); document.getElementById('chessGame').classList.add('hidden'); }
function searchProducts() { const q=document.getElementById('searchInput').value.toLowerCase(); renderGrid(products.filter(p=>p.name.toLowerCase().includes(q)||p.id==q.replace('#',''))); }
