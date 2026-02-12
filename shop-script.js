// ===========================================
// 1. CONFIGURATION & STATE
// ===========================================
const SELLER_WHATSAPP = "919395744401"; 
const BOT_TOKEN = "8546441412:AAHaEQ0PEnJeoDuDAyfDEL_qbv4kWI1IkmU";
const CHAT_ID = "-1003766501173";

// Global Variables
let cart = [];
let currentProduct = {};
let currentQty = 1;
let selectedSize = 'S'; 
let selectedColor = 'Default';

// ===========================================
// 2. INITIALIZATION (On Page Load)
// ===========================================
window.onload = () => {
    // A. Render Product Grid
    if(typeof products !== 'undefined') {
        renderGrid(products);
    }
    
    // B. Initialize Hero Slider
    const slider = document.getElementById('heroSlider');
    if(slider && products) {
        slider.innerHTML = products.slice(0,5).map((p,i) => 
            `<div class="slide ${i===0?'active':''}" style="background-image:linear-gradient(to top,#000,transparent),url('${p.img}')"></div>`
        ).join('');
        
        // Auto Slide Logic
        let cur = 0; 
        const slides = document.querySelectorAll('.slide');
        setInterval(() => { 
            if(slides.length > 0) {
                slides[cur].classList.remove('active'); 
                cur = (cur + 1) % slides.length; 
                slides[cur].classList.add('active'); 
            }
        }, 4000);
    }
    
    // C. Start Timer
    startTimer();
    
    // D. Update Cart Count UI
    updateCartCount();
    
    // E. Fake Notification Loop
    setInterval(() => {
        const p = products[Math.floor(Math.random()*products.length)];
        const n = document.getElementById('notificationPopup');
        if(n) { 
            document.getElementById('notifImg').src = p.img; 
            document.getElementById('notifText').innerHTML = `Someone just ordered<br>${p.name}`; 
            n.style.left="20px"; 
            setTimeout(() => n.style.left="-350px", 4000); 
        }
    }, 10000);
};

// ===========================================
// 3. HOME PAGE GRID RENDERING
// ===========================================
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if(!grid) return;
    
    grid.innerHTML = items.map(p => {
        const safeName = p.name.replace(/'/g, "\\'");
        const discount = Math.floor(Math.random()*40)+10;
        const oldPrice = '₹' + Math.floor(parseInt(p.price.replace(/\D/g,'')) * 1.4);
        
        return `
        <div class="product-card">
            <div class="discount-badge">-${discount}% OFF</div>
            <div class="id-badge">#${p.id}</div>
            
            <div class="img-box">
                <img src="${p.img}" alt="${p.name}" onclick="openProductPage('${p.id}', '${safeName}', '${p.price}', '${p.img}')">
                
                <div class="card-actions">
                    <div class="action-btn heart" onclick="toggleHeart(this); event.stopPropagation()">
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="action-btn share" onclick="shareProduct('${safeName}', '${p.price}'); event.stopPropagation()">
                        <i class="fas fa-share-alt"></i>
                    </div>
                </div>
            </div>
            
            <div class="info-box">
                <div class="rating-box"><i class="fas fa-star"></i> 4.5</div>
                <div class="p-title">${p.name}</div>
                <div class="p-price">${p.price} <span>${oldPrice}</span></div>
                
                <button class="buy-btn" onclick="openProductPage('${p.id}', '${safeName}', '${p.price}', '${p.img}')">VIEW & BUY</button>
            </div>
        </div>`;
    }).join('');
}

// ===========================================
// 4. FLIPKART STYLE PRODUCT PAGE LOGIC
// ===========================================
function openProductPage(id, name, price, img) {
    // 1. Set Current Product Data
    currentProduct = { id, name, price, img };
    currentQty = 1;
    selectedSize = 'S'; 
    selectedColor = 'Default';
    
    // 2. Hide Main Page, Show Product Page
    document.getElementById('mainAppContainer').classList.add('hidden');
    document.getElementById('productViewPage').classList.remove('hidden');
    window.scrollTo(0,0); 

    // 3. Populate Data in UI
    document.getElementById('mainImg').src = img;
    document.getElementById('pPageId').innerText = `ID: #${id}`;
    document.getElementById('pPageName').innerText = name;
    document.getElementById('pPagePrice').innerText = price;
    
    // Calculate Old Price for display
    let val = parseInt(price.replace(/\D/g,''));
    document.getElementById('pPageOldPrice').innerText = '₹' + Math.floor(val * 1.5);
    
    // 4. Reset Chip Selection (Border Color Fix)
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
    
    // Select Default Chips (First ones)
    if(document.querySelector('#sizeChips .chip')) 
        document.querySelector('#sizeChips .chip').classList.add('selected');
    
    if(document.querySelector('#colorChips .chip')) 
        document.querySelector('#colorChips .chip').classList.add('selected');
}

function closeProductPage() {
    document.getElementById('productViewPage').classList.add('hidden');
    document.getElementById('mainAppContainer').classList.remove('hidden');
}

// Chip Selection Logic (Highlight Green)
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

// ===========================================
// 5. CHECKOUT & ORDER LOGIC
// ===========================================

// A. Add to Cart (Logic Only)
function addToCartFromPage() {
    cart.push({ ...currentProduct, size: selectedSize, color: selectedColor });
    updateCartCount();
    // Animation/Feedback
    const btn = document.querySelector('.cart-action');
    const oldText = btn.innerText;
    btn.innerText = "ADDED ✔";
    setTimeout(() => btn.innerText = oldText, 1500);
}

