import React, { useState, useEffect } from 'react';

// Fetch the VAPID public key from environment variable
// const VAPID_PUBLIC_KEY = import.meta.env.VITE_VAPID_PUBLIC_KEY;
const VAPID_PUBLIC_KEY = "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAELuh+VdVKIP6bDb2wQwEnXSkZnNwFEeP36GL10jFMUDfB8TyHhRsh/lq3D/AWWOVctD3x6hS/PI9dZrZjb53ow==";
console.log("VAPID_PUBLIC_KEY from env:", VAPID_PUBLIC_KEY); // Log the VAPID public key

// Function to convert base64url to Uint8Array
const urlBase64ToUint8Array = (base64Url) => {
  console.log("Base64Url Public Key (before padding conversion):", base64Url); // Log base64url before conversion

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert base64url back to base64
  const padding = '='.repeat((4 - (base64.length % 4)) % 4); // Add padding if necessary
  const base64WithPadding = base64 + padding;
  const rawData = window.atob(base64WithPadding);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  console.log("Converted Uint8Array:", outputArray); // Log the converted Uint8Array
  return outputArray;
};

const SubscribePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    // Check if the browser supports Push notifications and Service Worker
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then((registration) => {
        // Check if already subscribed
        registration.pushManager.getSubscription().then((existingSubscription) => {
          if (existingSubscription) {
            setIsSubscribed(true);
            setSubscription(existingSubscription);
          }
        });
      });
    }
  }, []);

  const subscribeUser = async () => {
    if (!VAPID_PUBLIC_KEY) {
      console.error('VAPID Public Key is missing or invalid');
      return;
    }

    console.log("Original VAPID_PUBLIC_KEY:", VAPID_PUBLIC_KEY); // Log the original public key

    try {
      // Convert the base64url public key to a Uint8Array
      const applicationServerKey = urlBase64ToUint8Array(VAPID_PUBLIC_KEY);

      // Verify if the key length is 256 bits (32 bytes)
      console.log("Application Server Key Length:", applicationServerKey.length); // Should be 32 bytes (256 bits)

      if (applicationServerKey.length !== 32) {
        console.error("Invalid VAPID Public Key length. It should be 256 bits.");
        return;
      }

      // Register the service worker
      const registration = await navigator.serviceWorker.register('/service-worker.js');

      // Subscribe the user to push notifications
      const pushSubscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey, // Use the Uint8Array here
      });

      // Send the subscription details to the backend
      await fetch('http://localhost:8000/api/notifications/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscription: pushSubscription,
        }),
      });

      setIsSubscribed(true);
      setSubscription(pushSubscription);
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };

  return (
    <div>
      <h1>Subscribe to Push Notifications</h1>
      {!isSubscribed ? (
        <button onClick={subscribeUser}>Subscribe</button>
      ) : (
        <p>You are subscribed to notifications!</p>
      )}
    </div>
  );
};

export default SubscribePage;
