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

// ===========================================
// 2. INITIALIZATION
// ===========================================
window.onload = () => {
    // 1. Render Products Grid
    if(typeof products !== 'undefined') renderGrid(products);
    
    // 2. Slider Logic
    const slider = document.getElementById('heroSlider');
    if(slider && products) {
        slider.innerHTML = products.slice(0,5).map((p,i) => 
            `<div class="slide ${i===0?'active':''}" style="background-image:linear-gradient(to top,#000,transparent),url('${p.img}')"></div>`
        ).join('');
        
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
    
    // 3. Start Timer & Updates
    startTimer();
    updateCartCount();
    
    // 4. Fake Notification Loop
    setInterval(() => {
        const p = products[Math.floor(Math.random()*products.length)];
        const n = document.getElementById('notificationPopup');
        if(n) { 
            document.getElementById('notifImg').src = p.img; 
            document.getElementById('notifText').innerHTML = `Someone ordered<br>${p.name}`; 
            n.style.left="20px"; 
            setTimeout(()=>n.style.left="-350px", 4000); 
        }
    }, 10000);
};

// ===========================================
// 3. RENDER GRID (With Plus Icon)
// ===========================================
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if(!grid) return;
    
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
                
                <div class="card-actions">
                    <div class="action-btn heart" onclick="toggleHeart(this); event.stopPropagation()">
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="action-btn share" onclick="shareProduct('${safeName}', '${p.price}'); event.stopPropagation()">
                        <i class="fas fa-share-alt"></i>
                    </div>
                    <div class="action-btn cart-plus" onclick="quickAddToCart(this, '${p.id}', '${safeName}', '${p.price}', '${p.img}'); event.stopPropagation()">
                        <i class="fas fa-plus"></i>
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

// QUICK ADD TO CART (Plus Icon Logic)
function quickAddToCart(btn, id, name, price, img) {
    cart.push({ id, name, price, img, size: 'Default', color: 'Default' });
    updateCartCount();
    
    // Animation: Change Plus to Check
    btn.classList.add('active');
    btn.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => { 
        btn.classList.remove('active'); 
        btn.innerHTML = '<i class="fas fa-plus"></i>'; 
    }, 1500);
}

// ===========================================
// 4. PRODUCT PAGE LOGIC (Flipkart Style)
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
    document.getElementById('pPageOldPrice').innerText = '₹'+Math.floor(val*1.5);
    
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
// 5. ACTIONS & CHECKOUT
// ===========================================

// Add to Cart from Page
function addToCartFromPage() { 
    cart.push({...currentProduct, size:selectedSize, color:selectedColor}); 
    updateCartCount(); 
    alert("Item Added to Cart!"); 
}

// --- SINGLE BUY LOGIC ---
function openFinalCheckout() {
    document.getElementById('checkoutPName').innerText = currentProduct.name;
    document.getElementById('checkoutDetails').innerText = `ID: #${currentProduct.id} | Size: ${selectedSize} | Color: ${selectedColor}`;
    document.getElementById('checkoutQty').innerText = currentQty;
    updateCheckoutTotal();
    document.getElementById('checkoutModal').classList.remove('hidden');
}

function closeCheckoutModal() { document.getElementById('checkoutModal').classList.add('hidden'); }

function updatePageQty(v) { 
    currentQty = Math.max(1, currentQty+v); 
    document.getElementById('checkoutQty').innerText = currentQty; 
    updateCheckoutTotal(); 
}

function updateCheckoutTotal() { 
    let p = parseInt(currentProduct.price.replace(/\D/g,'')); 
    document.getElementById('checkoutTotal').innerText = "₹"+(p*currentQty); 
}

// --- CONFIRM ORDER (SINGLE - YOUR REQUESTED FORMAT) ---
function confirmOrder() {
    const name = document.getElementById('custName').value;
    const addr = document.getElementById('custAddress').value;
    const city = document.getElementById('custCity').value;
    const pin = document.getElementById('custPincode').value;
    
    // Gender Logic
    let gender = "Male";
    const gCheck = document.querySelector('input[name="genderSingle"]:checked');
    if(gCheck) gender = gCheck.value;

    if(!name || !addr || !city || !pin) return alert("Please fill all details!");

    const total = parseInt(currentProduct.price.replace(/\D/g,'')) * currentQty;
    const genderStr = gender === 'Male' ? "Male ✅     female ❌" : "Male ❌     female ✅";

    const msg = `🆕 NEW ASTRATOONIX ORDER
----------------------
👤 Name: ${name}
🏠 Address: ${addr}
🛒 Item: ${currentProduct.name}
📏 Size: ${selectedSize}
🎨 Color: ${selectedColor}
🔢 Qty: ${currentQty}
💰 Price: ₹${total}
${genderStr} 
🏙️ Pincode ${pin}
🗺️ City' ${city} 
----------------------`;

    sendToSeller(msg);
}

