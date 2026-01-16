const CACHE_NAME = "attendance-v7-final"; // Increment version
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

self.addEventListener("install", (e) => {
  self.skipWaiting(); 
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // 1. IGNORE Firebase & Google API requests (Let browser handle them)
  // This prevents the app from hanging while waiting for auth/db when connection is poor.
  if (url.includes("firebase") || url.includes("googleapis") || url.includes("firestore")) {
      return; 
  }

  // 2. Stale-While-Revalidate for App Shell (Instant Load + Background Update)
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      const fetchPromise = fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
           const resClone = networkResponse.clone();
           caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
        }
        return networkResponse;
      }).catch(() => {
          // Fallback if offline and not in cache
      });
      return cachedResponse || fetchPromise;
    })
  );
});
