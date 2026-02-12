// CONFIG
const SELLER_WHATSAPP = "919395744401"; 
const BOT_TOKEN = "8546441412:AAHaEQ0PEnJeoDuDAyfDEL_qbv4kWI1IkmU";
const CHAT_ID = "-1003766501173";

// SAMPLE PRODUCTS
const products = [
    { id: 1, name: "Premium Hoodie", price: "₹999", img: "https://placehold.co/300x300/1a1a1a/FFF?text=Hoodie" },
    { id: 2, name: "Nike Air Jordan", price: "₹2499", img: "https://placehold.co/300x300/red/FFF?text=Shoes" },
    { id: 3, name: "Smart Watch", price: "₹1850", img: "https://placehold.co/300x300/333/FFF?text=Watch" },
    { id: 4, name: "Denim Jacket", price: "₹1299", img: "https://placehold.co/300x300/blue/FFF?text=Jacket" },
    { id: 5, name: "Gaming Mouse", price: "₹499", img: "https://placehold.co/300x300/black/FFF?text=Mouse" },
    { id: 6, name: "Cargo Pants", price: "₹1050", img: "https://placehold.co/300x300/green/FFF?text=Pants" }
];

// CORE FUNCTIONS
function toggleChatbot() { document.getElementById('chatWindow').classList.toggle('hidden'); }
function toggleGameModal() { 
    const m = document.getElementById('gameModal'); 
    m.classList.toggle('hidden'); 
    if(!m.classList.contains('hidden')) showGameMenu(); 
}
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('themeIcon');
    icon.className = document.body.classList.contains('light-mode') ? 'fas fa-sun' : 'fas fa-moon';
}

// SHOP LOGIC
function renderGrid(items) {
    const grid = document.getElementById('grid');
    if (!items || items.length === 0) { grid.innerHTML = '<p>No products.</p>'; return; }
    grid.innerHTML = items.map(p => {
        const rating = (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1);
        return `
        <div class="product-card">
            <div class="id-badge">#${p.id}</div>
            <div class="img-box"><img src="${p.img}" alt="${p.name}"></div>
            <div class="info-box">
                <div class="p-title">${p.name}</div>
                <div class="rating-stars"><i class="fas fa-star"></i> <span>(${rating})</span></div>
                <div class="p-price">${p.price}</div>
                <button class="buy-btn" onclick="openOrderModal('${p.name}', '${p.id}', '${p.price}')">BUY NOW</button>
            </div>
        </div>`;
    }).join('');
}

function filterProducts(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    if(cat === 'all') renderGrid(products);
    else renderGrid(products.filter(p => p.name.toLowerCase().includes(cat)));
}

// ORDER LOGIC
let currProd = {}, currQty = 1;
function openOrderModal(n, i, p) {
    currProd = { name: n, id: i, price: p }; currQty = 1;
    document.getElementById('modalProductName').innerText = n;
    document.getElementById('qtyDisplay').innerText = "1";
    document.getElementById('orderModal').classList.remove('hidden');
}
function closeOrderModal() { document.getElementById('orderModal').classList.add('hidden'); }
function updateQty(n) { currQty += n; if(currQty < 1) currQty = 1; document.getElementById('qtyDisplay').innerText = currQty; }

