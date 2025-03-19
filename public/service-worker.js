// self.addEventListener("install", (event) => {
//     event.waitUntil(
//       caches.open("pwa-cache").then((cache) => {
//         return cache.addAll(["/", "/index.html"]);
//       })
//     );
//   });
  
//   self.addEventListener("fetch", (event) => {
//     event.respondWith(
//       caches.match(event.request).then((response) => {
//         return response || fetch(event.request);
//       })
//     );
//   });
  
//   self.addEventListener("activate", (event) => {
//     event.waitUntil(
//       caches.keys().then((cacheNames) => {
//         return Promise.all(
//           cacheNames.map((cacheName) => {
//             if (cacheName !== "pwa-cache") {
//               return caches.delete(cacheName);
//             }
//           })
//         );
//       })
//     );
//   });

  
// const CACHE_NAME = "pwa-cache";
// const STATIC_ASSETS = ["/", "/index.html"];

// // Install event (Cache static assets)
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(STATIC_ASSETS);
//     })
//   );
// });

// // Fetch event (Bypass cache for API requests)
// self.addEventListener("fetch", (event) => {
//   const url = new URL(event.request.url);

//   // Bypass cache for API requests (Django backend)
//   if (url.origin === "http://127.0.0.1:8000" || url.origin === "http://localhost:8000") {
//     return fetch(event.request);
//   }

//   // Serve from cache if available, otherwise fetch from network
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });

// //Activate event (Delete old caches)
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== CACHE_NAME) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });


// navigator.serviceWorker.getRegistrations().then((registrations) => {
//   for (let registration of registrations) {
//     registration.unregister();
//   }
// });








// const CACHE_NAME = "pwa-cache";
// const STATIC_ASSETS = ["/", "/index.html"];

// // Install event (Cache static assets)
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(STATIC_ASSETS);
//     })
//   );
//   self.skipWaiting(); // Ensure the new SW takes over immediately
// });

// // Fetch event (Bypass cache for API requests)
// self.addEventListener("fetch", (event) => {
//   const url = new URL(event.request.url);

//   // ✅ Bypass cache for Django API requests (Prevent duplicate requests)
//   if (url.origin.includes("127.0.0.1:8000") || url.origin.includes("localhost:8000")) {
//     console.log("🔍 Bypassing cache for API request:", event.request.url);
//     event.respondWith(fetch(event.request)); // Always fetch API requests from the network
//     return;
//   }

//   // ✅ Serve from cache if available, otherwise fetch from network
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });

// // Activate event (Delete old caches)
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== CACHE_NAME) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
//   self.clients.claim(); // Ensure clients use the new SW immediately
// });
