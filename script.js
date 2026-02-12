// CONFIGURATION
const TELEGRAM_LINK = "https://t.me/+u4cmm3JmIrFlNzZl"; 
const IMG_BASE = "https://image.tmdb.org/t/p/w500";

// === SMART IMAGE FUNCTION (NEW) ===
// Ye function check karega ki link "http" se shuru hai ya nahi.
// Agar full link hai -> Wahi use karega.
// Agar adha link hai -> To usme IMG_BASE jod dega.
function getSmartImage(path) {
    if (!path) return "https://placehold.co/200x300?text=No+Image";
    if (path.startsWith("http") || path.startsWith("https")) {
        return path; // Full Link (Custom JPG)
    }
    return IMG_BASE + path; // TMDB Path
}

// === MOVIES DATABASE ===
// Ab aap isme dono tarah ke link dal sakte hain:
// 1. Full Link: "https://example.com/photo.jpg"
// 2. Short Path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" (Bina ${IMG_BASE} ke bhi chalega)
const moviesDB = [
    // --- 1 to 10: SLIDER (Top Hits) ---
    { id: 1, title: "Avengers: Endgame", img: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg" }, // Maine yahan se ${IMG_BASE} hata diya, fir bhi chalega
    { id: 2, title: "Avatar: The Way of Water", img: `${IMG_BASE}/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg` }, // Ye purana tarika bhi chalega
    { id: 3, title: "Spider-Man: No Way Home", img: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" }, 
    { id: 4, title: "The Batman", img: "/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
    { id: 5, title: "Oppenheimer", img: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
    { id: 6, title: "Interstellar", img: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
    { id: 7, title: "Titanic", img: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
    { id: 8, title: "Inception", img: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
    { id: 9, title: "Iron Man", img: "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
    { id: 10, title: "Thor: Ragnarok", img: "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" },

    // --- 11 to 20: TRENDING INDIA ---
    { id: 11, title: "Kalki 2898 AD", img: "https://i.ibb.co/jk6f1mHZ/Kalki-2898-AD.jpg" },
    { id: 12, title: "Stree 2", img: "https://i.ibb.co/JFbwfpQ5/images-1.jpg" }, 
    { id: 13, title: "Animal", img: "https://i.ibb.co/Cp9VRNQC/Animal-2023-film-poster.jpg" },
    { id: 14, title: "Dhurandhar", img: "https://i.ibb.co/5XR54QST/MV5-BMz-Fi-NTVk-Zj-Yt-M2-I3-Yi00-MGNj-LWEy-YTAt-MGVi-NGEx-Zm-Mz-MGMz-Xk-Ey-Xk-Fqc-Gc-V1.jpg" },
    { id: 15, title: "Salaar: Part 1 – Ceasefire", img: "https://i.ibb.co/FqgS9W9K/MV5-BYz-U2-Mz-Zi-OTEt-ZTgw-OS00-MTdl-LWJm-MDQt-Njdj-OGIx-YTA0-NTYx-Xk-Ey-Xk-Fqc-Gc-V1-1.jpg" }, 
    { id: 16, title: "Leo", img: "/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg" },
    { id: 17, title: "K.G.F: Chapter 2", img: "https://i.ibb.co/nsppWJ4Y/MV5-BZm-Qz-Zj-Vk-ZTUt-Yj-I4-ZC00-ZDJm-LWI0-ZDUt-ZTFm-MGM1-Mzc5-Zj-Iy-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg" }, 
    { id: 18, title: "Border 2", img: "https://i.ibb.co/LzHYJ5sc/images.jpg" },
    { id: 19, title: "Pushpa 2: The Rule", img: "https://ibb.co/4gsLX3Hh" },
    { id: 20, title: "Pathaan", img: "https://i.ibb.co/QvrhLb1W/MV5-BNTU2-Mz-Zk-NDMt-YTM3-Yy00-Zj-Ey-LTlj-ZDUt-NWZh-YTNj-YWRl-ODc5-Xk-Ey-Xk-Fqc-Gc-V1.jpg" },

    // --- 21 to 40: HOLLYWOOD ACTION ---
    { id: 21, title: "Black Panther", img: "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
    { id: 22, title: "Doctor Strange", img: "/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },
    { id: 23, title: "Venom", img: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg" },
    { id: 24, title: "The Dark Knight", img: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
    { id: 25, title: "John Wick: Chapter 4", img: "/vZloFAK7NmvMGKE7VkF5UPurDq.jpg" },
    { id: 26, title: "Deadpool", img: "/yGSxMiF0cYuAiyGuPr8iPExtbIF.jpg" },
    { id: 27, title: "Aquaman", img: "/xLPffWMhNb1E14BvfG09s0ulJDZ.jpg" },
    { id: 28, title: "Justice League", img: "/eifGNCSDuxJeS1loAXil5bIGzhC.jpg" },
    { id: 29, title: "Man of Steel", img: "/7rIPjn5TUK04O25ZkMyHrGNPgKL.jpg" },
    { id: 30, title: "Fast X", img: "/fiVW06jE7z9YnO4trhaMEdcl4Cn.jpg" },
    { id: 31, title: "Mission: Impossible - Dead Reckoning Part One", img: "/AkJQpZp9WoNdj7pEIN9dWB7QLZo.jpg" },
    { id: 32, title: "Top Gun: Maverick", img: "/62HCnUTziyWcpDaBO2i1DX17dbH.jpg" },
    { id: 33, title: "Transformers", img: "/62JbYvE2zJgZ0z3c4P3y3j3j3j.jpg" },
    { id: 34, title: "Godzilla vs. Kong", img: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg" },
    { id: 35, title: "Jurassic World", img: "/rHR4y9tqJJ1NGjC6XN3c0OQ45.jpg" },
    { id: 36, title: "Pirates of the Caribbean: The Curse of the Black Pearl", img: "/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg" },
    { id: 37, title: "Harry Potter and the Sorcerer's Stone", img: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" },
    { id: 38, title: "The Lord of the Rings: The Fellowship of the Ring", img: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" },
    { id: 39, title: "The Matrix", img: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
    { id: 40, title: "Gladiator", img: "/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },

    // --- 41 to 60: BOLLYWOOD HITS ---
    { id: 41, title: "Tiger 3", img: "/7I6VvfcY4acOSAdLTjWWJqJ7a0.jpg" },
    { id: 42, title: "Dunki", img: "/abWM2MqCs1H9UFXxEhfCKBJ1Zmc.jpg" },
    { id: 43, title: "Gadar 2", img: "/ipoJc.jpg" },
    { id: 44, title: "Brahmāstra: Part One – Shiva", img: "/iavXFb0GEmVmvK8qgbqgzbbGN2n.jpg" },
    { id: 45, title: "War", img: "/7JeHrXHj.jpg" },
    { id: 46, title: "Kabir Singh", img: "/d3EqMOJT4m3ou6NnmNGUX8dGyEh.jpg" },
    { id: 47, title: "Bhool Bhulaiyaa 2", img: "/fwGD1j5.jpg" },
    { id: 48, title: "Drishyam 2", img: "/5jctPQcI98Fb2ge02DP82cAzpOh.jpg" },
    { id: 49, title: "Sanju", img: "/tnkXU4KZQkrcCA24PH6pf7sI9Y6.jpg" },
    { id: 50, title: "Dangal", img: "/yJM8Yl5.jpg" },
    { id: 51, title: "Sultan", img: "/1q1h.jpg" },
    { id: 52, title: "Bajrangi Bhaijaan", img: "/myP5j5.jpg" },
    { id: 53, title: "PK", img: "/z2u0YIMg0WiqNprocSFEasLBZg9.jpg" },
    { id: 54, title: "3 Idiots", img: "/66AHI4BbklKwAxvKMcoH2akzhir.jpg" },
    { id: 55, title: "Chennai Express", img: "/5h46tu7LHNEv0XLG4vuVhlqTZgS.jpg" },
    { id: 56, title: "Simmba", img: "/a34234.jpg" },
    { id: 57, title: "Sooryavanshi", img: "/b34234.jpg" },
    { id: 58, title: "Singham", img: "/c34234.jpg" },
    { id: 59, title: "Dabangg", img: "/d34234.jpg" },
    { id: 60, title: "Kick", img: "/e34234.jpg" },

    // --- 61 to 80: SOUTH BLOCKBUSTERS ---
    { id: 61, title: "Baahubali 2: The Conclusion", img: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" },
    { id: 62, title: "Kantara", img: "/a3bkcZrVavWCVg92ZTL2jXzw1cM.jpg" },
    { id: 63, title: "Vikram", img: "/bKptfUu72D3h8p8l8T8j5q5v5.jpg" },
    { id: 64, title: "Jailer", img: "/4j0PNYTbV5yJ3j3j3j3j.jpg" }, 
    { id: 65, title: "Ponniyin Selvan: I", img: "/b342.jpg" },
    { id: 66, title: "Ponniyin Selvan: II", img: "/c542.jpg" },
    { id: 67, title: "Varisu", img: "/d642.jpg" },
    { id: 68, title: "Thunivu", img: "/e742.jpg" },
    { id: 69, title: "Beast", img: "/f842.jpg" },
    { id: 70, title: "Master", img: "/g942.jpg" },
    { id: 71, title: "Kaithi", img: "/h042.jpg" },
    { id: 72, title: "777 Charlie", img: "/i142.jpg" },
    { id: 73, title: "Major", img: "/j242.jpg" },
    { id: 74, title: "Sita Ramam", img: "/k342.jpg" },
    { id: 75, title: "Kartikeya 2", img: "/l442.jpg" },
    { id: 76, title: "HanuMan", img: "/m542.jpg" },
    { id: 77, title: "Merry Christmas", img: "/n642.jpg" },
    { id: 78, title: "Captain Miller", img: "/o742.jpg" },
    { id: 79, title: "Ayalaan", img: "/p842.jpg" },
    { id: 80, title: "Guntur Kaaram", img: "/q942.jpg" },

    // --- 81 to 100: ANIMATION & CLASSICS ---
    { id: 81, title: "Frozen II", img: "/mINJaa34MtknCYl5A45XP7cNOAP.jpg" },
    { id: 82, title: "Moana", img: "/4JeejGugONWskkbn452248.jpg" },
    { id: 83, title: "Coco", img: "/eKi8dIrr8voB6sYz2DjPEPb9f20.jpg" },
    { id: 84, title: "Zootopia", img: "/sM33xM7awVP0AZ14wO2XI4H7T6L.jpg" },
    { id: 85, title: "Minions", img: "/q0R4crx2SehcEEQJhYXIjNr38y.jpg" },
    { id: 86, title: "Despicable Me 3", img: "/6t3cGo2nJVgnQqLEZ8qV8s469e.jpg" },
    { id: 87, title: "Kung Fu Panda", img: "/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg" },
    { id: 88, title: "Shrek", img: "/iB64vpL3qIezUk0CDpnPH05lNB.jpg" },
    { id: 89, title: "Tumbbad", img: "/4B2Yv855UM38fyaHqqiBsYdpmoe.jpg" },
    { id: 90, title: "Gangs of Wasseypur", img: "/asb4x3.jpg" },
    { id: 91, title: "Sholay", img: "/lzLz3k2.jpg" },
    { id: 92, title: "Dilwale Dulhania Le Jayenge", img: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" },
    { id: 93, title: "Kuch Kuch Hota Hai", img: "/c24234.jpg" },
    { id: 94, title: "Lagaan", img: "/p24234.jpg" },
    { id: 95, title: "Swades", img: "/r24234.jpg" },
    { id: 96, title: "Chak De! India", img: "/s24234.jpg" },
    { id: 97, title: "Don", img: "/t24234.jpg" },
    { id: 98, title: "Dhoom 3", img: "/u24234.jpg" },
    { id: 99, title: "Koi... Mil Gaya", img: "/v24234.jpg" },
    { id: 100, title: "Krrish", img: "/w24234.jpg" }
];

// DOM Elements
const heroSlider = document.getElementById('heroSlider');
const trendingList = document.getElementById('trendingList');
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const searchBar = document.getElementById('searchBar');
const mainApp = document.getElementById('main-app');
const loadingScreen = document.getElementById('loadingScreen');
const loadingText = document.getElementById('loadingText'); 
const progressBar = document.getElementById('progressBar');
const chatWindow = document.getElementById('chatWindow');
const devModal = document.getElementById('devModal');
const noResultsDiv = document.getElementById('noResults');

// 1. RENDER SLIDER (UPDATED)
function renderSlider() {
    const heroMovies = moviesDB.slice(0, 10); 
    heroSlider.innerHTML = '';
    heroMovies.forEach((movie, index) => {
        // Use getSmartImage here
        const imageUrl = getSmartImage(movie.img);
        
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${imageUrl}')`;
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

// 2. RENDER TRENDING (UPDATED)
function renderTrending() {
    const trendingMovies = moviesDB.slice(10, 20);
    trendingList.innerHTML = '';
    trendingMovies.forEach((movie, index) => {
        // Use getSmartImage here
        const imageUrl = getSmartImage(movie.img);

        const card = document.createElement('div');
        card.className = 'h-card';
        card.innerHTML = `
            <img src="${imageUrl}" alt="${movie.title}" 
                 onerror="this.src='https://placehold.co/130x195?text=${encodeURIComponent(movie.title)}'">
            <div class="rank-number">${index + 1}</div>
        `;
        card.onclick = () => startRedirect(movie.title);
        trendingList.appendChild(card);
    });
}

// 3. RENDER GRID (UPDATED)
function renderGrid(list) {
    movieGrid.innerHTML = '';
    if (list.length === 0) {
        noResultsDiv.classList.remove('hidden');
    } else {
        noResultsDiv.classList.add('hidden');
        list.forEach(movie => {
            // Use getSmartImage here
            const imageUrl = getSmartImage(movie.img);

            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <div class="movie-card-image-container">
                    <div class="movie-number-tag">#${movie.id}</div>
                    <img src="${imageUrl}" alt="${movie.title}" loading="lazy" 
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

// ============================================
// 5. REDIRECT WITH "COPY & JOIN" LOGIC (BEST)
// ============================================
function startRedirect(movieName) {
    // 1. Copy Movie Name to Clipboard (ONLY NAME)
    const textToCopy = movieName; 
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    // 2. Show Loading Screen with Instruction
    mainApp.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
    
    // Update loading text to guide user
    if(loadingText) {
        loadingText.innerHTML = `Searching: <span style="color:#2ecc71">${movieName}</span><br><br><span style="font-size:0.9rem; color:#aaa;">Name Copied! Paste in Group</span>`;
    }

    // 3. Redirect to Group Join Link
    let width = 0;
    const interval = setInterval(() => {
        width += 2; 
        progressBar.style.width = width + '%';
        if (width >= 100) { 
            clearInterval(interval); 
            // Opens the JOIN Link (Works for everyone)
            window.location.href = TELEGRAM_LINK; 
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
     