function confirmOrder() {
    const name = document.getElementById('custName').value;
    const addr = document.getElementById('custAddress').value;
    const size = document.getElementById('prodSize').value;
    const color = document.getElementById('prodColor').value;
    
    if(!name || !addr) return alert("Enter details!");
    
    let val = parseFloat(currProd.price.replace(/[^0-9.]/g, '')) * currQty;
    const msg = `*New Order*\n👤 ${name}\n🏠 ${addr}\n🛒 ${currProd.name} (x${currQty})\n📏 ${size} | 🎨 ${color}\n💰 Total: ${val}`;
    window.location.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

// FAKE NOTIFICATIONS
function showNotif() {
    const p = products[Math.floor(Math.random() * products.length)];
    const names = ["Rahul", "Amit", "Priya", "Sneha"];
    const n = document.getElementById('notificationPopup');
    document.getElementById('notifImg').src = p.img;
    document.getElementById('notifText').innerHTML = `<strong>${names[Math.floor(Math.random()*names.length)]}</strong> ordered ${p.name}`;
    n.style.left = "20px";
    setTimeout(() => n.style.left = "-300px", 4000);
}
setInterval(showNotif, 15000);

// GAME LOGIC
function showGameMenu() {
    ['gameMenu', 'spinGame', 'tttGame', 'chessGame'].forEach(id => {
        const el = document.getElementById(id);
        if(id === 'gameMenu') el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
}
function startGame(type) {
    document.getElementById('gameMenu').classList.add('hidden');
    document.getElementById(type + 'Game').classList.remove('hidden');
    if(type === 'ttt') initTTT();
    if(type === 'chess') setTimeout(initChess, 100);
    if(type === 'spin') resetWheel();
}

// SPIN GAME
let spinning = false;
function resetWheel() { 
    const w = document.getElementById('theWheel'); 
    w.style.transition = 'none'; w.style.transform = 'rotate(0deg)'; 
    document.getElementById('spinResult').innerText = ""; spinning = false;
}
function spinTheWheel() {
    if(spinning) return; spinning = true;
    const deg = 1800 + Math.floor(Math.random() * 360);
    const w = document.getElementById('theWheel');
    w.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    w.style.transform = `rotate(-${deg}deg)`;
    setTimeout(() => {
        document.getElementById('spinResult').innerText = "You won 10% OFF! Take Screenshot.";
        spinning = false;
    }, 4000);
}

// TTT GAME
let ttt = ['', '', '', '', '', '', '', '', ''], active = true;
function initTTT() { ttt.fill(''); active = true; drawTTT(); document.getElementById('tttStatus').innerText="Your Turn"; }
function drawTTT() {
    const b = document.getElementById('tttBoard'); b.innerHTML = '';
    ttt.forEach((c, i) => {
        const d = document.createElement('div'); d.className = `cell ${c.toLowerCase()}`;
        d.innerText = c; d.onclick = () => moveTTT(i); b.appendChild(d);
    });
}
function moveTTT(i) {
    if(ttt[i] || !active) return;
    ttt[i] = 'X'; drawTTT();
    if(checkTTT('X')) return endTTT("You Won!");
    if(!ttt.includes('')) return endTTT("Draw");
    setTimeout(() => {
        const empty = ttt.map((v,k) => v===''?k:null).filter(v=>v!==null);
        if(empty.length) {
            ttt[empty[Math.floor(Math.random()*empty.length)]] = 'O'; drawTTT();
            if(checkTTT('O')) endTTT("AI Won!");
        }
    }, 500);
}
function checkTTT(p) {
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return wins.some(w => ttt[w[0]]===p && ttt[w[1]]===p && ttt[w[2]]===p);
}
function endTTT(m) { active = false; document.getElementById('tttStatus').innerText = m; }

// CHESS GAME
function initChess() {
    const game = new Chess();
    const board = Chessboard('myBoard', {
        draggable: true, position: 'start', pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
        onDrop: (source, target) => {
            if(game.move({from: source, to: target, promotion:'q'}) === null) return 'snapback';
            setTimeout(() => {
                const moves = game.moves();
                if(moves.length) { game.move(moves[Math.floor(Math.random()*moves.length)]); board.position(game.fen()); }
            }, 250);
        }
    });
    setTimeout(() => { window.dispatchEvent(new Event('resize')); board.resize(); }, 200);
}

// INIT
renderGrid(products);
document.getElementById('heroSlider').innerHTML = products.slice(0,3).map((p,i) => `<div class="slide ${i==0?'active':''}" style="background-image:url('${p.img}')"><div class="slide-content">${p.name}</div></div>`).join('');
let slideIdx = 0; setInterval(() => { 
    const s = document.querySelectorAll('.slide'); 
    s[slideIdx].classList.remove('active'); 
    slideIdx = (slideIdx+1)%s.length; 
    s[slideIdx].classList.add('active'); 
}, 3000);
