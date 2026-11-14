# Economics Game — project rules

Economics games for an adult audience (working title). Plain HTML/CSS/JS, no build step, GitHub Pages under `/economics-game/` (relative paths only). See README for structure.

## Conventions
- Languages ES / CA / EN everywhere (`Eco.t({es, ca, en})`, or `Eco.dict()` + `data-i18n`). Spanish is the fallback.
- One mascot for everything: **Duro** the coin (`Eco.mascotSVG()`). Put it in an element with `data-host`; the shared code animates it. Use `Eco.react(host, 'hop' | 'flip' | 'wobble')` for events. Don't re-implement mascot animation per game.
- Look: warm paper & ink, tokens in `shared/styles.css` `:root`, dark mode via `prefers-color-scheme`. Respect `prefers-reduced-motion`.
- Works at 320 px wide with no horizontal scroll; main action always on screen.
- New game: folder `games/<id>/`, entry in `games.js` (`status: 'live'`, `path`), files in `PRECACHE`.

## Changelogs (update on every change, in the same commit)
- `CHANGELOG.md` — technical, Keep a Changelog + SemVer.
- `news.js` — player-facing, short, ES/CA/EN, `id` always increasing. Pure technical changes don't go here.
- Every release: bump `VERSION` in `shared/app.js` and `CACHE` in `sw.js`.

## Git
- Commits use the GitHub noreply email (repo-local git config), never a work address.
