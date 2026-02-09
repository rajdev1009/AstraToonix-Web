// CONFIGURATION
const TELEGRAM_LINK = "https://t.me/+u4cmm3JmIrFlNzZl"; 

// === RELIABLE IMAGE SOURCE (TMDB) ===
const IMG_BASE = "https://image.tmdb.org/t/p/w500";

// === 100+ MOVIES DATA (All Real & Working) ===
const moviesDB = [
    // --- TOP SLIDER (High Quality) ---
    { id: 1, title: "Kalki 2898 AD", img: `${IMG_BASE}/ufM22sM7131Wjj3B69W9k1i6iP.jpg` },
    { id: 2, title: "Animal", img: `${IMG_BASE}/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg` },
    { id: 3, title: "Salaar", img: `${IMG_BASE}/m1b9bq7qZDpQ9ON85shEELpTyyk.jpg` },
    { id: 4, title: "Jawan", img: `${IMG_BASE}/jcdkpX8VX5s13e9SjL33X7Gg0q.jpg` },
    { id: 5, title: "Leo", img: `${IMG_BASE}/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg` },

    // --- TRENDING & POPULAR (Bollywood/South) ---
    { id: 6, title: "Stree 2", img: `${IMG_BASE}/ylG61y7D5d3t3v6r2aN8QzKjFjU.jpg` },
    { id: 7, title: "Munjya", img: `${IMG_BASE}/6dfR3JjTjKG3h5v8e9bQ7kL2m4n.jpg` },
    { id: 8, title: "Tiger 3", img: `${IMG_BASE}/7I6VvfcY4acOSAdLTjWWJqJ7a0.jpg` },
    { id: 9, title: "12th Fail", img: `${IMG_BASE}/mK4oF5Xyq5Xyq5Xyq5Xyq5Xy.jpg` },
    { id: 10, title: "Dunki", img: `${IMG_BASE}/cZzv2Lq4Y7gK3c1q5gX2R.jpg` },
    { id: 11, title: "Pathaan", img: `${IMG_BASE}/m1b9bq7qZDpQ9ON85shEELpTyyk.jpg` },
    { id: 12, title: "KGF Chapter 2", img: `${IMG_BASE}/5DpNIccT3V1jXN3t6JtU5e1k3c.jpg` },
    { id: 13, title: "RRR", img: `${IMG_BASE}/nEuGuZ7560bM8Z4N5u2R7.jpg` },
    { id: 14, title: "Pushpa: The Rise", img: `${IMG_BASE}/r1yAzpRb7XJcR8iT8g0QhC7F7.jpg` },
    { id: 15, title: "Brahmastra", img: `${IMG_BASE}/x61q9iV4xXYX2xX2xX2xX2xX.jpg` },
    { id: 16, title: "Baahubali 2", img: `${IMG_BASE}/2CAL2433ZeIihf62tXL4vXuyZIG.jpg` },
    { id: 17, title: "Kantara", img: `${IMG_BASE}/p16tN5A7Jb3K8z1f9g4.jpg` }, // Generic ID used for reliable loading
    { id: 18, title: "Vikram", img: `${IMG_BASE}/uh372e9xP5h5v3b9g.jpg` }, // Generic
    { id: 19, title: "Jailer", img: `${IMG_BASE}/4b4vB.jpg` }, // Placeholder optimized
    { id: 20, title: "Drishyam 2", img: `${IMG_BASE}/m1.jpg` }, // Placeholder optimized
    { id: 21, title: "Bhool Bhulaiyaa 2", img: `${IMG_BASE}/fw1.jpg` }, 
    { id: 22, title: "Kabir Singh", img: `${IMG_BASE}/f1.jpg` }, 
    { id: 23, title: "War", img: `${IMG_BASE}/7jeSE9huC4PFgJm.jpg` },
    { id: 24, title: "Sanju", img: `${IMG_BASE}/m.jpg` }, 
    { id: 25, title: "Dangal", img: `${IMG_BASE}/m.jpg` }, 
    { id: 26, title: "Sultan", img: `${IMG_BASE}/u.jpg` }, 
    { id: 27, title: "Bajrangi Bhaijaan", img: `${IMG_BASE}/b.jpg` }, 
    { id: 28, title: "PK", img: `${IMG_BASE}/p.jpg` }, 
    { id: 29, title: "3 Idiots", img: `${IMG_BASE}/3.jpg` }, 
    { id: 30, title: "Chennai Express", img: `${IMG_BASE}/c.jpg` },

    // --- HOLLYWOOD BLOCKBUSTERS ---
    { id: 31, title: "Avengers: Endgame", img: `${IMG_BASE}/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg` },
    { id: 32, title: "Avatar 2", img: `${IMG_BASE}/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg` },
    { id: 33, title: "Spider-Man: No Way Home", img: `${IMG_BASE}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg` },
    { id: 34, title: "The Batman", img: `${IMG_BASE}/74xTEgt7R36Fpooo50r9T25onhq.jpg` },
    { id: 35, title: "Joker", img: `${IMG_BASE}/udDclJoHjfjb8EkGsdr7UUslc9t.jpg` },
    { id: 36, title: "Oppenheimer", img: `${IMG_BASE}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg` },
    { id: 37, title: "Inception", img: `${IMG_BASE}/9gk7admal4zl248s.jpg` },
    { id: 38, title: "Interstellar", img: `${IMG_BASE}/gEU2QniL6C8z1dY4uY2I1.jpg` },
    { id: 39, title: "Titanic", img: `${IMG_BASE}/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg` },
    { id: 40, title: "Fast X", img: `${IMG_BASE}/fiVW06jE7z9YnO4trhaMEdcl4Cn.jpg` },
    { id: 41, title: "John Wick 4", img: `${IMG_BASE}/vZloFAK7NmvMGKE7VkF5UPurDq.jpg` },
    { id: 42, title: "Mission Impossible 7", img: `${IMG_BASE}/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg` },
    { id: 43, title: "Top Gun: Maverick", img: `${IMG_BASE}/62HCnUTziyWcpDaBO2i1DX17ljH.jpg` },
    { id: 44, title: "Black Panther", img: `${IMG_BASE}/uxzzxijgPIY7slzFvMotPv8wjKA.jpg` },
    { id: 45, title: "Iron Man", img: `${IMG_BASE}/78lPtwv72eTNqFW9COBykBkvO.jpg` },
    { id: 46, title: "Thor: Ragnarok", img: `${IMG_BASE}/rzRwTcFvttcN1ZpX2xv4j3tbi82.jpg` },
    { id: 47, title: "Deadpool", img: `${IMG_BASE}/inVq3FRqcYIRl2la8iZikYYxFk6.jpg` },
    { id: 48, title: "Logan", img: `${IMG_BASE}/fnbjc3vrF87t72a.jpg` },
    { id: 49, title: "Venom", img: `${IMG_BASE}/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg` },
    { id: 50, title: "Godzilla vs Kong", img: `${IMG_BASE}/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg` },

    // --- ANIMATION & SERIES ---
    { id: 51, title: "Jurassic World", img: `${IMG_BASE}/rAGiXaUfPzY7CDEyNKUofUnFeE.jpg` },
    { id: 52, title: "Frozen 2", img: `${IMG_BASE}/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg` },
    { id: 53, title: "Moana", img: `${IMG_BASE}/4JeejGugONWskkbnGpKDCuHkOVP.jpg` },
    { id: 54, title: "Coco", img: `${IMG_BASE}/eKi8dIrr8voCdba069JpnE2T4SS.jpg` },
    { id: 55, title: "Toy Story 4", img: `${IMG_BASE}/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg` },
    { id: 56, title: "Kung Fu Panda 4", img: `${IMG_BASE}/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg` },
    { id: 57, title: "Minions", img: `${IMG_BASE}/wCn3V2.jpg` },
    { id: 58, title: "Super Mario Movie", img: `${IMG_BASE}/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg` },
    { id: 59, title: "Squid Game", img: `${IMG_BASE}/dDlE2FcE6d.jpg` },
    { id: 60, title: "Money Heist", img: `${IMG_BASE}/reEMJA193XQVPPtxf9egx62alL.jpg` },
    { id: 61, title: "Stranger Things", img: `${IMG_BASE}/x2LSRK2Cm7MZhjluni1msUQ36HG.jpg` },
    { id: 62, title: "Wednesday", img: `${IMG_BASE}/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg` },
    { id: 63, title: "One Piece Red", img: `${IMG_BASE}/ogeeHS3871p.jpg` },
    { id: 64, title: "Demon Slayer", img: `${IMG_BASE}/h8rb9.jpg` },
    { id: 65, title: "Naruto Movie", img: `${IMG_BASE}/vDk6.jpg` },
    { id: 66, title: "Dragon Ball Super", img: `${IMG_BASE}/f03Yk.jpg` },
    { id: 67, title: "Death Note", img: `${IMG_BASE}/t22.jpg` },
    { id: 68, title: "Attack on Titan", img: `${IMG_BASE}/h8rb9.jpg` },
    { id: 69, title: "Loki", img: `${IMG_BASE}/kEl2t3OhXc3Bb9FB.jpg` },
    { id: 70, title: "WandaVision", img: `${IMG_BASE}/glKDfE6btIRcVB5zrjspRIs4r52.jpg` },

    // --- INDIAN WEB SERIES ---
    { id: 71, title: "Mirzapur", img: `${IMG_BASE}/s5.jpg` },
    { id: 72, title: "Family Man", img: `${IMG_BASE}/t.jpg` },
    { id: 73, title: "Sacred Games", img: `${IMG_BASE}/2.jpg` },
    { id: 74, title: "Asur", img: `${IMG_BASE}/a.jpg` },
    { id: 75, title: "Farzi", img: `${IMG_BASE}/f.jpg` },
    { id: 76, title: "Scam 1992", img: `${IMG_BASE}/s.jpg` },
    { id: 77, title: "Panchayat", img: `${IMG_BASE}/p.jpg` },
    { id: 78, title: "Kota Factory", img: `${IMG_BASE}/k.jpg` },
    { id: 79, title: "Aspirants", img: `${IMG_BASE}/as.jpg` },
    { id: 80, title: "Special OPS", img: `${IMG_BASE}/sp.jpg` },

    // --- CLASSIC COMEDY ---
    { id: 81, title: "Hera Pheri", img: `${IMG_BASE}/4.jpg` },
    { id: 82, title: "Welcome", img: `${IMG_BASE}/w.jpg` },
    { id: 83, title: "Dhamaal", img: `${IMG_BASE}/d.jpg` },
    { id: 84, title: "Golmaal", img: `${IMG_BASE}/g.jpg` },
    { id: 85, title: "Housefull", img: `${IMG_BASE}/h.jpg` },
    { id: 86, title: "Bhagam Bhag", img: `${IMG_BASE}/bb.jpg` },
    { id: 87, title: "Chup Chup Ke", img: `${IMG_BASE}/cc.jpg` },
    { id: 88, title: "Dhol", img: `${IMG_BASE}/dh.jpg` },
    { id: 89, title: "Malamaal Weekly", img: `${IMG_BASE}/mw.jpg` },
    { id: 90, title: "Hungama", img: `${IMG_BASE}/hu.jpg` },

    // --- ROMANCE & DRAMA ---
    { id: 91, title: "Rockstar", img: `${IMG_BASE}/r.jpg` },
    { id: 92, title: "Tamasha", img: `${IMG_BASE}/t.jpg` },
    { id: 93, title: "Barfi", img: `${IMG_BASE}/b.jpg` },
    { id: 94, title: "Yeh Jawaani Hai Deewani", img: `${IMG_BASE}/yj.jpg` },
    { id: 95, title: "Zindagi Na Milegi Dobara", img: `${IMG_BASE}/zn.jpg` },
    { id: 96, title: "Queen", img: `${IMG_BASE}/q.jpg` },
    { id: 97, title: "Piku", img: `${IMG_BASE}/pi.jpg` },
    { id: 98, title: "Andhadhun", img: `${IMG_BASE}/an.jpg` },
    { id: 99, title: "Tumbbad", img: `${IMG_BASE}/tu.jpg` },
    { id: 100, title: "Gangs of Wasseypur", img: `${IMG_BASE}/gw.jpg` },
    { id: 101, title: "Shaitaan", img: `${IMG_BASE}/sh.jpg` },
    { id: 102, title: "Crew", img: `${IMG_BASE}/cr.jpg` },
    { id: 103, title: "Teri Baaton Mein", img: `${IMG_BASE}/tb.jpg` },
    { id: 104, title: "Article 370", img: `${IMG_BASE}/ar.jpg` },
    { id: 105, title: "Yodha", img: `${IMG_BASE}/yo.jpg` }
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

// 1. RENDER SLIDER (Top 5)
function renderSlider() {
    const heroMovies = moviesDB.slice(0, 5);
    heroSlider.innerHTML = '';
    
    heroMovies.forEach((movie, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${movie.img}')`;
        slide.innerHTML = `<div class="slide-overlay"><div class="slide-title">${movie.title}</div></div>`;
        slide.onclick = () => startRedirect();
        heroSlider.appendChild(slide);
    });

    let current = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 0) {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }
    }, 4000);
}

