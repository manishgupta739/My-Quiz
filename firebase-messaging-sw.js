importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyD45MzRXxn6PTn5yszQi_xlc0kO-FukHoI",
  authDomain: "rx-aspirant.firebaseapp.com",
  projectId: "rx-aspirant",
  storageBucket: "rx-aspirant.firebasestorage.app",
  messagingSenderId: "1007411370077",
  appId: "1:1007411370077:web:da559e45fd2a6a032b15b4"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handles the notification when app is in background
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/My-Quiz/icons/icon-192x192.png', // Ensure this path is correct
    badge: '/My-Quiz/icons/icon-192x192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
