# Changelog

All notable changes. Format: [Keep a Changelog](https://keepachangelog.com/), versions: [SemVer](https://semver.org/) — new game or feature = minor, fix = patch.

The player-facing version of this list lives in `news.js` (hub → 🗞️ *What's new*).

## [Unreleased]
### Added
- `docs/curriculum.md`: the official sources for game content — the three economics subjects of Bachillerato (Real Decreto 243/2022, Annex II): Economía (1º), Economía, Emprendimiento y Actividad Empresarial (1º) and Empresa y Diseño de Modelos de Negocio (2º), with subject codes for tagging and a draft map to game ideas.

## [0.1.0] — 2026-11-14
### Added
- Foundation, modelled on Laboratorio Mellis: plain HTML/CSS/JS, no build step, GitHub Pages, relative paths only.
- **Hub** (`index.html`): header with the language switch and the 🗞️ news button (red dot when there is unread news), Duro's greeting, a games grid driven by `games.js` with one *Coming soon* card, and a footer with the running version, *What's new* and a link to this changelog.
- **Mascot Duro**, a coin with a monocle (`Eco.mascotSVG()` in `shared/app.js`). Any element with `data-host` breathes, blinks, waves, follows the pointer with its eyes and hops or flips when tapped; `Eco.react(host, 'hop' | 'flip' | 'wobble')` for game events.
- **Three languages** ES / CA / EN (`Eco.t({es, ca, en})`, `data-i18n` keys via `Eco.dict()`); first visit follows the browser language, the choice is remembered.
- **Installable PWA**: `manifest.webmanifest`, `sw.js` (network-first for code, cache-first for images and fonts, offline fallback), icons in `icons/`. Install button on Chrome/Android, *Add to Home Screen* hint on iOS.
- **Update check**: the app asks the service worker for a new version on every open and every time it comes back to the screen; a new version reloads the page once and Duro announces it with a toast.
- Warm paper & ink look (Fraunces + Inter), with a dark "ledger at night" theme and `prefers-reduced-motion` support.
