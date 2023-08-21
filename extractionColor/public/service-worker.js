const CACHE_NAME = 'my-pwa-website';
const urlsToCache = [
  '/',
  '/index.html',
  '/howus.html',
  '/style.css',
  '/howus.css',
  'index.js',
  '/img/mylogo1.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
