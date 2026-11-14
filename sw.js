// Offline support. Pages and code (HTML/JS/CSS) come from the network first, so a new
// version shows on the next open; the cache is the fallback offline or after NET_TIMEOUT.
// Images and fonts come from the cache straight away and refresh in the background.
// Every release: bump CACHE here and VERSION in shared/app.js. Add new files to PRECACHE.
const CACHE = 'eco-v5';
const NET_TIMEOUT = 3000;
const PRECACHE = [
  './',
  './index.html',
  './games.js',
  './news.js',
  './manifest.webmanifest',
  './shared/app.js',
  './shared/audio.js',
  './music/index.html',
  './games/quiz/',
  './games/quiz/index.html',
  './games/quiz/quiz.css',
  './games/quiz/quiz.js',
  './games/quiz/questions-a.js',
  './games/quiz/questions-b.js',
  './games/quiz/questions-c.js',
  './games/quiz/questions-d.js',
  './games/quiz/questions-e.js',
  './shared/styles.css',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-192.png',
  './icons/maskable-512.png',
];

self.addEventListener('install', (e) => {
  const reqs = PRECACHE.map((u) => new Request(u, { cache: 'reload' }));
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(reqs)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Revalidate with the server instead of trusting the HTTP cache (GitHub Pages caches 10 min).
async function fetchFresh(req) {
  if (req.mode !== 'navigate') return fetch(req, { cache: 'no-cache' });
  const res = await fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' });
  return res.redirected ? fetch(req) : res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const ours = url.origin === location.origin;
  const fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!ours && !fonts) return;
  const networkFirst = ours && !/\.(png|jpe?g|svg|ico|webp|woff2?)$/i.test(url.pathname);
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const cached = await cache.match(req, { ignoreSearch: ours })
      || (ours && url.pathname.endsWith('/') ? await cache.match(url.pathname + 'index.html') : undefined);
    const fresh = (networkFirst ? fetchFresh(req) : fetch(req)).then((res) => {
      if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
      return res.ok || !cached ? res : cached;
    });
    e.waitUntil(fresh.catch(() => {}));
    const fallback = fresh.catch(() => cached || Response.error());
    if (!cached) return fallback;
    if (!networkFirst) return cached;
    const slow = new Promise((r) => setTimeout(() => r(cached), NET_TIMEOUT));
    return Promise.race([fallback, slow]);
  }));
});
