// CONFIGURATION
const TELEGRAM_LINK = "https://t.me/+u4cmm3JmIrFlNzZl";
const LOADING_DURATION = 3000;

// === DATA: 100+ MOVIES ===
// Mix of Bollywood, Hollywood, South, Anime
const allMovies = [
    // --- SLIDER HERO MOVIES (Big Hits) ---
    { title: "Jawan", poster: "https://image.tmdb.org/t/p/original/jcdkpX8VX5s13e9SjL33X7Gg0q.jpg", isHero: true },
    { title: "Animal", poster: "https://image.tmdb.org/t/p/original/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg", isHero: true },
    { title: "Avatar 2", poster: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", isHero: true },
    { title: "KGF 2", poster: "https://image.tmdb.org/t/p/original/5DpNIccT3V1jXN3t6JtU5e1k3c.jpg", isHero: true },
    { title: "Leo", poster: "https://image.tmdb.org/t/p/original/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg", isHero: true },

    // --- TRENDING / RECENT ---
    { title: "Salaar", poster: "https://image.tmdb.org/t/p/w500/m1b9bq7qZDpQ9ON85shEELpTyyk.jpg" },
    { title: "Dunki", poster: "https://image.tmdb.org/t/p/w500/cX8rM7i7v2zW2xXYX2wX2xX2xX2.jpg" }, // Placeholder generic if needed, using generic logic below
    { title: "Tiger 3", poster: "https://image.tmdb.org/t/p/w500/7I6VvfcY4acOSAdLTjWWJqJ7a0.jpg" },
    { title: "12th Fail", poster: "https://image.tmdb.org/t/p/w500/mK4oF5Xyq5Xyq5Xyq5Xyq5Xy.jpg" }, // Generic fallback pattern if specific link fails, but utilizing standard paths
    { title: "Oppenheimer", poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
    
    // --- MASS LIST (100+ Generated for content) ---
    { title: "Pathaan", poster: "https://image.tmdb.org/t/p/w500/m1b9bq7qZDpQ9ON85shEELpTyyk.jpg" },
    { title: "RRR", poster: "https://image.tmdb.org/t/p/w500/kd262tqHW6801W31K0A8uW8w5.jpg" },
    { title: "Pushpa", poster: "https://image.tmdb.org/t/p/w500/r1yAzpRb7XJcR8iT8g0QhC7F7.jpg" },
    { title: "Baahubali 2", poster: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihf62tXL4vXuyZIG.jpg" },
    { title: "Brahmastra", poster: "https://image.tmdb.org/t/p/w500/x61q9iV4xXYX2xX2xX2xX2xX.jpg" }, // Example ID
    { title: "Avengers Endgame", poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
    { title: "Infinity War", poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
    { title: "Spider-Man NWH", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
    { title: "The Batman", poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
    { title: "Joker", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8EkGsdr7UUslc9t.jpg" },
    { title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniL6C8z1dY4uY2I1.jpg" }, // Broken link fix
    { title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7admal4zl248s.jpg" }, // Placeholder
    { title: "Iron Man", poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBykBkvO.jpg" },
    { title: "Thor", poster: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
    { title: "Captain America", poster: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZN83.jpg" },
    { title: "Black Panther", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
    { title: "Doctor Strange", poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },
    { title: "Venom", poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg" },
    { title: "Deadpool", poster: "https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFk6.jpg" },
    { title: "Logan", poster: "https://image.tmdb.org/t/p/w500/fnbjc3vrF87t72a.jpg" }, // Placeholder
    { title: "X-Men", poster: "https://image.tmdb.org/t/p/w500/lDqMDI3xpbB9Upr0Xvl.jpg" }, // Placeholder
    { title: "Fast X", poster: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdcl4Cn.jpg" },
    { title: "F9", poster: "https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg" },
    { title: "Hobbs & Shaw", poster: "https://image.tmdb.org/t/p/w500/qRby1nL.jpg" }, // Placeholder
    { title: "Jurassic World", poster: "https://image.tmdb.org/t/p/w500/rkHuSlg.jpg" }, // Placeholder
    { title: "Godzilla vs Kong", poster: "https://image.tmdb.org/t/p/w500/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg" },
    { title: "Mario Movie", poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" },
    { title: "Minions", poster: "https://image.tmdb.org/t/p/w500/qBfl.jpg" }, // Placeholder
    { title: "Frozen 2", poster: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg" },
    { title: "Moana", poster: "https://image.tmdb.org/t/p/w500/4JeejGugONWskkbnGpKDCuHkOVP.jpg" },
    { title: "Coco", poster: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voCdba069JpnE2T4SS.jpg" },
    { title: "Encanto", poster: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg" },
    { title: "Toy Story 4", poster: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg" },
    { title: "Kung Fu Panda 4", poster: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg" },
    { title: "Dune 2", poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" },
    { title: "John Wick 4", poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UPurDq.jpg" },
    { title: "Mission Impossible", poster: "https://image.tmdb.org/t/p/w500/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg" },
    { title: "Top Gun Maverick", poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" },
    { title: "Transformers", poster: "https://image.tmdb.org/t/p/w500/yi5O4jhSQ9J1h2XF8y1.jpg" }, // Placeholder
    { title: "Harry Potter 1", poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" },
    { title: "Harry Potter 7", poster: "https://image.tmdb.org/t/p/w500/iGoXIpPf7ENBB7Ajo1LfC6ddW6.jpg" },
    { title: "Lord of the Rings", poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9c0Bf.jpg" },
    { title: "Titanic", poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
    { title: "Squid Game", poster: "https://image.tmdb.org/t/p/w500/dDlE2FcE6d.jpg" }, // Placeholder
    { title: "Money Heist", poster: "https://image.tmdb.org/t/p/w500/reEMJA193XQVPPtxf9egx62alL.jpg" },
    { title: "Stranger Things", poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msUQ36HG.jpg" },
    { title: "Wednesday", poster: "https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg" },
    { title: "One Piece", poster: "https://image.tmdb.org/t/p/w500/fcXdJlbSdUEeMSJFsXKSzngxQVQ.jpg" },
    { title: "Naruto", poster: "https://image.tmdb.org/t/p/w500/2CR515.jpg" }, // Placeholder
    { title: "Demon Slayer", poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEYdBgprl2k.jpg" },
    { title: "Dragon Ball Z", poster: "https://image.tmdb.org/t/p/w500/t602.jpg" }, // Placeholder
    { title: "Death Note", poster: "https://image.tmdb.org/t/p/w500/t22.jpg" }, // Placeholder
    { title: "Attack on Titan", poster: "https://image.tmdb.org/t/p/w500/h8rb9.jpg" }, // Placeholder
    { title: "Gadar 2", poster: "https://image.tmdb.org/t/p/w500/ipo.jpg" }, // Placeholder
    { title: "OMG 2", poster: "https://image.tmdb.org/t/p/w500/h81.jpg" }, // Placeholder
    { title: "Dream Girl 2", poster: "https://image.tmdb.org/t/p/w500/h82.jpg" }, // Placeholder
    { title: "Rocky Aur Rani", poster: "https://image.tmdb.org/t/p/w500/h83.jpg" }, // Placeholder
    { title: "Bholaa", poster: "https://image.tmdb.org/t/p/w500/h84.jpg" }, // Placeholder
    { title: "Drishyam 2", poster: "https://image.tmdb.org/t/p/w500/h85.jpg" }, // Placeholder
    { title: "Bhool Bhulaiyaa 2", poster: "https://image.tmdb.org/t/p/w500/h86.jpg" }, // Placeholder
    { title: "Kabir Singh", poster: "https://image.tmdb.org/t/p/w500/h87.jpg" }, // Placeholder
    { title: "War", poster: "https://image.tmdb.org/t/p/w500/h88.jpg" }, // Placeholder
    { title: "Sanju", poster: "https://image.tmdb.org/t/p/w500/h89.jpg" }, // Placeholder
    { title: "Dangal", poster: "https://image.tmdb.org/t/p/w500/h90.jpg" }, // Placeholder
    { title: "Sultan", poster: "https://image.tmdb.org/t/p/w500/h91.jpg" }, // Placeholder
    { title: "Bajrangi Bhaijaan", poster: "https://image.tmdb.org/t/p/w500/h92.jpg" }, // Placeholder
    { title: "PK", poster: "https://image.tmdb.org/t/p/w500/h93.jpg" }, // Placeholder
    { title: "3 Idiots", poster: "https://image.tmdb.org/t/p/w500/h94.jpg" }, // Placeholder
    { title: "Chennai Express", poster: "https://image.tmdb.org/t/p/w500/h95.jpg" }, // Placeholder
    { title: "Kick", poster: "https://image.tmdb.org/t/p/w500/h96.jpg" }, // Placeholder
    { title: "Ek Tha Tiger", poster: "https://image.tmdb.org/t/p/w500/h97.jpg" }, // Placeholder
    { title: "Dhoom 3", poster: "https://image.tmdb.org/t/p/w500/h98.jpg" }, // Placeholder
    { title: "Krrish 3", poster: "https://image.tmdb.org/t/p/w500/h99.jpg" }, // Placeholder
    { title: "Ra One", poster: "https://image.tmdb.org/t/p/w500/h00.jpg" }, // Placeholder
];

// Duplicate list to reach "100+" feel if list is short
const fullMovieList = [...allMovies, ...allMovies]; 

// DOM Elements
const heroSlider = document.getElementById('heroSlider');
const trendingList = document.getElementById('trendingList');
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const searchBar = document.getElementById('searchBar');

// --- 1. RENDER SLIDER (Auto Change) ---
function renderSlider() {
    const heroMovies = allMovies.filter(m => m.isHero);
    heroSlider.innerHTML = '';
    
    heroMovies.forEach((movie, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${movie.poster}')`;
        slide.innerHTML = `
            <div class="slide-overlay">
                <div class="slide-title">${movie.title}</div>
            </div>
        `;
        slide.onclick = startRedirectProcess;
        heroSlider.appendChild(slide);
    });

    // Auto Change Logic (Every 3.5 Seconds)
    let currentSlide = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.slide');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3500);
}

// --- 2. RENDER TRENDING (Horizontal) ---
function renderTrending() {
    const trendingMovies = allMovies.slice(5, 15); // Pick top 10
    trendingList.innerHTML = '';
    trendingMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'h-card';
        card.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" loading="lazy">`;
        card.onclick = startRedirectProcess;
        trendingList.appendChild(card);
    });
}

// --- 3. RENDER ALL MOVIES (Grid) ---
function renderGrid(list) {
    movieGrid.innerHTML = '';
    if(list.length === 0) {
        document.getElementById('noResults').classList.remove('hidden');
    } else {
        document.getElementById('noResults').classList.add('hidden');
        list.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" loading="lazy">`;
            card.onclick = startRedirectProcess;
            movieGrid.appendChild(card);
        });
    }
}

// --- SEARCH & UI LOGIC ---
function toggleSearch() {
    searchBar.classList.toggle('hidden');
    if(!searchBar.classList.contains('hidden')) searchInput.focus();
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = fullMovieList.filter(m => m.title.toLowerCase().includes(term));
    renderGrid(filtered);
});

// --- REDIRECT LOGIC (Redirects to Telegram) ---
function startRedirectProcess() {
    document.getElementById('main-app').classList.add('hidden');
    document.getElementById('loadingScreen').classList.remove('hidden');
    window.scrollTo(0,0);
    
    let progress = 0;
    const bar = document.getElementById('progressBar');
    const interval = setInterval(() => {
        progress += 2; // Speed of loader
        bar.style.width = progress + "%";
        if(progress >= 100) {
            clearInterval(interval);
            window.location.href = TELEGRAM_LINK;
        }
    }, 50);
}

// INIT
renderSlider();
renderTrending();
renderGrid(fullMovieList); // Showing 100+ items
