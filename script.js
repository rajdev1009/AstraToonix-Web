// CONFIGURATION
const TELEGRAM_LINK = "https://t.me/+u4cmm3JmIrFlNzZl"; 
const IMG_BASE = "https://image.tmdb.org/t/p/w500";

// === FINAL 100 MOVIES DATABASE ===
const moviesDB = [
    // --- 1 to 10: SLIDER ---
    { id: 1, title: "Avengers: Endgame", img: `${IMG_BASE}/or06FN3Dka5tukK1e9sl16pB3iy.jpg` },
    { id: 2, title: "Avatar: Way of Water", img: `${IMG_BASE}/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg` },
    { id: 3, title: "Spider-Man: NWH", img: `${IMG_BASE}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg` },
    { id: 4, title: "The Batman", img: `${IMG_BASE}/74xTEgt7R36Fpooo50r9T25onhq.jpg` },
    { id: 5, title: "Oppenheimer", img: `${IMG_BASE}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg` },
    { id: 6, title: "Interstellar", img: `${IMG_BASE}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg` },
    { id: 7, title: "Titanic", img: `${IMG_BASE}/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg` },
    { id: 8, title: "Inception", img: `${IMG_BASE}/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg` },
    { id: 9, title: "Iron Man", img: `${IMG_BASE}/78lPtwv72eTNqFW9COBYI0dWDJa.jpg` },
    { id: 10, title: "Thor: Ragnarok", img: `${IMG_BASE}/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg` },

    // --- 11 to 20: TRENDING INDIA ---
    { id: 11, title: "Kalki 2898 AD", img: `${IMG_BASE}/sc1abg5EnyBFMCC66R8uQ.jpg` },
    { id: 12, title: "Stree 2", img: `${IMG_BASE}/dN51c6c5.jpg` }, 
    { id: 13, title: "Animal", img: `${IMG_BASE}/hr9rjR3J0xBBKCt8WMnDWJ7l6yV.jpg` },
    { id: 14, title: "Jawan", img: `${IMG_BASE}/jcdqxDqN40A4k5d5e5f5.jpg` },
    { id: 15, title: "Salaar", img: `${IMG_BASE}/m1b9bqTqQO9.jpg` },
    { id: 16, title: "Leo", img: `${IMG_BASE}/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg` },
    { id: 17, title: "KGF Chapter 2", img: `${IMG_BASE}/5DpBa36J183.jpg` },
    { id: 18, title: "RRR", img: `${IMG_BASE}/nEufeZlyAOLqO2brrs0yeF1kM9s.jpg` },
    { id: 19, title: "Pushpa: The Rise", img: `${IMG_BASE}/r8dtDFY2GZE8aAUnWJzSF5P2eM5.jpg` },
    { id: 20, title: "Pathaan", img: `${IMG_BASE}/m1b9bqTqQO9.jpg` },

    // --- 21 to 40: HOLLYWOOD ACTION ---
    { id: 21, title: "Black Panther", img: `${IMG_BASE}/uxzzxijgPIY7slzFvMotPv8wjKA.jpg` },
    { id: 22, title: "Doctor Strange", img: `${IMG_BASE}/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg` },
    { id: 23, title: "Venom", img: `${IMG_BASE}/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg` },
    { id: 24, title: "The Dark Knight", img: `${IMG_BASE}/qJ2tW6WMUDux911r6m7haRef0WH.jpg` },
    { id: 25, title: "John Wick 4", img: `${IMG_BASE}/vZloFAK7NmvMGKE7VkF5UPurDq.jpg` },
    { id: 26, title: "Deadpool", img: `${IMG_BASE}/yGSxMiF0cYuAiyGuPr8iPExtbIF.jpg` },
    { id: 27, title: "Aquaman", img: `${IMG_BASE}/xLPffWMhNb1E14BvfG09s0ulJDZ.jpg` },
    { id: 28, title: "Justice League", img: `${IMG_BASE}/eifGNCSDuxJeS1loAXil5bIGzhC.jpg` },
    { id: 29, title: "Man of Steel", img: `${IMG_BASE}/7rIPjn5TUK04O25ZkMyHrGNPgKL.jpg` },
    { id: 30, title: "Fast X", img: `${IMG_BASE}/fiVW06jE7z9YnO4trhaMEdcl4Cn.jpg` },
    { id: 31, title: "Mission Impossible 7", img: `${IMG_BASE}/AkJQpZp9WoNdj7pEIN9dWB7QLZo.jpg` },
    { id: 32, title: "Top Gun: Maverick", img: `${IMG_BASE}/62HCnUTziyWcpDaBO2i1DX17dbH.jpg` },
    { id: 33, title: "Transformers", img: `${IMG_BASE}/62JbYvE2zJgZ0z3c4P3y3j3j3j.jpg` },
    { id: 34, title: "Godzilla vs Kong", img: `${IMG_BASE}/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg` },
    { id: 35, title: "Jurassic World", img: `${IMG_BASE}/rHR4y9tqJJ1NGjC6XN3c0OQ45.jpg` },
    { id: 36, title: "Pirates of Caribbean", img: `${IMG_BASE}/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg` },
    { id: 37, title: "Harry Potter 1", img: `${IMG_BASE}/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg` },
    { id: 38, title: "Lord of the Rings", img: `${IMG_BASE}/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg` },
    { id: 39, title: "Matrix", img: `${IMG_BASE}/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg` },
    { id: 40, title: "Gladiator", img: `${IMG_BASE}/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg` },

    // --- 41 to 60: BOLLYWOOD HITS ---
    { id: 41, title: "Tiger 3", img: `${IMG_BASE}/7I6VvfcY4acOSAdLTjWWJqJ7a0.jpg` },
    { id: 42, title: "Dunki", img: `${IMG_BASE}/abWM2MqCs1H9UFXxEhfCKBJ1Zmc.jpg` },
    { id: 43, title: "Gadar 2", img: `${IMG_BASE}/ipoJc.jpg` },
    { id: 44, title: "Brahmastra", img: `${IMG_BASE}/iavXFb0GEmVmvK8qgbqgzbbGN2n.jpg` },
    { id: 45, title: "War", img: `${IMG_BASE}/7JeHrXHj.jpg` },
    { id: 46, title: "Kabir Singh", img: `${IMG_BASE}/d3EqMOJT4m3ou6NnmNGUX8dGyEh.jpg` },
    { id: 47, title: "Bhool Bhulaiyaa 2", img: `${IMG_BASE}/fwGD1j5.jpg` },
    { id: 48, title: "Drishyam 2", img: `${IMG_BASE}/5jctPQcI98Fb2ge02DP82cAzpOh.jpg` },
    { id: 49, title: "Sanju", img: `${IMG_BASE}/tnkXU4KZQkrcCA24PH6pf7sI9Y6.jpg` },
    { id: 50, title: "Dangal", img: `${IMG_BASE}/yJM8Yl5.jpg` },
    { id: 51, title: "Sultan", img: `${IMG_BASE}/1q1h.jpg` },
    { id: 52, title: "Bajrangi Bhaijaan", img: `${IMG_BASE}/myP5j5.jpg` },
    { id: 53, title: "PK", img: `${IMG_BASE}/z2u0YIMg0WiqNprocSFEasLBZg9.jpg` },
    { id: 54, title: "3 Idiots", img: `${IMG_BASE}/66AHI4BbklKwAxvKMcoH2akzhir.jpg` },
    { id: 55, title: "Chennai Express", img: `${IMG_BASE}/5h46tu7LHNEv0XLG4vuVhlqTZgS.jpg` },
    { id: 56, title: "Simmba", img: `${IMG_BASE}/a34234.jpg` },
    { id: 57, title: "Sooryavanshi", img: `${IMG_BASE}/b34234.jpg` },
    { id: 58, title: "Singham", img: `${IMG_BASE}/c34234.jpg` },
    { id: 59, title: "Dabangg", img: `${IMG_BASE}/d34234.jpg` },
    { id: 60, title: "Kick", img: `${IMG_BASE}/e34234.jpg` },

    // --- 61 to 80: SOUTH BLOCKBUSTERS ---
    { id: 61, title: "Baahubali 2", img: `${IMG_BASE}/2CAL2433ZeIihfX1Hb2139CX0pW.jpg` },
    { id: 62, title: "Kantara", img: `${IMG_BASE}/a3bkcZrVavWCVg92ZTL2jXzw1cM.jpg` },
    { id: 63, title: "Vikram", img: `${IMG_BASE}/bKptfUu72D3h8p8l8T8j5q5v5.jpg` },
    { id: 64, title: "Jailer", img: `${IMG_BASE}/4j0PNYTbV5yJ3j3j3j3j.jpg` }, 
    { id: 65, title: "Ponniyin Selvan 1", img: `${IMG_BASE}/b342.jpg` },
    { id: 66, title: "Ponniyin Selvan 2", img: `${IMG_BASE}/c542.jpg` },
    { id: 67, title: "Varisu", img: `${IMG_BASE}/d642.jpg` },
    { id: 68, title: "Thunivu", img: `${IMG_BASE}/e742.jpg` },
    { id: 69, title: "Beast", img: `${IMG_BASE}/f842.jpg` },
    { id: 70, title: "Master", img: `${IMG_BASE}/g942.jpg` },
    { id: 71, title: "Kaithi", img: `${IMG_BASE}/h042.jpg` },
    { id: 72, title: "777 Charlie", img: `${IMG_BASE}/i142.jpg` },
    { id: 73, title: "Major", img: `${IMG_BASE}/j242.jpg` },
    { id: 74, title: "Sita Ramam", img: `${IMG_BASE}/k342.jpg` },
    { id: 75, title: "Kartikeya 2", img: `${IMG_BASE}/l442.jpg` },
    { id: 76, title: "HanuMan", img: `${IMG_BASE}/m542.jpg` },
    { id: 77, title: "Merry Christmas", img: `${IMG_BASE}/n642.jpg` },
    { id: 78, title: "Captain Miller", img: `${IMG_BASE}/o742.jpg` },
    { id: 79, title: "Ayalaan", img: `${IMG_BASE}/p842.jpg` },
    { id: 80, title: "Guntur Kaaram", img: `${IMG_BASE}/q942.jpg` },

    // --- 81 to 100: ANIMATION & CLASSICS ---
    { id: 81, title: "Frozen 2", img: `${IMG_BASE}/mINJaa34MtknCYl5A45XP7cNOAP.jpg` },
    { id: 82, title: "Moana", img: `${IMG_BASE}/4JeejGugONWskkbn452248.jpg` },
    { id: 83, title: "Coco", img: `${IMG_BASE}/eKi8dIrr8voB6sYz2DjPEPb9f20.jpg` },
    { id: 84, title: "Zootopia", img: `${IMG_BASE}/sM33xM7awVP0AZ14wO2XI4H7T6L.jpg` },
    { id: 85, title: "Minions", img: `${IMG_BASE}/q0R4crx2SehcEEQJhYXIjNr38y.jpg` },
    { id: 86, title: "Despicable Me 3", img: `${IMG_BASE}/6t3cGo2nJVgnQqLEZ8qV8s469e.jpg` },
    { id: 87, title: "Kung Fu Panda", img: `${IMG_BASE}/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg` },
    { id: 88, title: "Shrek", img: `${IMG_BASE}/iB64vpL3qIezUk0CDpnPH05lNB.jpg` },
    { id: 89, title: "Tumbbad", img: `${IMG_BASE}/4B2Yv855UM38fyaHqqiBsYdpmoe.jpg` },
    { id: 90, title: "Gangs of Wasseypur", img: `${IMG_BASE}/asb4x3.jpg` },
    { id: 91, title: "Sholay", img: `${IMG_BASE}/lzLz3k2.jpg` },
    { id: 92, title: "Dilwale Dulhania...", img: `${IMG_BASE}/2CAL2433ZeIihfX1Hb2139CX0pW.jpg` },
    { id: 93, title: "Kuch Kuch Hota Hai", img: `${IMG_BASE}/c24234.jpg` },
    { id: 94, title: "Lagaan", img: `${IMG_BASE}/p24234.jpg` },
    { id: 95, title: "Swades", img: `${IMG_BASE}/r24234.jpg` },
    { id: 96, title: "Chak De India", img: `${IMG_BASE}/s24234.jpg` },
    { id: 97, title: "Don", img: `${IMG_BASE}/t24234.jpg` },
    { id: 98, title: "Dhoom 3", img: `${IMG_BASE}/u24234.jpg` },
    { id: 99, title: "Koi Mil Gaya", img: `${IMG_BASE}/v24234.jpg` },
    { id: 100, title: "Krrish", img: `${IMG_BASE}/w24234.jpg` }
];

