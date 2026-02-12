const CACHE_NAME = 'astratoonix-v15';
const ASSETS = [
    './', 
    './index.html', 
    './shop.html',
    './style.css',
    './shop-style.css',
    './script.js',
    './shop-script.js',
    './shop-data.js',
    './games.js',
    './manifest.json',
    './logo.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
