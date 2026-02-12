// ===========================================
// 1. CONFIGURATION
// ===========================================
const SELLER_WHATSAPP = "919395744401"; 
const BOT_TOKEN = "8546441412:AAHaEQ0PEnJeoDuDAyfDEL_qbv4kWI1IkmU";
const CHAT_ID = "-1003766501173";

// STATE VARIABLES
let cart = [];
let currentProduct = {};
let currentQty = 1;
let selectedSize = 'S'; 
let selectedColor = 'Default';
let orderMode = 'single'; // Can be 'single' or 'cart'

// ===========================================
// 2. INITIALIZATION
// ===========================================
window.onload = () => {
    if(typeof products !== 'undefined') renderGrid(products);
    
    // Slider Logic
    const slider = document.getElementById('heroSlider');
    if(slider && products) {
        slider.innerHTML = products.slice(0,5).map((p,i) => 
            `<div class="slide ${i===0?'active':''}" style="background-image:linear-gradient(to top,#000,transparent),url('${p.img}')"></div>`
        ).join('');
        let cur = 0; const slides = document.querySelectorAll('.slide');
        setInterval(() => { slides[cur].classList.remove('active'); cur=(cur+1)%slides.length; slides[cur].classList.add('active'); }, 4000);
    }
    
    startTimer();
    updateCartCount();
    
    // Fake Notification
    setInterval(() => {
        const p = products[Math.floor(Math.random()*products.length)];
        const n = document.getElementById('notificationPopup');
        if(n) { document.getElementById('notifImg').src = p.img; document.getElementById('notifText').innerHTML = `Someone ordered<br>${p.name}`; n.style.left="20px"; setTimeout(()=>n.style.left="-350px", 4000); }
    }, 10000);
};

// ===========================================
// 3. HOME GRID RENDER (With Heart & Share)
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
                    <div class="action-btn heart" onclick="toggleHeart(this); event.stopPropagation()"><i class="far fa-heart"></i></div>
                    <div class="action-btn share" onclick="shareProduct('${safeName}', '${p.price}'); event.stopPropagation()"><i class="fas fa-share-alt"></i></div>
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
// 4. FLIPKART STYLE PAGE LOGIC
// ===========================================
function openProductPage(id, name, price, img) {
    currentProduct = { id, name, price, img };
    currentQty = 1; selectedSize='S'; selectedColor='Default';
    
    document.getElementById('mainAppContainer').classList.add('hidden');
    document.getElementById('productViewPage').classList.remove('hidden');
    window.scrollTo(0,0);

    document.getElementById('mainImg').src = img;
    document.getElementById('pPageId').innerText = `ID: #${id}`;
    document.getElementById('pPageName').innerText = name;
    document.getElementById('pPagePrice').innerText = price;
    
    let val = parseInt(price.replace(/\D/g,''));
    document.getElementById('pPageOldPrice').innerText = '₹' + Math.floor(val * 1.5);
    
    // Reset Chips
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
    if(document.querySelector('#sizeChips .chip')) document.querySelector('#sizeChips .chip').classList.add('selected');
    if(document.querySelector('#colorChips .chip')) document.querySelector('#colorChips .chip').classList.add('selected');
}

function closeProductPage() {
    document.getElementById('productViewPage').classList.add('hidden');
    document.getElementById('mainAppContainer').classList.remove('hidden');
}

function selectSize(el, s) { document.querySelectorAll('#sizeChips .chip').forEach(c => c.classList.remove('selected')); el.classList.add('selected'); selectedSize=s; }
function selectColor(el, c) { document.querySelectorAll('#colorChips .chip').forEach(c => c.classList.remove('selected')); el.classList.add('selected'); selectedColor=c; }

// ===========================================
// 5. UNIVERSAL MODAL LOGIC (The Magic Part)
// ===========================================
function openUniversalModal(mode) {
    orderMode = mode; // 'single' or 'cart'
    const modalContent = document.getElementById('orderContent');
    const totalDisplay = document.getElementById('finalTotalDisplay');
    
    if (mode === 'cart') {
        if(cart.length === 0) return alert("Your Cart is Empty!");
        
        // Render Cart List
        let total = 0;
        let html = '<div style="max-height:200px; overflow-y:auto;">';
        cart.forEach((item, index) => {
            let p = parseInt(item.price.replace(/\D/g,''));
            total += p;
            html += `
            <div class="order-summary-item">
                <div>
                    <strong style="color:white;">${item.name}</strong><br>
                    <span style="color:#888; font-size:0.8rem;">Size: ${item.size} | Color: ${item.color}</span>
                </div>
                <div style="text-align:right;">
                    <span style="color:var(--accent-color);">${item.price}</span>
                    <i class="fas fa-trash" style="color:red; margin-left:10px; cursor:pointer;" onclick="removeItem(${index})"></i>
                </div>
            </div>`;
        });
        html += '</div>';
        modalContent.innerHTML = html;
        totalDisplay.innerText = "₹" + total;
        
    } else {
        // Render Single Item
        let p = parseInt(currentProduct.price.replace(/\D/g,''));
        let total = p * currentQty;
        
        modalContent.innerHTML = `
        <div style="text-align:center; padding:10px;">
            <h3 style="color:var(--accent-color); margin:0;">${currentProduct.name}</h3>
            <p style="color:#aaa;">ID: #${currentProduct.id} | Size: ${selectedSize} | Color: ${selectedColor}</p>
            <div class="qty-control-panel">
                <button onclick="updateQty(-1)">-</button>
                <span id="uniQty">${currentQty}</span>
                <button onclick="updateQty(1)">+</button>
            </div>
        </div>`;
        totalDisplay.innerText = "₹" + total;
    }
    
    document.getElementById('universalModal').classList.remove('hidden');
}