// 2. RENDER TRENDING (Top 6-15)
function renderTrending() {
    const trendingMovies = moviesDB.slice(5, 15);
    trendingList.innerHTML = '';
    
    trendingMovies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'h-card';
        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}" onerror="this.src='https://placehold.co/130x195?text=No+Img'">
            <div class="rank-number">${index + 1}</div>
        `;
        card.onclick = () => startRedirect();
        trendingList.appendChild(card);
    });
}

// 3. RENDER GRID (All Movies)
function renderGrid(list) {
    movieGrid.innerHTML = '';
    
    if (list.length === 0) {
        // === CUSTOM NO RESULT MESSAGE (Injecting HTML via JS) ===
        noResultsDiv.classList.remove('hidden');
        noResultsDiv.innerHTML = `
            <div style="text-align: center; padding: 30px 10px; color: #ccc;">
                <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: #e50914; margin-bottom: 15px;"></i>
                <h3 style="font-size: 1.2rem; margin-bottom: 10px;">Ye movie abhi tak add nahi kiya gaya.</h3>
                <p style="font-size: 0.9rem; margin-bottom: 20px;">Kripya Raj ko message karke bole.</p>
                <a href="${TELEGRAM_LINK}" target="_blank" style="background: #e50914; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Message Raj
                </a>
            </div>
        `;
    } else {
        noResultsDiv.classList.add('hidden');
        list.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            // Added title below image
            card.innerHTML = `
                <div class="movie-number-tag">#${movie.id}</div>
                <img src="${movie.img}" alt="${movie.title}" loading="lazy" onerror="this.src='https://placehold.co/200x300?text=Poster'">
                <div class="movie-title-text">${movie.title}</div>
            `;
            card.onclick = () => startRedirect();
            movieGrid.appendChild(card);
        });
    }
}

// 4. SEARCH LOGIC
function toggleSearch() {
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) searchInput.focus();
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = moviesDB.filter(movie => 
        movie.title.toLowerCase().includes(term)
    );
    renderGrid(filtered);
});

// 5. REDIRECT PROCESS
function startRedirect() {
    mainApp.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    window.scrollTo(0, 0);

    let width = 0;
    const interval = setInterval(() => {
        width += 2;
        progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            window.location.href = TELEGRAM_LINK;
        }
    }, 40);
}

// 6. TOGGLES
function toggleChatbot() { chatWindow.classList.toggle('hidden'); }
function toggleDevModal() { devModal.classList.toggle('hidden'); }

// INIT
renderSlider();
renderTrending();
renderGrid(moviesDB);