// B. Buy Now -> Open Address Modal
function openFinalCheckout() {
    document.getElementById('checkoutPName').innerText = currentProduct.name;
    document.getElementById('checkoutDetails').innerText = `ID: #${currentProduct.id} | Size: ${selectedSize} | Color: ${selectedColor}`;
    document.getElementById('checkoutQty').innerText = currentQty;
    
    // Calculate Total
    updateCheckoutTotal();
    
    document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutModal() { 
    document.getElementById('checkoutModal').classList.add('hidden'); 
}

// C. Quantity Logic inside Modal
function updatePageQty(v) {
    currentQty = Math.max(1, currentQty + v);
    document.getElementById('checkoutQty').innerText = currentQty;
    updateCheckoutTotal();
}

function updateCheckoutTotal() {
    let p = parseInt(currentProduct.price.replace(/\D/g,''));
    document.getElementById('checkoutTotal').innerText = "₹" + (p * currentQty);
}

// D. Send WhatsApp/Telegram Message
function confirmFinalOrder() {
    const name = document.getElementById('custName').value;
    const addr = document.getElementById('custAddress').value;
    
    if(!name || !addr) return alert("Please enter your Name and Address!");

    const total = parseInt(currentProduct.price.replace(/\D/g,'')) * currentQty;

    const msg = `
*🆔 Product ID: #${currentProduct.id}*
*🆕 NEW SINGLE ORDER*
━━━━━━━━━━━━━━━━
👤 *Customer:* ${name}
🏠 *Address:* ${addr}

🛒 *Product:* ${currentProduct.name}
📏 *Size:* ${selectedSize}
🎨 *Color:* ${selectedColor}

🔢 *Quantity:* ${currentQty}
💵 *Unit Price:* ${currentProduct.price}
💰 *TOTAL PAY:* ₹${total}
━━━━━━━━━━━━━━━━
*✅ Status: Pending Confirmation*`;

    sendToSeller(msg);
}

// ===========================================
// 6. CART MODAL LOGIC
// ===========================================
function toggleCartModal() {
    document.getElementById('cartModal').classList.toggle('hidden');
    renderCartList();
}

function renderCartList() {
    const list = document.getElementById('cartItemsList');
    if(cart.length === 0) { 
        list.innerHTML = "<p style='text-align:center; color:#888; padding:20px;'>Your Cart is Empty</p>"; 
        document.getElementById('cartTotalDisplay').innerText = "₹0"; 
        return; 
    }
    
    let total = 0;
    list.innerHTML = cart.map((item, i) => {
        let val = parseInt(item.price.replace(/\D/g,'')); 
        total += val;
        return `
        <div style="display:flex; justify-content:space-between; margin-bottom:5px; border-bottom:1px solid #333; padding-bottom:5px;">
            <div>
                <div style="color:white; font-weight:bold;">${item.name}</div>
                <div style="font-size:0.8rem; color:#888;">ID: #${item.id} | ${item.size}/${item.color}</div>
            </div>
            <div style="text-align:right;">
                <div style="color:var(--accent-color);">${item.price}</div>
                <i class="fas fa-trash" style="color:red; cursor:pointer;" onclick="removeItem(${i})"></i>
            </div>
        </div>`;
    }).join('');
    
    document.getElementById('cartTotalDisplay').innerText = "₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCartList();
    updateCartCount();
}

function checkoutCart() {
    const name = document.getElementById('cartName').value;
    const addr = document.getElementById('cartAddr').value;
    if(!name || !addr) return alert("Please fill Name & Address");
    
    let msg = `*🛒 CART ORDER (Multiple Items)*\n👤 ${name}\n🏠 ${addr}\n━━━━━━━━━━\n`;
    let total = 0;
    cart.forEach(c => { 
        msg += `▪ #${c.id} ${c.name} [${c.size}/${c.color}]\n`; 
        total += parseInt(c.price.replace(/\D/g,'')); 
    });
    msg += `━━━━━━━━━━\n💰 GRAND TOTAL: ₹${total}`;
    
    sendToSeller(msg);
}

// ===========================================
// 7. UTILITIES & HELPERS
// ===========================================
function updateCartCount() {
    const count = cart.length;
    document.getElementById('cartCount').innerText = count;
    if(document.getElementById('pPageCartCount')) {
        document.getElementById('pPageCartCount').innerText = count;
    }
}

function toggleHeart(btn) {
    btn.classList.toggle('active');
    const i = btn.querySelector('i');
    if(btn.classList.contains('active')) {
        i.classList.remove('far'); i.classList.add('fas'); i.style.color = 'red';
    } else {
        i.classList.remove('fas'); i.classList.add('far'); i.style.color = 'white';
    }
}

function shareProduct(name, price) {
    const text = `Check out this ${name} for ${price} at AstraToonix!`;
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
}

function startTimer() {
    let t = 9000; 
    setInterval(() => { 
        t--; 
        let h = Math.floor(t/3600);
        let m = Math.floor((t%3600)/60);
        let s = t%60; 
        document.getElementById('countdownTimer').innerText = `${h}:${m}:${s}`; 
        if(t < 0) t = 9000; 
    }, 1000);
}

function sendToSeller(msg) {
    // Send to Telegram
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST', 
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown'}) 
    });
    // Send to WhatsApp
    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

// Toggles for UI Elements
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { document.getElementById('gameModal').classList.toggle('hidden'); }
function showGameMenu() { document.getElementById('tttGame').classList.add('hidden'); document.getElementById('chessGame').classList.add('hidden'); }
function closeImageModal() { document.getElementById('imageModal').classList.add('hidden'); }

// Search
function searchProducts() { 
    const q = document.getElementById('searchInput').value.toLowerCase(); 
    renderGrid(products.filter(p => p.name.toLowerCase().includes(q) || p.id == q.replace('#',''))); 
}

// Theme
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('themeIcon');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}
