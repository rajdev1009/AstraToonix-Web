const CACHE_NAME = 'astratoonix-v4'; // Version v4 kar diya hai
const ASSETS = [
    './', 
    './index.html', 
    './shop.html',       
    './shop-data.js',    
    './style.css', 
    './script.js', 
    './logo.png',
    // Ye 3 nayi files add ki hain:
    './shop-style.css',  
    './shop-script.js',  
    './games.js'
];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