// --- CART CHECKOUT LOGIC ---
function toggleCartModal() { 
    document.getElementById('cartModal').classList.toggle('hidden'); 
    renderCartList(); 
}

function renderCartList() {
    const list = document.getElementById('cartItemsList');
    if(cart.length===0){ list.innerHTML="<p style='text-align:center'>Cart is Empty</p>"; document.getElementById('cartTotalDisplay').innerText="₹0"; return; }
    
    let total=0;
    list.innerHTML = cart.map((item,i) => {
        let val=parseInt(item.price.replace(/\D/g,'')); total+=val;
        return `<div style="display:flex; justify-content:space-between; margin-bottom:5px; border-bottom:1px solid #333;">
            <div><div style="color:white">${item.name}</div><div style="font-size:0.8rem; color:#888;">${item.size}/${item.color}</div></div>
            <div style="text-align:right; color:#25D366;">${item.price} <i class="fas fa-trash" style="color:red; cursor:pointer" onclick="cart.splice(${i},1);renderCartList();updateCartCount()"></i></div>
        </div>`;
    }).join('');
    document.getElementById('cartTotalDisplay').innerText="₹"+total;
}

function checkoutCart() {
    const name = document.getElementById('cartName').value;
    const addr = document.getElementById('cartAddr').value;
    const city = document.getElementById('cartCity').value;
    const pin = document.getElementById('cartPincode').value;
    
    // Gender Logic for Cart
    let gender = "Male";
    const gCheck = document.querySelector('input[name="genderCart"]:checked');
    if(gCheck) gender = gCheck.value;

    if(!name || !addr || !city || !pin) return alert("Please fill all details!");

    const genderStr = gender === 'Male' ? "Male ✅     female ❌" : "Male ❌     female ✅";
    
    let msg = `🆕 NEW ASTRATOONIX ORDER (CART)
----------------------
👤 Name: ${name}
🏠 Address: ${addr}
${genderStr}
🏙️ Pincode ${pin}
🗺️ City' ${city}
----------------------
🛒 ITEMS:
`; 
    let total=0;
    cart.forEach(c => { 
        msg+=`▪ ${c.name} (${c.size}/${c.color}) - ${c.price}\n`; 
        let p = c.price.replace(/\D/g,'');
        if(p) total+=parseInt(p); 
    });
    msg+=`----------------------\n💰 GRAND TOTAL: ₹${total}`;
    
    sendToSeller(msg);
}

// ===========================================
// 6. UTILITIES
// ===========================================
function updateCartCount() { 
    document.getElementById('cartCount').innerText = cart.length; 
    if(document.getElementById('pPageCartCount')) document.getElementById('pPageCartCount').innerText = cart.length; 
}

function startTimer() { 
    let t=9000; 
    setInterval(()=>{ 
        t--; 
        let h=Math.floor(t/3600);
        let m=Math.floor((t%3600)/60);
        let s=t%60; 
        document.getElementById('countdownTimer').innerText=`${h}:${m}:${s}`; 
        if(t<0)t=9000; 
    }, 1000); 
}

function sendToSeller(msg) { 
    // Send to Telegram
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method:'POST', 
        headers:{'Content-Type':'application/json'}, 
        body:JSON.stringify({chat_id:CHAT_ID, text:msg, parse_mode:'Markdown'})
    }); 
    // Send to WhatsApp
    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`; 
}

// UI Toggles
function toggleHeart(btn) { 
    btn.classList.toggle('active'); 
    const i=btn.querySelector('i'); 
    if(btn.classList.contains('active')){i.classList.remove('far');i.classList.add('fas');i.style.color='red';}
    else{i.classList.remove('fas');i.classList.add('far');i.style.color='white';} 
}

function shareProduct(n,p) { window.open(`https://wa.me/?text=${encodeURIComponent('Check: '+n+' for '+p)}`, '_blank'); }
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { document.getElementById('gameModal').classList.toggle('hidden'); }
function showGameMenu() { document.getElementById('tttGame').classList.add('hidden'); document.getElementById('chessGame').classList.add('hidden'); }
function searchProducts() { const q=document.getElementById('searchInput').value.toLowerCase(); renderGrid(products.filter(p=>p.name.toLowerCase().includes(q)||p.id==q.replace('#',''))); }
function toggleTheme() { document.body.classList.toggle('light-mode'); }
function closeImageModal() { document.getElementById('imageModal').classList.add('hidden'); }