// DOM Elements
const heroSlider = document.getElementById('heroSlider');
const trendingList = document.getElementById('trendingList');
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const searchBar = document.getElementById('searchBar');
const mainApp = document.getElementById('main-app');
const loadingScreen = document.getElementById('loadingScreen');
const progressBar = document.getElementById('progressBar');
const chatWindow = document.getElementById('chatWindow');
const devModal = document.getElementById('devModal');
const noResultsDiv = document.getElementById('noResults');

// 1. RENDER SLIDER
function renderSlider() {
    const heroMovies = moviesDB.slice(0, 10); 
    heroSlider.innerHTML = '';
    heroMovies.forEach((movie, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${movie.img}')`;
        slide.innerHTML = `<div class="slide-overlay"><div class="slide-title">${movie.title}</div></div>`;
        slide.onclick = () => startRedirect(movie.title);
        heroSlider.appendChild(slide);
    });
    
    let c = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.slide');
        if(slides.length) { 
            slides[c].classList.remove('active'); 
            c = (c + 1) % slides.length; 
            slides[c].classList.add('active'); 
        }
    }, 4000);
}

// 2. RENDER TRENDING
function renderTrending() {
    const trendingMovies = moviesDB.slice(10, 20);
    trendingList.innerHTML = '';
    trendingMovies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'h-card';
        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}" 
                 onerror="this.src='https://placehold.co/130x195?text=${encodeURIComponent(movie.title)}'">
            <div class="rank-number">${index + 1}</div>
        `;
        card.onclick = () => startRedirect(movie.title);
        trendingList.appendChild(card);
    });
}

// 3. RENDER GRID
function renderGrid(list) {
    movieGrid.innerHTML = '';
    if (list.length === 0) {
        noResultsDiv.classList.remove('hidden');
    } else {
        noResultsDiv.classList.add('hidden');
        list.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <div class="movie-card-image-container">
                    <div class="movie-number-tag">#${movie.id}</div>
                    <img src="${movie.img}" alt="${movie.title}" loading="lazy" 
                         onerror="this.src='https://placehold.co/200x300?text=${encodeURIComponent(movie.title)}'">
                </div>
                <div class="movie-title-text">${movie.title}</div>
            `;
            card.onclick = () => startRedirect(movie.title);
            movieGrid.appendChild(card);
        });
    }
}

