# Economics Game 🪙

*(working title)* Economics games for adults, in Spanish, Catalan and English. Built for phones and desktops, installable, hosted on GitHub Pages.

**Play:** https://grojasv.github.io/economics-game/

## Structure

Plain HTML/CSS/JS, no build step.

```
index.html           hub
games.js             game catalogue shown on the hub (ECO_GAMES)
news.js              player-facing "What's new" (ECO_NEWS)
CHANGELOG.md         technical changelog (SemVer)
shared/app.js        language, mascot Duro, animations, toast, PWA install + update check (window.Eco)
shared/styles.css    tokens (paper & ink, dark mode), buttons, mascot animations, sheet, toast
sw.js                service worker (offline cache)
manifest.webmanifest PWA manifest
icons/               app icons (rendered from the mascot SVG)
games/<id>/          one folder per game
games/quiz/          ¿Te lo llevas? — 15-step quiz ladder (questions-[a-e].js: 150 questions)
music/               music room (tension track preview)
docs/curriculum.md   official sources for game content (3 Bachillerato economics subjects)
```

## Installable app

`manifest.webmanifest` + `sw.js` + `icons/`. iPhone/iPad: Safari → Share → *Add to Home Screen*. Android/Chrome/desktop: the hub shows an **Install** button.

On every open and whenever the app comes back to the screen it asks the service worker for a new version (`reg.update()`). When one takes over, the page reloads once and Duro says which version is now running. Code is served network-first (cache after 3 s or offline), so a deploy shows on the next open.

## Releasing

Every change, in the same commit:
1. `CHANGELOG.md`: new version section on top.
2. `news.js`: a short ES/CA/EN line, only if a player would notice.
3. Bump `VERSION` in `shared/app.js` **and** `CACHE` in `sw.js`; add new files to `PRECACHE`.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.
