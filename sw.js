importScripts('/IT-202-Project-2/cache-polyfill.js');
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('hi').then(cache => {
      return cache.addAll([
        '/IT-202-Project-2',
        '/IT-202-Project-2/index.html',
        '/IT-202-Project-2/index/page_content/about.html',
        '/IT-202-Project-2/js/list.js',
        '/IT-202-Project-2/js/search.js',
        '/IT-202-Project-2/js/map.js'
      ])
    })
  );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
