const CACHE_NAME = "attendance-v6"; // Incremented version to force update
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "https://cdn.jsdelivr.net/npm/chart.js",
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"
];

// 1. Install Event: Cache CRITICAL assets immediately
self.addEventListener("install", (e) => {
  self.skipWaiting(); 
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // We use {cache: 'reload'} to ensure we get fresh copies from the network
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Activate Event: Clean up old caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// 3. Fetch Event: Network First, Fallback to Cache
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // If network works, return it and update cache
        if (!response || response.status !== 200 || response.type !== 'basic') {
            // For 3rd party scripts (opaque), we just return the response
            // but we still want to cache them if possible.
        }
        
        // Clone and Cache
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, resClone);
        });
        return response;
      })
      .catch(() => {
        // Network failed (Offline) -> Return Cached Version
        return caches.match(e.request).then((cachedResponse) => {
             if (cachedResponse) {
                 return cachedResponse;
             }
             // Optional: Return a fallback page if needed, but for SPA index.html is enough
             // If request is for a navigation (the page itself), return index.html
             if (e.request.mode === 'navigate') {
                 return caches.match('./index.html');
             }
        });
      })
  );
});
