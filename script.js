// CONFIGURATION
const TELEGRAM_LINK = "https://t.me/+u4cmm3JmIrFlNzZl"; // Your Group Link
const LOADING_DURATION = 3500; // 3.5 seconds

// MOCK DATA - You can add more movies here
const movies = [
    { id: 1, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
    { id: 2, title: "Spider-Man: No Way Home", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
    { id: 3, title: "Avatar: The Way of Water", poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
    { id: 4, title: "The Batman", poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
    { id: 5, title: "Oppenheimer", poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
    { id: 6, title: "Jawan", poster: "https://image.tmdb.org/t/p/w500/jcdkpX8VX5s13e9SjL33X7Gg0q.jpg" },
    { id: 7, title: "Pathaan", poster: "https://image.tmdb.org/t/p/w500/m1b9bq7qZDpQ9ON85shEELpTyyk.jpg" },
    { id: 8, title: "KGF Chapter 2", poster: "https://image.tmdb.org/t/p/w500/5DpNIccT3V1jXN3t6JtU5e1k3c.jpg" },
    { id: 9, title: "Leo", poster: "https://image.tmdb.org/t/p/w500/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg" },
    { id: 10, title: "Animal", poster: "https://image.tmdb.org/t/p/w500/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg" },
    { id: 11, title: "Pushpa", poster: "https://image.tmdb.org/t/p/w500/r1yAzpRb7XJcR8iT8g0QhC7F7.jpg" },
    { id: 12, title: "RRR", poster: "https://image.tmdb.org/t/p/w500/kd262tqHW6801W31K0A8uW8w5.jpg" }
];

// DOM ELEMENTS
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const mainApp = document.getElementById('main-app');
const loadingScreen = document.getElementById('loadingScreen');
const progressBar = document.getElementById('progressBar');

// RENDER MOVIES
function renderMovies(movieList) {
    movieGrid.innerHTML = '';
    
    if (movieList.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    movieList.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" loading="lazy">`;
        
        // CLICK EVENT -> START DOWNLOAD PROCESS
        card.addEventListener('click', () => {
            startRedirectProcess();
        });

        movieGrid.appendChild(card);
    });
}

// SEARCH FUNCTIONALITY
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    renderMovies(filtered);
});

// REDIRECT LOGIC
function startRedirectProcess() {
    // 1. Hide App, Show Loader
    mainApp.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    window.scrollTo(0, 0);

    // 2. Animate Progress Bar
    let progress = 0;
    const intervalTime = 30; // Update every 30ms
    const step = 100 / (LOADING_DURATION / intervalTime);

    const timer = setInterval(() => {
        progress += step;
        if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
            // 3. Redirect
            setTimeout(() => {
                window.location.href = TELEGRAM_LINK;
            }, 500);
        }
        progressBar.style.width = `${progress}%`;
    }, intervalTime);
}

// INITIAL RENDER
renderMovies(movies);
