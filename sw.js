const CACHE_NAME = "attendance-v5";
const ASSETS_TO_CACHE = [
  "./manifest.json",
  "./icon.png"
];

// 1. Install Event: Cache basic assets (icon, manifest)
self.addEventListener("install", (e) => {
  self.skipWaiting(); // Force this worker to activate immediately
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Activate Event: Take control immediately
self.addEventListener("activate", (e) => {
  return self.clients.claim();
});

// 3. Fetch Event: NETWORK FIRST, THEN CACHE
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // If network works, return response AND update the cache for next time
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, resClone);
        });
        return response;
      })
      .catch(() => {
        // If network fails (Offline), return the cached version
        return caches.match(e.request);
      })
  );
});
