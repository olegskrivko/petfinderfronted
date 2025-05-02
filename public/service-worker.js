// // self.addEventListener("install", (event) => {
// //     event.waitUntil(
// //       caches.open("pwa-cache").then((cache) => {
// //         return cache.addAll(["/", "/index.html"]);
// //       })
// //     );
// //   });
  
// //   self.addEventListener("fetch", (event) => {
// //     event.respondWith(
// //       caches.match(event.request).then((response) => {
// //         return response || fetch(event.request);
// //       })
// //     );
// //   });
  
// //   self.addEventListener("activate", (event) => {
// //     event.waitUntil(
// //       caches.keys().then((cacheNames) => {
// //         return Promise.all(
// //           cacheNames.map((cacheName) => {
// //             if (cacheName !== "pwa-cache") {
// //               return caches.delete(cacheName);
// //             }
// //           })
// //         );
// //       })
// //     );
// //   });

  
// // const CACHE_NAME = "pwa-cache";
// // const STATIC_ASSETS = ["/", "/index.html"];

// // // Install event (Cache static assets)
// // self.addEventListener("install", (event) => {
// //   event.waitUntil(
// //     caches.open(CACHE_NAME).then((cache) => {
// //       return cache.addAll(STATIC_ASSETS);
// //     })
// //   );
// // });

// // // Fetch event (Bypass cache for API requests)
// // self.addEventListener("fetch", (event) => {
// //   const url = new URL(event.request.url);

// //   // Bypass cache for API requests (Django backend)
// //   if (url.origin === "http://127.0.0.1:8000" || url.origin === "http://localhost:8000") {
// //     return fetch(event.request);
// //   }

// //   // Serve from cache if available, otherwise fetch from network
// //   event.respondWith(
// //     caches.match(event.request).then((response) => {
// //       return response || fetch(event.request);
// //     })
// //   );
// // });

// // //Activate event (Delete old caches)
// // self.addEventListener("activate", (event) => {
// //   event.waitUntil(
// //     caches.keys().then((cacheNames) => {
// //       return Promise.all(
// //         cacheNames.map((cacheName) => {
// //           if (cacheName !== CACHE_NAME) {
// //             return caches.delete(cacheName);
// //           }
// //         })
// //       );
// //     })
// //   );
// // });


// // navigator.serviceWorker.getRegistrations().then((registrations) => {
// //   for (let registration of registrations) {
// //     registration.unregister();
// //   }
// // });








// // const CACHE_NAME = "pwa-cache";
// // const STATIC_ASSETS = ["/", "/index.html"];

// // // Install event (Cache static assets)
// // self.addEventListener("install", (event) => {
// //   event.waitUntil(
// //     caches.open(CACHE_NAME).then((cache) => {
// //       return cache.addAll(STATIC_ASSETS);
// //     })
// //   );
// //   self.skipWaiting(); // Ensure the new SW takes over immediately
// // });

// // // Fetch event (Bypass cache for API requests)
// // self.addEventListener("fetch", (event) => {
// //   const url = new URL(event.request.url);

// //   // ✅ Bypass cache for Django API requests (Prevent duplicate requests)
// //   if (url.origin.includes("127.0.0.1:8000") || url.origin.includes("localhost:8000")) {
// //     console.log("🔍 Bypassing cache for API request:", event.request.url);
// //     event.respondWith(fetch(event.request)); // Always fetch API requests from the network
// //     return;
// //   }

// //   // ✅ Serve from cache if available, otherwise fetch from network
// //   event.respondWith(
// //     caches.match(event.request).then((response) => {
// //       return response || fetch(event.request);
// //     })
// //   );
// // });

// // // Activate event (Delete old caches)
// // self.addEventListener("activate", (event) => {
// //   event.waitUntil(
// //     caches.keys().then((cacheNames) => {
// //       return Promise.all(
// //         cacheNames.map((cacheName) => {
// //           if (cacheName !== CACHE_NAME) {
// //             return caches.delete(cacheName);
// //           }
// //         })
// //       );
// //     })
// //   );
// //   self.clients.claim(); // Ensure clients use the new SW immediately
// // });


// // public/sw.js

