// CONFIGURATION
const TELEGRAM_LINK = "https://t.me/+u4cmm3JmIrFlNzZl"; 
const IMG_BASE = "https://image.tmdb.org/t/p/w500";

// === 100+ MOVIES DATA ===
const moviesDB = [
    // --- TOP SLIDER ---
    { id: 1, title: "Kalki 2898 AD", img: `${IMG_BASE}/ufM22sM7131Wjj3B69W9k1i6iP.jpg` },
    { id: 2, title: "Animal", img: `${IMG_BASE}/hr9rjR3J0xBBKmlJ4n3gHId9ccx.jpg` },
    { id: 3, title: "Salaar", img: `${IMG_BASE}/m1b9bq7qZDpQ9ON85shEELpTyyk.jpg` },
    { id: 4, title: "Jawan", img: `${IMG_BASE}/jcdkpX8VX5s13e9SjL33X7Gg0q.jpg` },
    { id: 5, title: "Leo", img: `${IMG_BASE}/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg` },
    // --- TRENDING ---
    { id: 6, title: "Stree 2", img: `${IMG_BASE}/ylG61y7D5d3t3v6r2aN8QzKjFjU.jpg` },
    { id: 7, title: "Munjya", img: `${IMG_BASE}/6dfR3JjTjKG3h5v8e9bQ7kL2m4n.jpg` },
    { id: 8, title: "Tiger 3", img: `${IMG_BASE}/7I6VvfcY4acOSAdLTjWWJqJ7a0.jpg` },
    { id: 9, title: "12th Fail", img: `${IMG_BASE}/6fCLo5fC2WxVtIb2OvsR9wO1YIW.jpg` },
    { id: 10, title: "Dunki", img: `${IMG_BASE}/abWM2MqCs1H9UFXxEhfCKBJ1Zmc.jpg` },
    { id: 11, title: "Pathaan", img: `${IMG_BASE}/94xxmnuYk7WrAMdFa1NFkg5D3KJ.jpg` },
    { id: 12, title: "KGF 2", img: `${IMG_BASE}/bminzo5X4Pu7kXg9KRVgf7m3QoU.jpg` },
    { id: 13, title: "RRR", img: `${IMG_BASE}/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg` },
    { id: 14, title: "Pushpa", img: `${IMG_BASE}/r8dtDFY2GZE8aAUnWJzSF5P2eM5.jpg` },
    { id: 15, title: "Brahmastra", img: `${IMG_BASE}/iavXFb0GEmVmvK8qgbqgzbbGN2n.jpg` },
    // --- MORE MOVIES (Full list mentioned previously) ---
    { id: 16, title: "Baahubali 2", img: `${IMG_BASE}/3kdOj2j0n8VqACd6g5YlK8FzM0k.jpg` },
    { id: 17, title: "Kantara", img: `${IMG_BASE}/a3bkcZrVavWCVg92ZTL2jXzw1cM.jpg` },
    { id: 18, title: "Vikram", img: `${IMG_BASE}/wfbckS8p5vbIPbdpSge4GamUX2z.jpg` },
    { id: 19, title: "Jailer", img: `${IMG_BASE}/xbd5j6fmxqi2S5Zmx1WHS4QHXCd.jpg` },
    { id: 20, title: "Drishyam 2", img: `${IMG_BASE}/5jctPQcI98Fb2ge02DP82cAzpOh.jpg` },
    { id: 21, title: "Bhool Bhulaiyaa 2", img: `${IMG_BASE}/Az7v02pOVQBpY3BSpLZgqu3QYB.jpg` },
    { id: 22, title: "Kabir Singh", img: `${IMG_BASE}/d3EqMOJT4m3ou6NnmNGUX8dGyEh.jpg` },
    { id: 23, title: "War", img: `${IMG_BASE}/6G8BM42PYwBwN9WcaR4HPMZCvvP.jpg` },
    { id: 24, title: "Sanju", img: `${IMG_BASE}/tnkXU4KZQkrcCA24PH6pf7sI9Y6.jpg` },
    { id: 25, title: "Dangal", img: `${IMG_BASE}/p2l6qi8zTH7ot2RJZ18Ke8cVqlA.jpg` },
    { id: 26, title: "Sultan", img: `${IMG_BASE}/4s2K9z3IxOcqmzYBw9lS2gfttvb.jpg` },
    { id: 27, title: "Bajrangi Bhaijaan", img: `${IMG_BASE}/5B6msyDmvU1H4yYQlnAHSv4YA0r.jpg` },
    { id: 28, title: "PK", img: `${IMG_BASE}/z2u0YIMg0WiqNprocSFEasLBZg9.jpg` },
    { id: 29, title: "3 Idiots", img: `${IMG_BASE}/66AHI4BbklKwAxvKMcoH2akzhir.jpg` },
    { id: 30, title: "Chennai Express", img: `${IMG_BASE}/5h46tu7LHNEv0XLG4vuVhlqTZgS.jpg` },
    { id: 31, title: "Avengers Endgame", img: `${IMG_BASE}/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg` },
    { id: 32, title: "Avatar 2", img: `${IMG_BASE}/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg` },
    { id: 33, title: "No Way Home", img: `${IMG_BASE}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg` },
    { id: 34, title: "The Batman", img: `${IMG_BASE}/74xTEgt7R36Fpooo50r9T25onhq.jpg` },
    { id: 35, title: "Joker", img: `${IMG_BASE}/udDclJoHjfjb8EkGsdr7UUslc9t.jpg` },
    { id: 36, title: "Oppenheimer", img: `${IMG_BASE}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg` },
    { id: 37, title: "Inception", img: `${IMG_BASE}/edv5CZvWj09upOsyryjYIt5fjmA.jpg` },
    { id: 38, title: "Interstellar", img: `${IMG_BASE}/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg` },
    { id: 39, title: "Titanic", img: `${IMG_BASE}/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg` },
    { id: 40, title: "Fast X", img: `${IMG_BASE}/fiVW06jE7z9YnO4trhaMEdcl4Cn.jpg` },
    { id: 41, title: "John Wick 4", img: `${IMG_BASE}/vZloFAK7NmvMGKE7VkF5UPurDq.jpg` },
    { id: 42, title: "Mission Impossible", img: `${IMG_BASE}/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg` },
    { id: 43, title: "Top Gun", img: `${IMG_BASE}/62HCnUTziyWcpDaBO2i1DX17ljH.jpg` },
    { id: 44, title: "Black Panther", img: `${IMG_BASE}/uxzzxijgPIY7slzFvMotPv8wjKA.jpg` },
    { id: 45, title: "Iron Man", img: `${IMG_BASE}/78lPtwv72eTNqFW9COBykBkvO.jpg` },
    { id: 46, title: "Thor Ragnarok", img: `${IMG_BASE}/rzRwTcFvttcN1ZpX2xv4j3tbi82.jpg` },
    { id: 47, title: "Deadpool", img: `${IMG_BASE}/inVq3FRqcYIRl2la8iZikYYxFk6.jpg` },
    { id: 48, title: "Logan", img: `${IMG_BASE}/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg` },
    { id: 49, title: "Venom", img: `${IMG_BASE}/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg` },
    { id: 50, title: "Godzilla vs Kong", img: `${IMG_BASE}/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg` },
    { id: 51, title: "Jurassic World", img: `${IMG_BASE}/rAGiXaUfPzY7CDEyNKUofUnFeE.jpg` },
    { id: 52, title: "Frozen 2", img: `${IMG_BASE}/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg` },
    { id: 53, title: "Moana", img: `${IMG_BASE}/4JeejGugONWskkbnGpKDCuHkOVP.jpg` },
    { id: 54, title: "Coco", img: `${IMG_BASE}/eKi8dIrr8voCdba069JpnE2T4SS.jpg` },
    { id: 55, title: "Toy Story 4", img: `${IMG_BASE}/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg` },
    { id: 56, title: "Kung Fu Panda 4", img: `${IMG_BASE}/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg` },
    { id: 57, title: "Minions", img: `${IMG_BASE}/q0R4crx2SehcEEQEkYObktdeFy.jpg` },
    { id: 58, title: "Super Mario", img: `${IMG_BASE}/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg` },
    { id: 59, title: "Squid Game", img: `${IMG_BASE}/dDlEmu3aUO7kxoqbKUgWZ5lT2bN.jpg` },
    { id: 60, title: "Money Heist", img: `${IMG_BASE}/reEMJA1rzA0JIOy0bM2jMLGaWeT.jpg` },
    { id: 61, title: "Stranger Things", img: `${IMG_BASE}/x2LSRK2Cm7MZhjluni1msUQ36HG.jpg` },
    { id: 62, title: "Wednesday", img: `${IMG_BASE}/9PFonBhy4cQy7Jz20HCWMg2ODa4.jpg` },
    { id: 63, title: "One Piece Red", img: `${IMG_BASE}/m80kPdrmmtEh9wlLroCp0xoDQCH.jpg` },
    { id: 64, title: "Demon Slayer", img: `${IMG_BASE}/i8dsh9uozV08lOXgSW5pHaxCDzo.jpg` },
    { id: 65, title: "Naruto Movie", img: `${IMG_BASE}/zPYuVmaFWqi0rKQ1T9L06EQh0ax.jpg` },
    { id: 66, title: "Dragon Ball", img: `${IMG_BASE}/6F8rfOH75ujtYzYqXJnf4cZLyaP.jpg` },
    { id: 67, title: "Death Note", img: `${IMG_BASE}/iigwGCR22yLTFzAR2q5mxHala6m.jpg` },
    { id: 68, title: "Attack on Titan", img: `${IMG_BASE}/qM66Hs1bXUscthaswWZ216NUAvY.jpg` },
    { id: 69, title: "Loki", img: `${IMG_BASE}/voHUmluYmKyleFkTu3lOXcWuEeR.jpg` },
    { id: 70, title: "WandaVision", img: `${IMG_BASE}/glKDfE6btIRcVB5zrjspRIs4r52.jpg` },
    { id: 71, title: "Mirzapur", img: `${IMG_BASE}/mlggxAlncaTnjJVotX0hglRCRxy.jpg` },
    { id: 72, title: "Family Man", img: `${IMG_BASE}/8jIiuNMAfEw2J1kZ3d8s3TqI9pe.jpg` },
    { id: 73, title: "Sacred Games", img: `${IMG_BASE}/zSw6duCI4H9L6g1Ud4v9k0yZ3xC.jpg` },
    { id: 74, title: "Asur", img: `${IMG_BASE}/nDniwvgeT7DIK4Z3Q3PJuyVrdRY.jpg` },
    { id: 75, title: "Farzi", img: `${IMG_BASE}/jV7sVSt0xOboaRwl4OmlObqZ6R6.jpg` },
    { id: 76, title: "Scam 1992", img: `${IMG_BASE}/mNuhqsgmYBKDBpuZV6ymUKpX2y6.jpg` },
    { id: 77, title: "Panchayat", img: `${IMG_BASE}/sEZLpdViE7yaWt5LIepaW8Jzs1g.jpg` },
    { id: 78, title: "Kota Factory", img: `${IMG_BASE}/9WkUGBFrpABHS9v95K0mAicS7SW.jpg` },
    { id: 79, title: "Aspirants", img: `${IMG_BASE}/6b7szhnGjM8lHnePV4v3qCMsL79.jpg` },
    { id: 80, title: "Special OPS", img: `${IMG_BASE}/k1QQC7qOsKPhosw7fsvQwvwdNtd.jpg` },
    { id: 81, title: "Hera Pheri", img: `${IMG_BASE}/4uUy5pIjC2r0FkilWZ7zNiG4oNq.jpg` },
    { id: 82, title: "Welcome", img: `${IMG_BASE}/dF2EYv76WMBWABqYq1SStNzWqYB.jpg` },
    { id: 83, title: "Dhamaal", img: `${IMG_BASE}/aP4b5EHsR2Dht7en5k7m4P3jJLF.jpg` },
    { id: 84, title: "Golmaal", img: `${IMG_BASE}/3eqFvJlkIjClJ15hbfXKU8rBP6t.jpg` },
    { id: 85, title: "Housefull", img: `${IMG_BASE}/l2LqHMPX3hAHKAz4vJ20ojXLxke.jpg` },
    { id: 86, title: "Bhagam Bhag", img: `${IMG_BASE}/7TGG4Nq3U3yS2wCKWf5f9I9gGfc.jpg` },
    { id: 87, title: "Chup Chup Ke", img: `${IMG_BASE}/j5KkSpcAS2qNqtP3Vv11xPHXZ0Q.jpg` },
    { id: 88, title: "Dhol", img: `${IMG_BASE}/n7zJ2S4sB7pgarc4hZJ7z9z7xN8.jpg` },
    { id: 89, title: "Malamaal Weekly", img: `${IMG_BASE}/9j2E4WeHKK2hwG9swBmOB8J3uH0.jpg` },
    { id: 90, title: "Hungama", img: `${IMG_BASE}/3Mnbw4O4v8P1lL7G9lMS5bRy4CJ.jpg` },
    { id: 91, title: "Rockstar", img: `${IMG_BASE}/x2RS3uRUuNOAlBMxbM86r5KGdEC.jpg` },
    { id: 92, title: "Tamasha", img: `${IMG_BASE}/nZaT8XMSd007pwH9zGVlt2wMgj7.jpg` },
    { id: 93, title: "Barfi", img: `${IMG_BASE}/3K2rSp5f2gRJKL8dA5IqGA2o22Q.jpg` },
    { id: 94, title: "Yeh Jawaani", img: `${IMG_BASE}/9sjf4eh3z4Zmmytd45N0Msw3sj0.jpg` },
    { id: 95, title: "ZNMD", img: `${IMG_BASE}/eoAmIWN7w1hk57K6Jm8lH9NM6xL.jpg` },
    { id: 96, title: "Queen", img: `${IMG_BASE}/t9ca1Lka6rfz9S5IJy8pvLBsW7T.jpg` },
    { id: 97, title: "Piku", img: `${IMG_BASE}/e0ZsLKpobxik3KiNoIt7p61Vk1r.jpg` },
    { id: 98, title: "Andhadhun", img: `${IMG_BASE}/dyEn0I0G1ovQ8EnGvwxAXcJSPkH.jpg` },
    { id: 99, title: "Tumbbad", img: `${IMG_BASE}/4B2Yv855UM38fyaHqqiBsYdpmoe.jpg` },
    { id: 100, title: "Gangs of Wasseypur", img: `${IMG_BASE}/tMXOB3u5rLK72xHPJ4QivKGz2ba.jpg` },
    { id: 101, title: "Shaitaan", img: `${IMG_BASE}/7fAiMDJqUECS4g9Gall3nL1gN6U.jpg` },
    { id: 102, title: "Crew", img: `${IMG_BASE}/4a7S6qF6sLCS1rIqMogt3wRs3yq.jpg` },
    { id: 103, title: "Teri Baaton Mein", img: `${IMG_BASE}/mZDeIbLMluADAK1U6nqwMnKDjtV.jpg` },
    { id: 104, title: "Article 370", img: `${IMG_BASE}/yJn1ej2eZeaysS4yREJPeT9NqVg.jpg` },
    { id: 105, title: "Yodha", img: `${IMG_BASE}/39N5xkwrOOt5M3V29tdiOO5V3Iv.jpg` }
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
        if(slides.length) { slides[c].classList.remove('active'); c = (c + 1) % slides.length; slides[c].classList.add('active'); }
    }, 4000);
}

