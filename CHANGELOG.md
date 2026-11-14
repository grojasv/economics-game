# Changelog

All notable changes. Format: [Keep a Changelog](https://keepachangelog.com/), versions: [SemVer](https://semver.org/) — new game or feature = minor, fix = patch.

The player-facing version of this list lives in `news.js` (hub → 🗞️ *What's new*).

## [0.2.0] — 2026-11-14
### Added
- **Tension music** for *¿Te lo llevas?* (`shared/audio.js`, `window.EcoAudio`), generated with Web Audio, no audio files:
  - D minor, 8-bar loop Dm – Bb – Gm – A: every phrase ends on the dominant and never resolves.
  - Layers: a pad that swells and closes, a bass ostinato with a Phrygian half-step (D–Eb), a clock tick, a heartbeat kick, and a pluck arpeggio with a dotted delay, all through a generated reverb and a compressor.
  - `music.setIntensity(0…1)` (step 1 → 15): tempo 92 → 114 BPM, filters open, the tick goes from quarters to eighths, the heartbeat enters from step 4, the arpeggio from step 7 and an octave higher from step 14.
  - `music.setDanger(true)` (last seconds of the timer): +10 BPM, sixteenth ticks, a double heartbeat, high stabs and a beating high drone.
  - Mute is remembered (`eco.muted`); music starts only after a tap (autoplay rules).
- **Music room** (`music/`, linked from the hub footer): play/stop, a step slider 1–15 with its prize, *Last seconds* and mute, and the list of layers playing.
- `docs/quiz-spec.md`: draft spec of the first game, *¿Te lo llevas?* (a 15-step quiz ladder with cash-out, lifelines, timer, a ranking on the device and a share card).
- `docs/curriculum.md`: the official sources for game content — the three economics subjects of Bachillerato (Real Decreto 243/2022, Annex II): Economía (1º), Economía, Emprendimiento y Actividad Empresarial (1º) and Empresa y Diseño de Modelos de Negocio (2º), with subject codes for tagging and a draft map to game ideas.
- `PRECACHE` adds `shared/audio.js` and `music/index.html`; service worker cache `eco-v2`.

## [0.1.0] — 2026-11-14
### Added
- Foundation, modelled on Laboratorio Mellis: plain HTML/CSS/JS, no build step, GitHub Pages, relative paths only.
- **Hub** (`index.html`): header with the language switch and the 🗞️ news button (red dot when there is unread news), Duro's greeting, a games grid driven by `games.js` with one *Coming soon* card, and a footer with the running version, *What's new* and a link to this changelog.
- **Mascot Duro**, a coin with a monocle (`Eco.mascotSVG()` in `shared/app.js`). Any element with `data-host` breathes, blinks, waves, follows the pointer with its eyes and hops or flips when tapped; `Eco.react(host, 'hop' | 'flip' | 'wobble')` for game events.
- **Three languages** ES / CA / EN (`Eco.t({es, ca, en})`, `data-i18n` keys via `Eco.dict()`); first visit follows the browser language, the choice is remembered.
- **Installable PWA**: `manifest.webmanifest`, `sw.js` (network-first for code, cache-first for images and fonts, offline fallback), icons in `icons/`. Install button on Chrome/Android, *Add to Home Screen* hint on iOS.
- **Update check**: the app asks the service worker for a new version on every open and every time it comes back to the screen; a new version reloads the page once and Duro announces it with a toast.
- Warm paper & ink look (Fraunces + Inter), with a dark "ledger at night" theme and `prefers-reduced-motion` support.
