const CACHE_NAME = 'astratoonix-v3'; // Version change kar diya
const ASSETS = [
    './', 
    './index.html', 
    './shop.html',       // Shop page add kiya
    './shop-data.js',    // New data file add ki
    './style.css', 
    './script.js', 
    './logo.png'
];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