// 2. RENDER TRENDING
function renderTrending() {
    const trendingMovies = moviesDB.slice(5, 15);
    trendingList.innerHTML = '';
    trendingMovies.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'h-card';
        card.innerHTML = `<img src="\( {movie.img}" alt=" \){movie.title}" onerror="this.src='https://placehold.co/130x195?text=No+Img'"><div class="rank-number">${index + 1}</div>`;
        card.onclick = () => startRedirect();
        trendingList.appendChild(card);
    });
}

// 3. RENDER GRID (With Titles Below)
function renderGrid(list) {
    movieGrid.innerHTML = '';
    if (list.length === 0) {
        noResultsDiv.classList.remove('hidden');
    } else {
        noResultsDiv.classList.add('hidden');
        list.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            // Image Container + Title Text
            card.innerHTML = `
                <div class="movie-card-image-container">
                    <div class="movie-number-tag">#${movie.id}</div>
                    <img src="\( {movie.img}" alt=" \){movie.title}" loading="lazy" onerror="this.src='https://placehold.co/200x300?text=Poster'">
                </div>
                <div class="movie-title-text">${movie.title}</div>
            `;
            card.onclick = () => startRedirect();
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
function startRedirect() {
    mainApp.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
    let width = 0;
    const interval = setInterval(() => {
        width += 2; progressBar.style.width = width + '%';
        if (width >= 100) { clearInterval(interval); window.location.href = TELEGRAM_LINK; }
    }, 40);
}

// 6. TOGGLES
function toggleChatbot() { chatWindow.classList.toggle('hidden'); }
function toggleDevModal() { devModal.classList.toggle('hidden'); }

// 7. MOVABLE CHATBOT
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
floatBtn.addEventListener('mousedown', () => isDrag = true);
floatBtn.addEventListener('touchstart', () => isDrag = true, {passive: false});
document.addEventListener('mousemove', handleDrag);
document.addEventListener('touchmove', handleDrag, {passive: false});
document.addEventListener('mouseup', () => isDrag = false);
document.addEventListener('touchend', () => isDrag = false);
floatBtn.onclick = (e) => { if(!hasMoved) toggleChatbot(); hasMoved = false; };

// INIT
renderSlider();
renderTrending();
renderGrid(moviesDB);
