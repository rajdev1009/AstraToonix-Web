// CONFIGURATION
const TELEGRAM_LINK = "https://t.me/+u4cmm3JmIrFlNzZl"; 
const DEVELOPER_NAME = "Raj Dev";

// === UNIQUE MOVIE DATA (100 Mixed Movies) ===
// Note: Images are sourced from reliable public posters to avoid black screens.
const moviesDB = [
    // TOP 10 (Trending)
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

    // 11-100 (General List)
    { id: 11, title: "Pathaan", img: "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg" },
    { id: 12, title: "KGF Chapter 2", img: "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg" },
    { id: 13, title: "RRR", img: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg" },
    { id: 14, title: "Pushpa The Rise", img: "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_The_Rise.jpg" },
    { id: 15, title: "Brahmastra", img: "https://upload.wikimedia.org/wikipedia/en/4/40/Brahmastra_Part_One_Shiva.jpg" },
    { id: 16, title: "Baahubali 2", img: "https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg" },
    { id: 17, title: "Kantara", img: "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg" },
    { id: 18, title: "Vikram", img: "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg" },
    { id: 19, title: "Jailer", img: "https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg" },
    { id: 20, title: "Drishyam 2", img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Drishyam_2_2022_poster.jpg" },
    { id: 21, title: "Bhool Bhulaiyaa 2", img: "https://upload.wikimedia.org/wikipedia/en/2/23/Bhool_Bhulaiyaa_2_poster.jpg" },
    { id: 22, title: "Kabir Singh", img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg" },
    { id: 23, title: "War", img: "https://upload.wikimedia.org/wikipedia/en/6/6f/War_official_poster.jpg" },
    { id: 24, title: "Sanju", img: "https://upload.wikimedia.org/wikipedia/en/f/f1/Sanju_poster.jpg" },
    { id: 25, title: "Dangal", img: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg" },
    { id: 26, title: "Sultan", img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Sultan_film_poster.jpg" },
    { id: 27, title: "Bajrangi Bhaijaan", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/Bajrangi_Bhaijaan_Poster.jpg" },
    { id: 28, title: "PK", img: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg" },
    { id: 29, title: "3 Idiots", img: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg" },
    { id: 30, title: "Chennai Express", img: "https://upload.wikimedia.org/wikipedia/en/1/1b/Chennai_Express.jpg" },
    { id: 31, title: "Don 3", img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Don_3_Poster.jpg/220px-Don_3_Poster.jpg" }, // Placeholder if not released
    { id: 32, title: "Avengers Endgame", img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" },
    { id: 33, title: "Avatar 2", img: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg" },
    { id: 34, title: "Spider-Man NWH", img: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" },
    { id: 35, title: "The Batman", img: "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg" },
    { id: 36, title: "Joker", img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg" },
    { id: 37, title: "Inception", img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" },
    { id: 38, title: "Interstellar", img: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg" },
    { id: 39, title: "Titanic", img: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png" },
    { id: 40, title: "Fast X", img: "https://upload.wikimedia.org/wikipedia/en/d/d0/Fast_X_poster.jpg" },
    { id: 41, title: "John Wick 4", img: "https://upload.wikimedia.org/wikipedia/en/c/c6/John_Wick_Chapter_4_poster.jpg" },
    { id: 42, title: "Mission Impossible 7", img: "https://upload.wikimedia.org/wikipedia/en/f/f0/Mission_Impossible_–_Dead_Reckoning_Part_One_poster.jpg" },
    { id: 43, title: "Top Gun Maverick", img: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg" },
    { id: 44, title: "Black Panther", img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg" },
    { id: 45, title: "Iron Man", img: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg" },
    { id: 46, title: "Thor Ragnarok", img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg" },
    { id: 47, title: "Deadpool", img: "https://upload.wikimedia.org/wikipedia/en/4/46/Deadpool_poster.jpg" },
    { id: 48, title: "Logan", img: "https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg" },
    { id: 49, title: "Venom", img: "https://upload.wikimedia.org/wikipedia/en/1/17/Venom_poster.jpg" },
    { id: 50, title: "Godzilla vs Kong", img: "https://upload.wikimedia.org/wikipedia/en/6/63/Godzilla_vs._Kong.jpg" },
    { id: 51, title: "Jurassic World", img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg" },
    { id: 52, title: "Frozen 2", img: "https://upload.wikimedia.org/wikipedia/en/c/c5/Frozen_II_poster.jpg" },
    { id: 53, title: "Moana", img: "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg" },
    { id: 54, title: "Coco", img: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg" },
    { id: 55, title: "Toy Story 4", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg" },
    { id: 56, title: "Kung Fu Panda", img: "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg" },
    { id: 57, title: "Minions", img: "https://upload.wikimedia.org/wikipedia/en/3/32/Minions_poster.jpg" },
    { id: 58, title: "Super Mario Movie", img: "https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg" },
    { id: 59, title: "Squid Game", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg" },
    { id: 60, title: "Money Heist", img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Money_Heist_Part_5_Volume_2_poster.jpg" },
    { id: 61, title: "Stranger Things", img: "https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg" },
    { id: 62, title: "Wednesday", img: "https://upload.wikimedia.org/wikipedia/en/6/62/Wednesday_Netflix_series_poster.png" },
    { id: 63, title: "One Piece Red", img: "https://upload.wikimedia.org/wikipedia/en/2/2c/One_Piece_Film_Red_Visual_Poster.jpg" },
    { id: 64, title: "Demon Slayer", img: "https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg" },
    { id: 65, title: "Naruto", img: "https://upload.wikimedia.org/wikipedia/en/c/c9/Naruto_Shippuden_the_Movie.jpg" },
    { id: 66, title: "Dragon Ball Super", img: "https://upload.wikimedia.org/wikipedia/en/1/13/Dragon_Ball_Super_Broly_poster.jpg" },
    { id: 67, title: "Death Note", img: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg" },
    { id: 68, title: "Attack on Titan", img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg" },
    { id: 69, title: "Loki", img: "https://upload.wikimedia.org/wikipedia/en/4/43/Loki_Season_2_Poster.jpg" },
    { id: 70, title: "WandaVision", img: "https://upload.wikimedia.org/wikipedia/en/5/5e/WandaVision_poster.jpg" },
    { id: 71, title: "Mirzapur", img: "https://upload.wikimedia.org/wikipedia/en/3/3c/Mirzapur_Poster.jpg" },
    { id: 72, title: "Family Man", img: "https://upload.wikimedia.org/wikipedia/en/8/89/The_Family_Man_Season_2.jpg" },
    { id: 73, title: "Sacred Games", img: "https://upload.wikimedia.org/wikipedia/en/4/4e/Sacred_Games_Title.png" },
    { id: 74, title: "Asur", img: "https://upload.wikimedia.org/wikipedia/en/d/d3/Asur_web_series_poster.jpg" },
    { id: 75, title: "Farzi", img: "https://upload.wikimedia.org/wikipedia/en/7/75/Farzi_poster.jpg" },
    { id: 76, title: "Scam 1992", img: "https://upload.wikimedia.org/wikipedia/en/e/e3/Scam_1992_poster.jpg" },
    { id: 77, title: "Panchayat", img: "https://upload.wikimedia.org/wikipedia/en/2/29/Panchayat_poster.jpeg" },
    { id: 78, title: "Kota Factory", img: "https://upload.wikimedia.org/wikipedia/en/0/07/Kota_Factory_poster.jpg" },
    { id: 79, title: "Aspirants", img: "https://upload.wikimedia.org/wikipedia/en/5/52/Aspirants_Poster.jpg" },
    { id: 80, title: "Special OPS", img: "https://upload.wikimedia.org/wikipedia/en/c/c5/Special_OPS_poster.jpeg" },
    { id: 81, title: "Hera Pheri", img: "https://upload.wikimedia.org/wikipedia/en/5/58/Hera_Pheri_Poster.jpg" },
    { id: 82, title: "Welcome", img: "https://upload.wikimedia.org/wikipedia/en/8/83/Welcome_2007_Hindi_Film_Poster.jpg" },
    { id: 83, title: "Dhamaal", img: "https://upload.wikimedia.org/wikipedia/en/4/49/Dhamaal_2007.jpg" },
    { id: 84, title: "Golmaal", img: "https://upload.wikimedia.org/wikipedia/en/7/7e/Golmaal_Fun_Unlimited.jpg" },
    { id: 85, title: "Housefull", img: "https://upload.wikimedia.org/wikipedia/en/6/6f/Housefull_poster.jpg" },
    { id: 86, title: "Bhagam Bhag", img: "https://upload.wikimedia.org/wikipedia/en/9/91/Bhagam_Bhag.jpg" },
    { id: 87, title: "Chup Chup Ke", img: "https://upload.wikimedia.org/wikipedia/en/8/8d/Chup_Chup_Ke.jpg" },
    { id: 88, title: "Dhol", img: "https://upload.wikimedia.org/wikipedia/en/4/41/Dhol_poster.png" },
    { id: 89, title: "Malamaal Weekly", img: "https://upload.wikimedia.org/wikipedia/en/2/29/Malamaal_Weekly_poster.jpg" },
    { id: 90, title: "Hungama", img: "https://upload.wikimedia.org/wikipedia/en/e/e8/Hungama_%282003_film%29_poster.jpg" },
    { id: 91, title: "Rockstar", img: "https://upload.wikimedia.org/wikipedia/en/c/ca/Rockstar_%282011_film%29_poster.jpg" },
    { id: 92, title: "Tamasha", img: "https://upload.wikimedia.org/wikipedia/en/3/36/Tamasha_film_poster.jpg" },
    { id: 93, title: "Barfi", img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Barfi%21_poster.jpg" },
    { id: 94, title: "Yeh Jawaani Hai Deewani", img: "https://upload.wikimedia.org/wikipedia/en/1/15/Yeh_Jawaani_Hai_Deewani.jpg" },
    { id: 95, title: "Zindagi Na Milegi Dobara", img: "https://upload.wikimedia.org/wikipedia/en/3/3d/Zindaginamilegidobara.jpg" },
    { id: 96, title: "Queen", img: "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg" },
    { id: 97, title: "Piku", img: "https://upload.wikimedia.org/wikipedia/en/e/e3/Piku_Poster.jpg" },
    { id: 98, title: "Andhadhun", img: "https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg" },
    { id: 99, title: "Tumbbad", img: "https://upload.wikimedia.org/wikipedia/en/4/41/Tumbbad_poster.jpg" },
    { id: 100, title: "Gangs of Wasseypur", img: "https://upload.wikimedia.org/wikipedia/en/6/6a/Gangs_of_Wasseypur_poster.jpg" }
];

// DOM Elements
const heroSlider = document.getElementById('heroSlider');
const trendingList = document.getElementById('trendingList');
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const searchBar = document.getElementById('searchBar');
const mainApp = document.getElementById('main-app');
const loadingScreen = document.getElementById('loadingScreen');

// --- 1. RENDER SLIDER (Auto Change - Top 5) ---
function renderSlider() {
    const heroMovies = moviesDB.slice(0, 5); // Use first 5 as Hero
    heroSlider.innerHTML = '';
    
    heroMovies.forEach((movie, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${movie.img}')`;
        slide.innerHTML = `<div class="slide-overlay"><div class="slide-title">${movie.title}</div></div>`;
        slide.onclick = () => startRedirect(movie.title);
        heroSlider.appendChild(slide);
    });

    let current = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('.slide');
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000);
}

// --- 2. RENDER TRENDING (Top 10 Horizontal with Numbers) ---
function renderTrending() {
    const trendingMovies = moviesDB.slice(0, 10);
    trendingList.innerHTML = '';
    
    trendingMovies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'h-card';
        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}" onerror="this.src='https://placehold.co/130x195?text=No+Img'">
            <div class="rank-number">${index + 1}</div>
        `;
        card.onclick = () => startRedirect(movie.title);
        trendingList.appendChild(card);
    });
}

// --- 3. RENDER ALL MOVIES GRID (1-100) ---
function renderGrid(list) {
    movieGrid.innerHTML = '';
    
    if (list.length === 0) {
        document.getElementById('noResults').classList.remove('hidden');
    } else {
        document.getElementById('noResults').classList.add('hidden');
        list.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <div class="movie-number-tag">#${movie.id}</div>
                <img src="${movie.img}" alt="${movie.title}" loading="lazy" onerror="this.src='https://placehold.co/200x300?text=No+Img'">
            `;
            card.onclick = () => startRedirect(movie.title);
            movieGrid.appendChild(card);
        });
    }
}

// --- 4. SEARCH LOGIC (Instant Filter) ---
function toggleSearch() {
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) searchInput.focus();
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    // Filter from the full list
    const filtered = moviesDB.filter(movie => 
        movie.title.toLowerCase().includes(term)
    );
    renderGrid(filtered);
});

// --- 5. REDIRECT PROCESS (With Developer Footer) ---
function startRedirect(movieName) {
    mainApp.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    window.scrollTo(0, 0);

    const progressBar = document.getElementById('progressBar');
    let width = 0;
    const interval = setInterval(() => {
        width += 2;
        progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            window.location.href = TELEGRAM_LINK;
        }
    }, 40); // 2 seconds total time
}

// --- INIT (With Footer) ---
document.body.insertAdjacentHTML('beforeend', `
    <footer>
        <p>Developed by <span>${DEVELOPER_NAME}</span></p>
        <p style="font-size: 0.8rem; margin-top:5px;">&copy; 2024 AstraToonix. All Rights Reserved.</p>
    </footer>
`);

renderSlider();
renderTrending();
renderGrid(moviesDB);
    