// // self.addEventListener('push', (event) => {
// //     const data = event.data.json();
  
// //     const title = data.title || 'Push Notification';
// //     const body = data.body || 'You have a new notification';
// //    // const icon = '/icon.png'; // Path to your icon file
  
// //     event.waitUntil(
// //       self.registration.showNotification(title, {
// //         body: body,
// //        // icon: icon,
// //         tag: 'push-notification',
// //       })
// //     );
// //   });
  
// //   self.addEventListener('notificationclick', (event) => {
// //     event.notification.close();
// //     event.waitUntil(
// //       clients.openWindow('/')  // Open the main page (or wherever you want the user to go)
// //     );
// //   });

// // service-worker.js

// // self.addEventListener("push", function (event) {
// //   const payload = event.data ? event.data.json() : {};

// //   const options = {
// //     body: payload.body,
// //     // icon: "/icons/icon-192x192.png", // Update with your app's icon
// //     // badge: "/icons/badge-72x72.png", // Update with your app's badge
// //     data: {
// //       url: payload.url, // Link the notification to a specific URL
// //     },
// //   };

// //   event.waitUntil(
// //     self.registration.showNotification(payload.title, options)
// //   );
// // });

// // self.addEventListener("notificationclick", function (event) {
// //   event.notification.close();

// //   const url = event.notification.data.url;
// //   if (url) {
// //     event.waitUntil(clients.openWindow(url));
// //   }
// // });
// self.addEventListener("push", function (event) {
//   let payload = {};
//   try {
//     payload = event.data ? event.data.json() : {};
//   } catch (e) {
//     console.error("Push event error parsing JSON:", e);
//   }

//   const title = payload.title || "New Notification";
//   const options = {
//     body: payload.body || "You have a new message.",
//     data: {
//       url: payload.url || "/",
//     },
//   };

//   event.waitUntil(
//     self.registration.showNotification(title, options)
//   );
// });
// self.addEventListener("notificationclick", function (event) {
//   event.notification.close();

//   const url = event.notification.data?.url || "/";
//   event.waitUntil(
//     clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
//       // Check if app window is already open
//       for (let client of windowClients) {
//         if (client.url === url && "focus" in client) {
//           return client.focus();
//         }
//       }
//       // If not, open a new window
//       if (clients.openWindow) {
//         return clients.openWindow(url);
//       }
//     })
//   );
// });
// self.addEventListener("push", function (event) {
//   let payload = {};
//   try {
//     payload = event.data ? event.data.json() : {};
//   } catch (e) {
//     console.error("Push event error parsing JSON:", e);
//   }

//   const title = payload.title || "New Notification";
//   const options = {
//     body: payload.body || "You have a new message.",
//     image: payload.image || undefined, // ✅ Add image if it exists
//     // icon: payload.icon || "/icons/icon-192.png", // optional: small icon in the corner
//     icon: payload.icon || "/favicon.ico", // ← this line uses your favicon
//     data: {
//       url: payload.url || "/",
//     },
//   };

//   event.waitUntil(
//     self.registration.showNotification(title, options)
//   );
// });

// self.addEventListener("notificationclick", function (event) {
//   event.notification.close();

//   const url = event.notification.data?.url || "/";
//   event.waitUntil(
//     clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
//       for (let client of windowClients) {
//         if (client.url === url && "focus" in client) {
//           return client.focus();
//         }
//       }
//       if (clients.openWindow) {
//         return clients.openWindow(url);
//       }
//     })
//   );
// });
self.addEventListener("push", function (event) {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (e) {
    console.error("Push event error parsing JSON:", e);
  }

  const title = payload.title || "New Notification";
  const options = {
    body: payload.body || "You have a new message.",
    image: payload.image || undefined, // Large banner image (optional)
    icon: payload.icon || "/favicon.ico", // Small icon (corner)
    data: {
      url: payload.url || "/",
    },
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  const url = event.notification.data?.url || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
      for (let client of windowClients) {
        if (client.url === url && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

// ✅ Force install and activation of updated service worker
self.addEventListener("install", function (event) {
  self.skipWaiting(); // Activate new SW immediately
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim()); // Take control of open pages
});
