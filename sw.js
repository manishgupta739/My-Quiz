const cacheName = 'pharma-quiz-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './icon.png',
  
  // ORIGINAL PHARMACEUTICS TOPICS
  './history of pharmacy.html',
  './packaging material.html',
  './tablets.html',
  './capsule.html',
  './size reduction.html',
  
  // ORIGINAL PHARMACOLOGY TOPICS
  './route of administration.html',
  './Pharmacokinetics & dynamic , AD, clinical trial.html',
  './Cholinergic & Anticholinergic drugs.html',
  './Adrenergic & Antiadrenergic drugs.html',
  
  // NEW SUBJECT TOPIC BLOCKS (A, B, C)
  './cogno-a.html', './cogno-b.html', './cogno-c.html',
  './hap-a.html', './hap-b.html', './hap-c.html',
  './biochem-a.html', './biochem-b.html', './biochem-c.html',
  './chem-a.html', './chem-b.html', './chem-c.html',
  './community-a.html', './community-b.html', './community-c.html'
];

// 1. Install Event: Saves files to the phone
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

// 2. Fetch Event: Serves files from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// 3. Activate Event: Cleans up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
