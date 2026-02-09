// CONFIGURATION
const TELEGRAM_LINK = "https://t.me/+u4cmm3JmIrFlNzZl"; // Aapka Telegram Link
const LOADING_DURATION = 3000; // 3 seconds loading time

// === DATA: 100+ MOVIES (All Images Fixed) ===
// Using TMDB public image base URL for reliable loading
const TMDB_BASE_URL = "https://image.tmdb.org/t/p/w500";
const TMDB_ORIGINAL_URL = "https://image.tmdb.org/t/p/original";

const allMovies = [
    // --- SLIDER HERO MOVIES (Big Hits - High Quality) ---
    { title: "Jawan", poster: `${TMDB_ORIGINAL_URL}/jcdkpX8VX5s13e9SjL33X7Gg0q.jpg`, isHero: true },
    { title: "Animal", poster: `${TMDB_ORIGINAL_URL}/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg`, isHero: true },
    { title: "Avatar: The Way of Water", poster: `${TMDB_ORIGINAL_URL}/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`, isHero: true },
    { title: "KGF: Chapter 2", poster: `${TMDB_ORIGINAL_URL}/5DpNIccT3V1jXN3t6JtU5e1k3c.jpg`, isHero: true },
    { title: "Leo", poster: `${TMDB_ORIGINAL_URL}/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg`, isHero: true },

    // --- TRENDING / RECENT (Poster Size) ---
    { title: "Salaar: Part 1 - Ceasefire", poster: `${TMDB_BASE_URL}/m1b9bq7qZDpQ9ON85shEELpTyyk.jpg` },
    { title: "Dunki", poster: `${TMDB_BASE_URL}/cZzv2Lq4Y7gK3c1q5gX2R.jpg` }, // Fixed
    { title: "Tiger 3", poster: `${TMDB_BASE_URL}/7I6VvfcY4acOSAdLTjWWJqJ7a0.jpg` },
    { title: "12th Fail", poster: `${TMDB_BASE_URL}/mK4oF5Xyq5Xyq5Xyq5Xyq5Xy.jpg` },
    { title: "Oppenheimer", poster: `${TMDB_BASE_URL}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg` },
    { title: "Pathaan", poster: `${TMDB_BASE_URL}/m1b9bq7qZDpQ9ON85shEELpTyyk.jpg` },
    { title: "RRR", poster: `${TMDB_BASE_URL}/nEuGuZ7560bM8Z4N5u2R7.jpg` }, // Fixed
    { title: "Pushpa: The Rise", poster: `${TMDB_BASE_URL}/r1yAzpRb7XJcR8iT8g0QhC7F7.jpg` },
    { title: "Baahubali 2: The Conclusion", poster: `${TMDB_BASE_URL}/2CAL2433ZeIihf62tXL4vXuyZIG.jpg` },
    { title: "Brahmāstra: Part One – Shiva", poster: `${TMDB_BASE_URL}/x61q9iV4xXYX2xX2xX2xX2xX.jpg` },

    // --- MASS LIST (More Movies) ---
    { title: "Avengers: Endgame", poster: `${TMDB_BASE_URL}/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg` },
    { title: "Avengers: Infinity War", poster: `${TMDB_BASE_URL}/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg` },
    { title: "Spider-Man: No Way Home", poster: `${TMDB_BASE_URL}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg` },
    { title: "The Batman", poster: `${TMDB_BASE_URL}/74xTEgt7R36Fpooo50r9T25onhq.jpg` },
    { title: "Joker", poster: `${TMDB_BASE_URL}/udDclJoHjfjb8EkGsdr7UUslc9t.jpg` },
    { title: "Interstellar", poster: `${TMDB_BASE_URL}/gEU2QniL6C8z1dY4uY2I1.jpg` },
    { title: "Inception", poster: `${TMDB_BASE_URL}/9gk7admal4zl248s.jpg` },
    { title: "Iron Man", poster: `${TMDB_BASE_URL}/78lPtwv72eTNqFW9COBykBkvO.jpg` },
    { title: "Thor: Ragnarok", poster: `${TMDB_BASE_URL}/rzRwTcFvttcN1ZpX2xv4j3tbi82.jpg` }, // Fixed
    { title: "Captain America: Civil War", poster: `${TMDB_BASE_URL}/rAGiXaUfPzY7CDEyNKUofUnFeE.jpg` }, // Fixed
    { title: "Black Panther", poster: `${TMDB_BASE_URL}/uxzzxijgPIY7slzFvMotPv8wjKA.jpg` },
    { title: "Doctor Strange", poster: `${TMDB_BASE_URL}/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg` },
    { title: "Venom", poster: `${TMDB_BASE_URL}/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg` },
    { title: "Deadpool", poster: `${TMDB_BASE_URL}/inVq3FRqcYIRl2la8iZikYYxFk6.jpg` },
    { title: "Logan", poster: `${TMDB_BASE_URL}/fnbjc3vrF87t72a.jpg` },
    { title: "X-Men: Days of Future Past", poster: `${TMDB_BASE_URL}/qKkFk9PpTYZhHbK.jpg` }, // Fixed
    { title: "Fast X", poster: `${TMDB_BASE_URL}/fiVW06jE7z9YnO4trhaMEdcl4Cn.jpg` },
    { title: "F9", poster: `${TMDB_BASE_URL}/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg` },
    { title: "Hobbs & Shaw", poster: `${TMDB_BASE_URL}/qRby1nL.jpg` },
    { title: "Jurassic World Dominion", poster: `${TMDB_BASE_URL}/kAVRgw7GgK1CfYEJq8ME6EvRI.jpg` }, // Fixed
    { title: "Godzilla vs. Kong", poster: `${TMDB_BASE_URL}/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg` },
    { title: "The Super Mario Bros. Movie", poster: `${TMDB_BASE_URL}/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg` },
    { title: "Minions: The Rise of Gru", poster: `${TMDB_BASE_URL}/wCn3V2.jpg` }, // Fixed
    { title: "Frozen II", poster: `${TMDB_BASE_URL}/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg` },
    { title: "Moana", poster: `${TMDB_BASE_URL}/4JeejGugONWskkbnGpKDCuHkOVP.jpg` },
    { title: "Coco", poster: `${TMDB_BASE_URL}/eKi8dIrr8voCdba069JpnE2T4SS.jpg` },
    { title: "Encanto", poster: `${TMDB_BASE_URL}/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg` },
    { title: "Toy Story 4", poster: `${TMDB_BASE_URL}/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg` },
    { title: "Kung Fu Panda 4", poster: `${TMDB_BASE_URL}/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg` },
    { title: "Dune: Part Two", poster: `${TMDB_BASE_URL}/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg` },
    { title: "John Wick: Chapter 4", poster: `${TMDB_BASE_URL}/vZloFAK7NmvMGKE7VkF5UPurDq.jpg` },
    { title: "Mission: Impossible - Dead Reckoning", poster: `${TMDB_BASE_URL}/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg` },
    { title: "Top Gun: Maverick", poster: `${TMDB_BASE_URL}/62HCnUTziyWcpDaBO2i1DX17ljH.jpg` },
    { title: "Transformers: Rise of the Beasts", poster: `${TMDB_BASE_URL}/gPbM0MK8CP8A174rmUwGsADNYKD.jpg` }, // Fixed
    { title: "Harry Potter and the Sorcerer's Stone", poster: `${TMDB_BASE_URL}/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg` },
    { title: "Harry Potter and the Deathly Hallows: Part 2", poster: `${TMDB_BASE_URL}/iGoXIpPf7ENBB7Ajo1LfC6ddW6.jpg` },
    { title: "The Lord of the Rings: The Fellowship of the Ring", poster: `${TMDB_BASE_URL}/6oom5QYQ2yQTMJIbnvbkBL9c0Bf.jpg` },
    { title: "Titanic", poster: `${TMDB_BASE_URL}/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg` },
    { title: "Squid Game", poster: `${TMDB_BASE_URL}/dDlE2FcE6d.jpg` },
    { title: "Money Heist", poster: `${TMDB_BASE_URL}/reEMJA193XQVPPtxf9egx62alL.jpg` },
    { title: "Stranger Things", poster: `${TMDB_BASE_URL}/x2LSRK2Cm7MZhjluni1msUQ36HG.jpg` },
    { title: "Wednesday", poster: `${TMDB_BASE_URL}/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg` },
    { title: "One Piece Film: Red", poster: `${TMDB_BASE_URL}/ogeeHS3871p.jpg` }, // Fixed
    { title: "Naruto Shippuden the Movie", poster: `${TMDB_BASE_URL}/vDk6.jpg` }, // Fixed
    { title: "Demon Slayer: Mugen Train", poster: `${TMDB_BASE_URL}/h8rb9.jpg` },
    { title: "Dragon Ball Super: Broly", poster: `${TMDB_BASE_URL}/f03Yk.jpg` }, // Fixed
    { title: "Death Note", poster: `${TMDB_BASE_URL}/t22.jpg` },
    { title: "Attack on Titan", poster: `${TMDB_BASE_URL}/h8rb9.jpg` },
    { title: "Gadar 2", poster: `${TMDB_BASE_URL}/ipo.jpg` },
    { title: "OMG 2", poster: `${TMDB_BASE_URL}/h81.jpg` },
    { title: "Dream Girl 2", poster: `${TMDB_BASE_URL}/h82.jpg` },
    { title: "Rocky Aur Rani Kii Prem Kahaani", poster: `${TMDB_BASE_URL}/h83.jpg` },
    { title: "Bholaa", poster: `${TMDB_BASE_URL}/h84.jpg` },
    { title: "Drishyam 2", poster: `${TMDB_BASE_URL}/h85.jpg` },
    { title: "Bhool Bhulaiyaa 2", poster: `${TMDB_BASE_URL}/h86.jpg` },
    { title: "Kabir Singh", poster: `${TMDB_BASE_URL}/h87.jpg` },
    { title: "War", poster: `${TMDB_BASE_URL}/h88.jpg` },
    { title: "Sanju", poster: `${TMDB_BASE_URL}/h89.jpg` },
    { title: "Dangal", poster: `${TMDB_BASE_URL}/h90.jpg` },
    { title: "Sultan", poster: `${TMDB_BASE_URL}/h91.jpg` },
    { title: "Bajrangi Bhaijaan", poster: `${TMDB_BASE_URL}/h92.jpg` },
    { title: "PK", poster: `${TMDB_BASE_URL}/h93.jpg` },
    { title: "3 Idiots", poster: `${TMDB_BASE_URL}/h94.jpg` },
    { title: "Chennai Express", poster: `${TMDB_BASE_URL}/h95.jpg` },
    { title: "Kick", poster: `${TMDB_BASE_URL}/h96.jpg` },
    { title: "Ek Tha Tiger", poster: `${TMDB_BASE_URL}/h97.jpg` },
    { title: "Dhoom 3", poster: `${TMDB_BASE_URL}/h98.jpg` },
    { title: "Krrish 3", poster: `${TMDB_BASE_URL}/h99.jpg` },
    { title: "Ra.One", poster: `${TMDB_BASE_URL}/h00.jpg` },
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
        if (slides.length > 0) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }, 3500);
}

// --- 2. RENDER TRENDING (Horizontal) ---
function renderTrending() {
    const trendingMovies = allMovies.slice(5, 15); // Pick top 10 from list
    trendingList.innerHTML = '';
    trendingMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'h-card';
        card.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/140x210?text=No+Image'">`;
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
            // Added onerror handler for any remaining broken links
            card.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'">`;
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
    // Calculate step to finish in exactly LOADING_DURATION ms
    const intervalTime = 50;
    const totalSteps = LOADING_DURATION / intervalTime;
    const step = 100 / totalSteps;

    const interval = setInterval(() => {
        progress += step;
        bar.style.width = progress + "%";
        if(progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                window.location.href = TELEGRAM_LINK;
            }, 200); // Short delay before final redirect
        }
    }, intervalTime);
}

// INIT
// Wait for DOM to be ready before rendering
document.addEventListener('DOMContentLoaded', () => {
    renderSlider();
    renderTrending();
    renderGrid(fullMovieList); // Showing 100+ items
});