function closeModal() { document.getElementById('universalModal').classList.add('hidden'); }

// Quantity Logic for Single Order inside Universal Modal
function updateQty(v) {
    if(orderMode === 'cart') return; // Qty only for single buy now
    currentQty = Math.max(1, currentQty + v);
    document.getElementById('uniQty').innerText = currentQty;
    
    let p = parseInt(currentProduct.price.replace(/\D/g,''));
    document.getElementById('finalTotalDisplay').innerText = "₹" + (p * currentQty);
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartCount();
    if(cart.length === 0) closeModal();
    else openUniversalModal('cart'); // Re-render
}

// ===========================================
// 6. UNIFIED CONFIRM ORDER (Smart Message)
// ===========================================
function confirmUnifiedOrder() {
    const name = document.getElementById('custName').value;
    const addr = document.getElementById('custAddress').value;
    if(!name || !addr) return alert("Please enter Name & Address!");

    let msg = `*🆕 NEW ASTRATOONIX ORDER*\n----------------------\n👤 *Name:* ${name}\n🏠 *Address:* ${addr}\n----------------------\n`;
    let grandTotal = 0;

    if (orderMode === 'single') {
        // --- SINGLE ITEM FORMAT ---
        let total = parseInt(currentProduct.price.replace(/\D/g,'')) * currentQty;
        grandTotal = total;
        
        msg += `🛒 *Item:* ${currentProduct.name}\n`;
        msg += `🆔 *ID:* #${currentProduct.id}\n`;
        msg += `📏 *Size:* ${selectedSize} | 🎨 *Color:* ${selectedColor}\n`;
        msg += `🔢 *Qty:* ${currentQty}\n`;
        msg += `💰 *Price:* ${currentProduct.price}\n`;
        
    } else {
        // --- CART LIST FORMAT ---
        cart.forEach(item => {
            let p = parseInt(item.price.replace(/\D/g,''));
            grandTotal += p;
            msg += `▪️ ${item.name} (${item.size}/${item.color}) - ${item.price}\n`;
        });
    }

    msg += `----------------------\n💰 *GRAND TOTAL: ₹${grandTotal}*`;

    // Send Message
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown'})
    });
    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

// ===========================================
// 7. UTILITIES
// ===========================================
function addToCartFromPage() {
    cart.push({ ...currentProduct, size: selectedSize, color: selectedColor });
    updateCartCount();
    const btn = document.querySelector('.cart-action');
    const old = btn.innerText; btn.innerText="ADDED ✔"; setTimeout(()=>btn.innerText=old, 1500);
}

function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
    if(document.getElementById('pPageCartCount')) document.getElementById('pPageCartCount').innerText = cart.length;
}

function toggleHeart(btn) {
    btn.classList.toggle('active');
    const i = btn.querySelector('i');
    if(btn.classList.contains('active')) { i.classList.remove('far'); i.classList.add('fas'); i.style.color='red'; }
    else { i.classList.remove('fas'); i.classList.add('far'); i.style.color='white'; }
}

function shareProduct(n, p) { window.open(`https://wa.me/?text=${encodeURIComponent('Check: '+n+' for '+p)}`, '_blank'); }

function startTimer() {
    let t=9000; setInterval(()=>{ t--; let h=Math.floor(t/3600), m=Math.floor((t%3600)/60), s=t%60; document.getElementById('countdownTimer').innerText=`${h}:${m}:${s}`; if(t<0)t=9000; }, 1000);
}

// Toggles
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { document.getElementById('gameModal').classList.toggle('hidden'); }
function toggleCartModal() { openUniversalModal('cart'); } // Connects Cart Icon to Universal Modal
function showGameMenu() { document.getElementById('tttGame').classList.add('hidden'); document.getElementById('chessGame').classList.add('hidden'); }
function searchProducts() { const q=document.getElementById('searchInput').value.toLowerCase(); renderGrid(products.filter(p=>p.name.toLowerCase().includes(q)||p.id==q.replace('#',''))); }
function toggleTheme() { document.body.classList.toggle('light-mode'); }
function closeImageModal() { document.getElementById('imageModal').classList.add('hidden'); }