// 4. SEARCH
function toggleSearch() {
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) searchInput.focus();
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = moviesDB.filter(m => m.title.toLowerCase().includes(term));
    renderGrid(filtered);
});

// 5. REDIRECT
function startRedirect(movieName) {
    mainApp.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    window.scrollTo(0, 0);

    // Encode movie name for Telegram Search
    const messageText = `Search: ${movieName}`;
    const encodedText = encodeURIComponent(messageText);
    const finalURL = `${TELEGRAM_LINK}?text=${encodedText}`;

    let width = 0;
    const interval = setInterval(() => {
        width += 2; 
        progressBar.style.width = width + '%';
        if (width >= 100) { 
            clearInterval(interval); 
            window.location.href = finalURL; 
        }
    }, 40);
}

// 6. TOGGLES
function toggleChatbot() { chatWindow.classList.toggle('hidden'); }
function toggleDevModal() { devModal.classList.toggle('hidden'); }

// 7. FLOAT BUTTON
const floatBtn = document.querySelector('.chat-float-btn');
let isDrag = false, hasMoved = false;

function handleDrag(e) {
    if (!isDrag) return;
    e.preventDefault(); hasMoved = true;
    let clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let clientY = e.touches ? e.touches[0].clientY : e.clientY;
    floatBtn.style.left = (clientX - 32) + 'px';
    floatBtn.style.top = (clientY - 32) + 'px';
    floatBtn.style.bottom = 'auto'; floatBtn.style.right = 'auto';
}

if(floatBtn) {
    floatBtn.addEventListener('mousedown', () => isDrag = true);
    floatBtn.addEventListener('touchstart', () => isDrag = true, {passive: false});
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('touchmove', handleDrag, {passive: false});
    document.addEventListener('mouseup', () => isDrag = false);
    document.addEventListener('touchend', () => isDrag = false);
    floatBtn.onclick = (e) => { if(!hasMoved) toggleChatbot(); hasMoved = false; };
}

// INIT
renderSlider();
renderTrending();
renderGrid(moviesDB);
