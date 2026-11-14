// Shared runtime for every page: language, mascot, animations, PWA install,
// update check. Exposed as window.Eco.
(() => {
  const VERSION = '0.2.0'; // bump on every release, with CACHE in sw.js and a CHANGELOG.md section
  const REPO = 'https://github.com/grojasv/economics-game';
  const LANGS = ['es', 'ca', 'en'];
  const LANG_LABEL = { es: 'ES', ca: 'CA', en: 'EN' };

  // ---------- store ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem('eco.' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('eco.' + k, JSON.stringify(v)); } catch { /* private mode */ } },
  };

  // ---------- language ----------
  function detectLang() {
    const saved = store.get('lang');
    if (LANGS.includes(saved)) return saved;
    for (const l of navigator.languages || [navigator.language || 'es']) {
      const code = String(l).slice(0, 2).toLowerCase();
      if (LANGS.includes(code)) return code;
    }
    return 'es';
  }
  let lang = detectLang();
  const langListeners = [];
  // t({es, ca, en}) or t('key') from the page dictionary registered with Eco.dict()
  let dictionary = {};
  function t(x) {
    const o = typeof x === 'string' ? dictionary[x] : x;
    if (!o) return typeof x === 'string' ? x : '';
    return o[lang] ?? o.es ?? '';
  }
  function applyI18n(root = document) {
    root.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    root.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.documentElement.lang = lang;
  }
  function setLang(l) {
    if (!LANGS.includes(l) || l === lang) return;
    lang = l; store.set('lang', l);
    applyI18n();
    langListeners.forEach((fn) => fn(l));
  }
  function langSwitch(el) {
    el.classList.add('lang-switch');
    el.setAttribute('role', 'group');
    const render = () => {
      el.innerHTML = LANGS.map((l) => `<button type="button" data-l="${l}" aria-pressed="${l === lang}">${LANG_LABEL[l]}</button>`).join('');
    };
    el.addEventListener('click', (e) => { const b = e.target.closest('button[data-l]'); if (b) setLang(b.dataset.l); });
    langListeners.push(render);
    render();
  }

  // ---------- motion ----------
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const calm = () => reduced.matches;

  // ---------- mascot: Duro, the coin ----------
  // Every host element ([data-host]) holds an SVG with <g class="eyes">. The shared
  // code makes it breathe, blink, watch the pointer and hop when tapped.
  function mascotSVG(mood = 'idle') {
    const mouth = mood === 'happy'
      ? '<path d="M82 128 Q100 146 118 128" fill="none" stroke="#3a2a12" stroke-width="5" stroke-linecap="round"/>'
      : '<path d="M86 130 Q100 138 114 130" fill="none" stroke="#3a2a12" stroke-width="5" stroke-linecap="round"/>';
    return `
<svg class="duro" viewBox="0 0 200 220" role="img" aria-label="Duro">
  <defs>
    <radialGradient id="duroFace" cx="40%" cy="35%" r="70%">
      <stop offset="0" stop-color="#ffe9a6"/><stop offset=".55" stop-color="#e9b949"/><stop offset="1" stop-color="#b9822a"/>
    </radialGradient>
    <linearGradient id="duroRim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f6d57a"/><stop offset="1" stop-color="#8f5f17"/>
    </linearGradient>
  </defs>
  <ellipse class="duro-shadow" cx="100" cy="208" rx="46" ry="7" fill="#000" opacity=".14"/>
  <g class="duro-body">
    <path class="duro-leg" d="M80 176 L74 200 h-10" fill="none" stroke="#3a2a12" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path class="duro-leg" d="M120 176 L126 200 h10" fill="none" stroke="#3a2a12" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path class="duro-arm duro-arm-l" d="M28 104 Q10 112 14 132" fill="none" stroke="#3a2a12" stroke-width="5" stroke-linecap="round"/>
    <path class="duro-arm duro-arm-r" d="M172 104 Q190 96 188 76" fill="none" stroke="#3a2a12" stroke-width="5" stroke-linecap="round"/>
    <circle cx="100" cy="100" r="80" fill="url(#duroRim)"/>
    <circle cx="100" cy="100" r="76" fill="none" stroke="#7a4f12" stroke-width="5" stroke-dasharray="2 5" opacity=".55"/>
    <circle cx="100" cy="100" r="66" fill="url(#duroFace)" stroke="#a87322" stroke-width="2"/>
    <path d="M58 70 A50 50 0 0 1 120 46" fill="none" stroke="#fff6d6" stroke-width="6" stroke-linecap="round" opacity=".55"/>
    <path d="M70 80 q10 -8 20 -2" fill="none" stroke="#3a2a12" stroke-width="4" stroke-linecap="round"/>
    <path d="M110 76 q10 -6 20 2" fill="none" stroke="#3a2a12" stroke-width="4" stroke-linecap="round"/>
    <g class="eyes">
      <g class="eye"><ellipse cx="80" cy="98" rx="11" ry="13" fill="#fffaf0"/><circle class="pupil" cx="80" cy="100" r="5.5" fill="#2a1d0c"/></g>
      <g class="eye"><ellipse cx="120" cy="98" rx="11" ry="13" fill="#fffaf0"/><circle class="pupil" cx="120" cy="100" r="5.5" fill="#2a1d0c"/></g>
    </g>
    <circle cx="120" cy="98" r="17" fill="none" stroke="#3a2a12" stroke-width="3"/>
    <path d="M136 104 Q150 124 150 142" fill="none" stroke="#3a2a12" stroke-width="1.6"/>
    ${mouth}
    <text x="100" y="154" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="12" font-weight="700" fill="#8f5f17" letter-spacing="2">1 &#183; DURO</text>
  </g>
</svg>`;
  }

  // Pointer tracking: pupils look toward the last pointer position (throttled).
  let px = innerWidth / 2, py = innerHeight / 3, pending = false;
  function lookAll() {
    pending = false;
    document.querySelectorAll('[data-host]').forEach((host) => {
      const r = host.getBoundingClientRect();
      if (!r.width) return;
      const dx = px - (r.left + r.width / 2), dy = py - (r.top + r.height * 0.45);
      const d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 260) * 4;
      host.querySelectorAll('.pupil').forEach((p) => {
        p.style.transform = `translate(${(dx / d) * k}px, ${(dy / d) * k}px)`;
      });
    });
  }
  addEventListener('pointermove', (e) => {
    px = e.clientX; py = e.clientY;
    if (!pending && !calm()) { pending = true; setTimeout(() => requestAnimationFrame(lookAll), 80); }
  }, { passive: true });

  function blink(host) {
    const eyes = host.querySelector('.eyes');
    if (!eyes) return;
    eyes.classList.add('blink');
    setTimeout(() => eyes.classList.remove('blink'), 140);
  }
  function react(host, kind = 'hop') {
    if (calm()) return;
    host.classList.remove('hop', 'flip', 'wobble');
    void host.offsetWidth; // restart the animation
    host.classList.add(kind);
  }
  function initHosts(root = document) {
    root.querySelectorAll('[data-host]').forEach((host) => {
      if (host.dataset.hostReady) return;
      host.dataset.hostReady = '1';
      host.addEventListener('click', () => react(host, Math.random() < 0.35 ? 'flip' : 'hop'));
      host.addEventListener('animationend', (e) => {
        if (['hop', 'flip', 'wobble'].includes(e.animationName)) host.classList.remove(e.animationName);
      });
      (function loop() {
        setTimeout(() => { if (!document.hidden && !calm()) blink(host); loop(); }, 2200 + Math.random() * 3200);
      })();
    });
  }

  // ---------- toast ----------
  function toast(html, ms = 3500) {
    let box = document.querySelector('.toast');
    if (!box) { box = document.createElement('div'); box.className = 'toast'; box.setAttribute('role', 'status'); document.body.appendChild(box); }
    box.innerHTML = html;
    box.classList.add('show');
    clearTimeout(box._t);
    box._t = setTimeout(() => box.classList.remove('show'), ms);
  }

  // ---------- PWA: service worker + update check ----------
  const appScript = document.currentScript;
  let installEvt = null;
  const installListeners = [];
  if ('serviceWorker' in navigator && location.protocol.startsWith('http') && appScript) {
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register(new URL('../sw.js', appScript.src)).then((reg) => {
      const check = () => reg.update().catch(() => { /* offline */ });
      // Check for a new version on every open and every time the app comes back.
      check();
      document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') check(); });
    }).catch(() => { /* unsupported */ });
    // A new version took over: reload once so the page runs the new code.
    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController || reloaded) return;
      reloaded = true;
      location.reload();
    });
  }
  addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    installEvt = e;
    installListeners.forEach((fn) => fn(true));
  });
  addEventListener('appinstalled', () => { installEvt = null; installListeners.forEach((fn) => fn(false)); });
  const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  async function install() {
    if (!installEvt) return false;
    installEvt.prompt();
    const { outcome } = await installEvt.userChoice;
    installEvt = null;
    installListeners.forEach((fn) => fn(false));
    return outcome === 'accepted';
  }

  // True once after the running version changed (never on a first visit).
  function consumeJustUpdated() {
    const lastSeen = store.get('lastVersion');
    store.set('lastVersion', VERSION);
    return !!lastSeen && lastSeen !== VERSION;
  }

  document.addEventListener('DOMContentLoaded', () => { applyI18n(); initHosts(); });

  window.Eco = {
    VERSION, REPO, LANGS,
    get lang() { return lang; }, setLang, t, onLang: (fn) => langListeners.push(fn),
    dict(d) { dictionary = { ...dictionary, ...d }; applyI18n(); },
    applyI18n, langSwitch, store, toast,
    mascotSVG, initHosts, react, blink,
    canInstall: () => !!installEvt, onInstallable: (fn) => installListeners.push(fn), install, isStandalone, isIOS,
    consumeJustUpdated,
  };
})();
