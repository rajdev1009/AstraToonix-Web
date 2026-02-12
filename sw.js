const CACHE_NAME = 'astratoonix-v5';
const ASSETS = [
    './', 
    './index.html', 
    './shop.html',       
    './style.css', 
    './script.js', 
    './shop-style.css',  
    './shop-script.js',  
    './logo.png'
];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
