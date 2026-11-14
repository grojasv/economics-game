# ¿Te lo llevas? — quiz game spec (v1, built in 0.3.0)

Working title. CA: *T'ho emportes?* · EN: *Cash Out?* Folder `games/quiz/`. Hosted by Duro.

Decisions agreed with Guille on 2026-11-14 are marked ✅. Defaults I picked are marked ◻️ and can change.

## The run
- ✅ **15 steps**, from easy to hard: steps 1–5 easy, 6–10 medium, 11–15 hard (◻️ tiers map to steps like this).
- ✅ **Pretend euros, doubling:** step *n* is worth 100 € × 2^(n−1). Step 5 = 1,600 €, step 10 = 51,200 €, step 15 = **1,638,400 €**. ◻️ The doubling is itself a lesson in exponential growth (compound interest); Duro says so when you reach the top.
- ✅ **Safe points** at steps 5 and 10.
- ✅ **Cash out or keep going:** ◻️ you see the question first, then choose to answer or to leave with what you have. That choice is the risk lesson (expected value, loss aversion).
- ◻️ **Wrong answer or time out:** the run ends and you keep the last safe point (0 €, 1,600 € or 51,200 €).
- ✅ **Mixed, random each run:** every run draws from all 5 categories (ECO blocks A–E); ◻️ no category twice in a row, and no question repeats in a run.

## Lifelines (each once per run)
- ✅ **50:50:** removes two wrong answers.
- ✅ **Ask Duro:** a hint about the concept, never the answer. Built as a speech bubble floating over the screen (tap to close), so it never pushes the answers off a small phone.
- ✅ **Ask the market:** a crowd vote, built as a fill behind each answer plus a percentage (no extra height). ◻️ The crowd is right about 85% of the time on easy steps, 65% on medium and 45% on hard, and Duro reminds you that markets can be wrong.

## Timer
- ✅ 30 s on steps 1–10, 45 s on steps 11–15. Time out = wrong answer.
- ✅ A setting turns the timer off; runs without the timer don't enter the ranking.

## After each answer
- ✅ A short explanation (1–2 lines) whether right or wrong, with its syllabus tag (e.g. `ECO-A · Coste de oportunidad`). Duro reacts: hop on right, wobble on wrong.

## End of run
- ✅ **Name:** the player types a nickname (remembered for next time).
- ✅ **Ranking on the device:** top 10 runs (name, prize, step, date). No backend.
- ✅ **Share:** an image card (Duro, name, prize, step reached) through the phone's share sheet, plus a "beat me" link. ◻️ Opening the link shows "Ana got 51,200 €. Can you beat it?" before the first run. Only the nickname and score go in the link.

## Sound
- ✅ Effects + background music, all generated in the browser (Web Audio, no files): tick in the last 10 s, right, wrong, cash register on cash-out, a tension sting from step 11, and a looping game-show tune of our own.
- ◻️ A mute button stays on screen; music starts after the first tap (browsers block autoplay).

## Question bank
- ✅ **~150 questions:** 30 per category × 3 tiers (10 easy, 10 medium, 10 hard), in ES / CA / EN.
- Source: only the official syllabus in `docs/curriculum.md` (ECO, EEAE, EDMN). Each question carries its tag.
- Format (`games/quiz/questions.js`):

```js
{ id: 'a-017', cat: 'A', tier: 2, src: 'ECO-A',
  q: { es, ca, en }, options: [{ es, ca, en } × 4], answer: 0,
  why: { es, ca, en }, hint: { es, ca, en } }
```

| Cat | Name (ES) | Main sources |
|---|---|---|
| A | Decisiones y finanzas personales | ECO-A, EEAE-A1/A2 |
| B | Mercados y empresas | ECO-B, EEAE-C, EDMN-A/B/D |
| C | Macroeconomía | ECO-C |
| D | Política económica | ECO-D |
| E | Retos actuales | ECO-E, EEAE-A2 |

## Screens
1. **Start:** title, Duro, *Play*, *Ranking*, settings (timer, sound), and the challenge banner if opened from a shared link.
2. **Question:** the ladder on the side (on a phone, a compact strip on top), the question, 4 answers, the lifelines, the timer, and *Cash out (X €)*.
3. **Explanation:** right or wrong, the why, the tag, then *Next*.
4. **End:** the prize, a name field, *Save and share*, and *Play again*.
5. **Ranking:** top 10 on this device.

Must work at 320 px with the answers and the main button on screen without scrolling.
