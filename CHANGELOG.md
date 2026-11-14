# Changelog

All notable changes. Format: [Keep a Changelog](https://keepachangelog.com/), versions: [SemVer](https://semver.org/) — new game or feature = minor, fix = patch.

The player-facing version of this list lives in `news.js` (hub → 🗞️ *What's new*).

## [0.3.2] — 2026-11-14
### Changed
- Hub: the *Coming soon* card is gone; *¿Te lo llevas?* is the only game on the hub. Service worker cache `eco-v7`.

## [0.3.1] — 2026-11-14
### Fixed
- **Sharing on phones:** *Save & share* drew the card image (fonts, Duro, canvas) before calling `navigator.share`. Browsers, and Safari above all, only allow sharing and the clipboard right after a tap, so on an iPhone the share could be refused. The card is now drawn before the tap (when the end screen opens, with the remembered name, and again as the name is typed), and the tap calls `share()` immediately. Checked that the share call happens synchronously inside the submit and carries the PNG. Not yet tried on a real iPhone.
### Tested
- The explanation sheet, in its worst case (a wrong answer adds "The answer was …"), fits a 320×568 screen for all 150 questions in all 3 languages: the tallest is 388 px (e-23), and its top edge is 164 px from the top of the screen. The end screen fits too.
- Service worker cache `eco-v6`.

## [0.3.0] — 2026-11-14
### Added
- **¿Te lo llevas?** (`games/quiz/`, CA *T'ho emportes?*, EN *Cash Out?*), the first game, built to `docs/quiz-spec.md`:
  - 15 steps from easy to hard (tiers 1–3 at steps 1–5, 6–10, 11–15). The prize is 100 € × 2^(n−1), up to 1,638,400 €, with safety nets at steps 5 (1,600 €) and 10 (51,200 €). You see each question, then answer or cash out. A wrong answer or a time-out drops you to the last safety net.
  - Questions are random each run, mixed across all 5 categories (never the same category twice in a row, balanced across the run).
  - Three helps, once each: **50:50**, **Ask Duro** (a hint in a speech bubble, tap to close) and **Ask the market** (a crowd vote shown as a fill behind each answer; the crowd is right 85% / 65% / 45% of the time by tier).
  - Timer: 30 s on steps 1–10 and 45 s on 11–15. It turns red and switches the music to "danger" at 10 s, with a beep each second. It can be turned off, and then the run is not ranked.
  - After every answer, an explanation with its syllabus tag (e.g. `ECO-A · Coste de oportunidad`). The answer is revealed after a pause of suspense, and the music dips under it.
  - End screen: the prize, a line from Duro (reaching the top explains compound growth), the player's name, *Save & share*, *Again* and *Ranking*.
  - **Ranking** on the device: the top 10 (`eco.quiz.scores`). Names are always shown as text.
  - **Share**: a 1080×1350 PNG card (Duro, name, prize, step, *¿Me superas?*) through the phone's share sheet, plus a "beat me" link (`?n=&p=&s=`). On desktop, the card downloads and the link is copied. Opening the link shows the challenge on the start screen; the score in it is capped at the real maximum.
  - Music: the tension track follows the step. Sound effects (`EcoAudio.play`): lock-in, right, wrong, time-out, last seconds, help, cash register, a high-stakes sting at step 11, and a win fanfare.
- **Question bank** (`games/quiz/questions-[a-e].js`): 150 questions, 30 per category and 10 per tier, in ES/CA/EN, each with an explanation, a hint, a topic and its source in the official syllabus (`docs/curriculum.md`). Written by one writer per category, then checked by an independent reviewer for correctness, single right answer, outdated facts, translation, neutrality and hints that gave the answer away.
- Hub: the quiz card is live; a *Coming soon* card stays for the next game.
- `Eco.setBusy()`: a new version no longer reloads a page in the middle of a game. The quiz is busy outside its start screen, and the update applies when the player is back there or opens the hub.
- `EcoAudio.play(name)` and `EcoAudio.duck(on)`.
### Fixed
- A version update could reload the page in the middle of a run, which lost it. Found while play-testing.
- The money format is consistent: the browser's Spanish format writes "1600 €" but "12.800 €"; it is now always "1.600 €" (and "€1,600" in English).
- The toast is as wide as its text (it used to shrink to a narrow column).
### Tested
- Played full runs in the browser with scripted clicks (not by hand): winning all 15 steps, falling at steps 3, 7 and 12 (0 € / 1,600 € / 51,200 €), cashing out at step 4 (400 €), all three helps, timer expiry, saving, ranking, the share card, and challenge links (including injected HTML and an inflated score). No script errors.
- Layout: every question in every language (450 renders) fits a 320×568 screen with all answers and the cash-out button visible, with the market vote shown (worst case 556 px).
- Service worker cache `eco-v5`; the quiz files are precached.

## [0.2.2] — 2026-11-14
### Fixed
- Entrance animation (`.rise`): content is visible by default and the animation only fades it in (`animation-fill-mode: backwards`). Before, it started at `opacity: 0` and needed the animation to run to appear, so where animations are switched off (`animation: none`) the hub stayed empty. Service worker cache `eco-v4`.
### Note
- In a hidden preview pane, the page's animation clock does not advance, so screenshots there show the hub's top section blank. Real browsers are not affected; every `.rise` animation finishes at full opacity.

## [0.2.1] — 2026-11-14
### Fixed
Found by a review pass that measured the music on the final mix (an analyser tap, `EcoAudio._tap()`):
- **The tension barely grew:** step 1 → 15 was only +2 dB, and step 7 was quieter than step 4. Bass, pad and arpeggio now get louder with the stakes; on a phone-speaker estimate (energy above 200 Hz) the level now rises steadily, about 8 dB from step 1 to the last seconds (−31 → −28 → −27 → −25 → −25 → −23 dB at steps 1, 4, 7, 11, 15 and the last seconds). Peaks stay below 0.65, so there is no clipping.
- **The heartbeat would vanish on phones:** it lived below 110 Hz. It now has a short knock around 110–240 Hz that small speakers can play. The sub-octave of the bass is a sine instead of a square.
- **The clock tick was almost inaudible** (a very narrow filter). It is wider, louder and lower (4.2 / 6.2 kHz), and it grows with the stakes.
- **Leaving the app** now pauses all sound, and coming back resumes it. After a stalled timer the music skips the missed steps instead of firing them all at once.
- Music room: the ▶ button no longer wraps onto two lines at 320 px.
- Hub footer: the "·" separators are gone (one was left hanging when the row wrapped at 320 px).
- Page titles follow the language (`docTitle` key in `Eco.dict()`).
- Music bus level 0.55 → 0.7. Service worker cache `eco-v3`.

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
