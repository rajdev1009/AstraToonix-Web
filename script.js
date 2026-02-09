// CONFIGURATION
const TELEGRAM_LINK = "https://t.me/+u4cmm3JmIrFlNzZl"; 

// === MOVIE DATA (Same as before) ===
const moviesDB = [
    { id: 1, title: "Kalki 2898 AD", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg" },
    { id: 2, title: "Animal", img: "https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg" },
    { id: 3, title: "Salaar", img: "https://upload.wikimedia.org/wikipedia/en/a/ad/Salaar_Part_1_–_Ceasefire_poster.jpg" },
    { id: 4, title: "Jawan", img: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg" },
    { id: 5, title: "Leo", img: "https://upload.wikimedia.org/wikipedia/en/7/71/Leo_%282023_Indian_film%29.jpg" },
    { id: 6, title: "Tiger 3", img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Tiger_3_poster.jpg" },
    { id: 7, title: "12th Fail", img: "https://upload.wikimedia.org/wikipedia/en/f/f2/12th_Fail_poster.jpeg" },
    { id: 8, title: "Dunki", img: "https://upload.wikimedia.org/wikipedia/en/d/d7/Dunki_poster.jpg" },
    { id: 9, title: "Oppenheimer", img: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg" },
    { id: 10, title: "Gadar 2", img: "https://upload.wikimedia.org/wikipedia/en/6/62/Gadar_2_poster.jpg" },
    // ... (Aapki purani puri list yahan rahegi)
    // List lambi hai isliye main repeat nahi kar raha hu, 
    // par aap apni purani script.js wali list hi rakhna.
    { id: 11, title: "Pathaan", img: "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg" },
    { id: 12, title: "KGF 2", img: "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg" },
    { id: 13, title: "RRR", img: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg" },
    { id: 14, title: "Pushpa", img: "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_The_Rise.jpg" },
    { id: 15, title: "Brahmastra", img: "https://upload.wikimedia.org/wikipedia/en/4/40/Brahmastra_Part_One_Shiva.jpg" }
    // Add rest of your movies here...
];

// Duplicate list for search
const fullList = [...moviesDB, ...moviesDB, ...moviesDB, ...moviesDB].slice(0, 100);

// DOM Elements
const heroSlider = document.getElementById('heroSlider');
const trendingList = document.getElementById('trendingList');
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const searchBar = document.getElementById('searchBar');
const mainApp = document.getElementById('main-app');
const loadingScreen = document.getElementById('loadingScreen');
const progressBar = document.getElementById('progressBar');
const chatWindow = document.getElementById('chatWindow'); // New

// 1. RENDER SLIDER
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
    let c = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.slide');
        slides[c].classList.remove('active');
        c = (c + 1) % slides.length;
        slides[c].classList.add('active');
    }, 4000);
}

// 2. RENDER TRENDING
function renderTrending() {
    const trendingMovies = moviesDB.slice(5, 15);
    trendingList.innerHTML = '';
    trendingMovies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'h-card';
        card.innerHTML = `<img src="${movie.img}" alt="${movie.title}"><div class="rank-number">${index + 1}</div>`;
        card.onclick = () => startRedirect();
        trendingList.appendChild(card);
    });
}

// 3. RENDER GRID
function renderGrid(list) {
    movieGrid.innerHTML = '';
    if(list.length === 0) document.getElementById('noResults').classList.remove('hidden');
    else {
        document.getElementById('noResults').classList.add('hidden');
        list.forEach((movie, idx) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `<div class="movie-number-tag">#${idx + 1}</div><img src="${movie.img}" loading="lazy">`;
            card.onclick = () => startRedirect();
            movieGrid.appendChild(card);
        });
    }
}

// 4. SEARCH
function toggleSearch() {
    searchBar.classList.toggle('hidden');
    if(!searchBar.classList.contains('hidden')) searchInput.focus();
}
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = fullList.filter(m => m.title.toLowerCase().includes(term));
    renderGrid(filtered);
});

// 5. REDIRECT
function startRedirect() {
    mainApp.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    window.scrollTo(0,0);
    let width = 0;
    const interval = setInterval(() => {
        width += 2;
        progressBar.style.width = width + '%';
        if(width >= 100) {
            clearInterval(interval);
            window.location.href = TELEGRAM_LINK;
        }
    }, 40);
}

// === 6. NEW: CHATBOT TOGGLE FUNCTION ===
function toggleChatbot() {
    chatWindow.classList.toggle('hidden');
}

// INIT
renderSlider();
renderTrending();
renderGrid(fullList);
