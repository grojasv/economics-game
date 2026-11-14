// ¿Te lo llevas? — 15-step quiz ladder. Spec: docs/quiz-spec.md.
(() => {
  const E = window.Eco, A = window.EcoAudio;
  const BANK = window.ECO_QUESTIONS || [];
  const STEPS = 15, SAFE = [5, 10];
  const prize = (n) => (n <= 0 ? 0 : 100 * 2 ** (n - 1));
  const tierOf = (step) => (step <= 5 ? 1 : step <= 10 ? 2 : 3);
  const timeFor = (step) => (step <= 10 ? 30 : 45);
  const MARKET_RIGHT = { 1: 0.85, 2: 0.65, 3: 0.45 };
  const CATS = {
    A: { es: 'Decisiones y finanzas', ca: 'Decisions i finances', en: 'Decisions & money' },
    B: { es: 'Mercados y empresas', ca: 'Mercats i empreses', en: 'Markets & business' },
    C: { es: 'Macroeconomía', ca: 'Macroeconomia', en: 'Macroeconomics' },
    D: { es: 'Política económica', ca: 'Política econòmica', en: 'Economic policy' },
    E: { es: 'Retos actuales', ca: 'Reptes actuals', en: "Today's challenges" },
  };

  E.dict({
    docTitle: { es: '¿Te lo llevas? · Juego de Economía', ca: "T'ho emportes? · Joc d'Economia", en: 'Cash Out? · Economics Game' },
    title: { es: '¿Te lo llevas?', ca: "T'ho emportes?", en: 'Cash Out?' },
    lead: {
      es: '15 preguntas de economía. El premio se dobla en cada escalón. ¿Te lo llevas o sigues?',
      ca: "15 preguntes d'economia. El premi es dobla a cada esglaó. T'ho emportes o continues?",
      en: '15 economics questions. The prize doubles every step. Cash out or keep going?',
    },
    play: { es: '▶ Jugar', ca: '▶ Jugar', en: '▶ Play' },
    ranking: { es: '🏆 Ranking', ca: '🏆 Rànquing', en: '🏆 Ranking' },
    timerOpt: { es: 'Reloj (30 s, 45 s en los difíciles)', ca: 'Rellotge (30 s, 45 s als difícils)', en: 'Timer (30 s, 45 s on hard ones)' },
    timerNote: { es: 'Sin reloj, la partida no entra en el ranking.', ca: 'Sense rellotge, la partida no entra al rànquing.', en: 'Without the timer, the run does not enter the ranking.' },
    howTo: { es: 'Cómo se juega', ca: 'Com es juga', en: 'How to play' },
    r1: { es: 'Cada acierto dobla el premio: de 100 € a 1.638.400 €.', ca: 'Cada encert dobla el premi: de 100 € a 1.638.400 €.', en: 'Each right answer doubles the prize: from €100 to €1,638,400.' },
    r2: { es: 'Ves la pregunta y decides: responder o llevarte lo que tienes.', ca: "Veus la pregunta i decideixes: respondre o emportar-te el que tens.", en: 'See the question, then decide: answer it or cash out what you have.' },
    r3: { es: 'Si fallas, te quedas con el último seguro: 1.600 € (escalón 5) o 51.200 € (escalón 10).', ca: "Si falles, et quedes l'última xarxa: 1.600 € (esglaó 5) o 51.200 € (esglaó 10).", en: 'Miss one and you keep the last safety net: €1,600 (step 5) or €51,200 (step 10).' },
    r4: { es: 'Tres ayudas, una vez cada una: 50:50, pregunta a Duro y pregunta al mercado.', ca: 'Tres ajudes, una vegada cadascuna: 50:50, pregunta-ho a en Duro i pregunta al mercat.', en: 'Three helps, once each: 50:50, ask Duro and ask the market.' },
    home: { es: 'Inicio', ca: 'Inici', en: 'Home' },
    sound: { es: 'Sonido', ca: 'So', en: 'Sound' },
    quit: { es: 'Abandonar', ca: 'Abandonar', en: 'Quit' },
    close: { es: 'Cerrar', ca: 'Tancar', en: 'Close' },
    llDuro: { es: 'Pregunta a Duro', ca: 'Pregunta-ho a en Duro', en: 'Ask Duro' },
    llMarket: { es: 'Pregunta al mercado', ca: 'Pregunta al mercat', en: 'Ask the market' },
    step: { es: 'Escalón', ca: 'Esglaó', en: 'Step' },
    forPrize: { es: 'por', ca: 'per', en: 'for' },
    cashOut: { es: 'Me lo llevo', ca: "M'ho emporto", en: 'Cash out' },
    right: { es: '¡Correcto!', ca: 'Correcte!', en: 'Correct!' },
    wrong: { es: 'Incorrecto', ca: 'Incorrecte', en: 'Wrong' },
    timeUp: { es: '¡Se acabó el tiempo!', ca: "S'ha acabat el temps!", en: "Time's up!" },
    rightWas: { es: 'La respuesta era', ca: 'La resposta era', en: 'The answer was' },
    next: { es: 'Siguiente escalón →', ca: 'Següent esglaó →', en: 'Next step →' },
    seeResult: { es: 'Ver resultado', ca: 'Veure el resultat', en: 'See result' },
    youTake: { es: 'Te llevas', ca: "T'emportes", en: 'You take home' },
    kWin: { es: '¡Has llegado a la cima!', ca: 'Has arribat al cim!', en: 'You reached the top!' },
    kCash: { es: 'Te lo has llevado', ca: "Te l'has emportat", en: 'You cashed out' },
    kFall: { es: 'Has caído', ca: 'Has caigut', en: 'You fell' },
    subWin: {
      es: '15 de 15. Y fíjate: doblar 14 veces convierte 100 € en 1,6 millones. Así funciona el interés compuesto.',
      ca: "15 de 15. I fixa't: doblar 14 vegades converteix 100 € en 1,6 milions. Així funciona l'interès compost.",
      en: '15 out of 15. And look: doubling 14 times turns €100 into €1.6 million. That is compound interest at work.',
    },
    subCash: { es: 'Escalón {n} de 15. Una decisión prudente: más vale pájaro en mano…', ca: 'Esglaó {n} de 15. Una decisió prudent: més val un ocell a la mà…', en: 'Step {n} of 15. A prudent choice: a bird in the hand…' },
    subFall: { es: 'Llegaste al escalón {n}. Te quedas con tu red de seguridad.', ca: "Vas arribar a l'esglaó {n}. Et quedes la teva xarxa de seguretat.", en: 'You reached step {n}. You keep your safety net.' },
    subZero: { es: 'Llegaste al escalón {n}, antes del primer seguro. ¡La próxima vez!', ca: "Vas arribar a l'esglaó {n}, abans de la primera xarxa. La pròxima vegada!", en: 'You reached step {n}, before the first safety net. Next time!' },
    yourName: { es: 'Tu nombre para el ranking', ca: 'El teu nom per al rànquing', en: 'Your name for the ranking' },
    saveShare: { es: 'Guardar y compartir', ca: 'Desar i compartir', en: 'Save & share' },
    unranked: { es: 'Partida sin reloj: no entra en el ranking, pero puedes compartirla.', ca: 'Partida sense rellotge: no entra al rànquing, però la pots compartir.', en: 'Run without the timer: not ranked, but you can share it.' },
    again: { es: '↻ Otra vez', ca: '↻ Una altra', en: '↻ Again' },
    rankEmpty: { es: 'Todavía no hay partidas. ¡Estrena el ranking!', ca: 'Encara no hi ha partides. Estrena el rànquing!', en: 'No runs yet. Be the first!' },
    quitQ: { es: '¿Abandonar la partida? Perderás lo que llevas.', ca: 'Abandonar la partida? Perdràs el que portes.', en: 'Quit the run? You will lose what you have.' },
    quitNo: { es: 'Seguir jugando', ca: 'Continuar jugant', en: 'Keep playing' },
    quitYes: { es: 'Abandonar', ca: 'Abandonar', en: 'Quit' },
    duroSays: { es: 'Duro:', ca: 'En Duro:', en: 'Duro:' },
    marketSays: {
      es: 'El mercado ha votado. Ojo: los mercados también se equivocan.',
      ca: "El mercat ha votat. Compte: els mercats també s'equivoquen.",
      en: 'The market has voted. Careful: markets can be wrong too.',
    },
    challenge: { es: '{n} se llevó {p}. ¿Le superas?', ca: "{n} s'ha emportat {p}. El superes?", en: '{n} took home {p}. Can you beat that?' },
    shareText: {
      es: '🪙 {n}: {p} en «¿Te lo llevas?» (escalón {s}/15). ¿Me superas?',
      ca: "🪙 {n}: {p} a «T'ho emportes?» (esglaó {s}/15). Em superes?",
      en: '🪙 {n}: {p} on “Cash Out?” (step {s}/15). Can you beat me?',
    },
    copied: { es: 'Enlace copiado', ca: 'Enllaç copiat', en: 'Link copied' },
    saved: { es: 'Guardado en el ranking', ca: 'Desat al rànquing', en: 'Saved to the ranking' },
    stingTop: { es: 'Zona de alto riesgo', ca: "Zona d'alt risc", en: 'High-stakes zone' },
  });
  const fill = (key, vars) => E.t(key).replace(/\{(\w+)\}/g, (_, k) => vars[k]);
  // Always group thousands (the browser's es format skips 4-digit numbers: "1600 €" next to "12.800 €").
  const money = (n) => {
    const s = String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, E.lang === 'en' ? ',' : '.');
    return E.lang === 'en' ? '€' + s : s + ' €';
  };
  const $ = (id) => document.getElementById(id);
  const shuffle = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

  // ---------- state ----------
  let run = null;        // { step, done, qs, used, lifelines, timed, q, order, removed, ... }
  let timerId = 0, deadline = 0, lastSecond = null;
  let timed = E.store.get('quiz.timer', true);

  // ---------- screens ----------
  const screens = ['s-start', 's-play', 's-end'];
  function show(id) {
    screens.forEach((s) => { $(s).hidden = s !== id; });
    window.scrollTo(0, 0);
    E.setBusy(id !== 's-start');   // a new version may reload the page only on the start screen
  }

  // ---------- mascots ----------
  ['duro-start', 'duro-end'].forEach((id) => { $(id).innerHTML = E.mascotSVG('happy'); });
  $('duro-play').innerHTML = E.mascotSVG();
  E.initHosts();
  E.langSwitch($('lang'));

  // ---------- sound button ----------
  function renderSound() {
    ['sound-btn', 'sound-btn-2'].forEach((id) => { $(id).textContent = A.muted ? '🔇' : '🔊'; });
  }
  ['sound-btn', 'sound-btn-2'].forEach((id) => $(id).addEventListener('click', () => {
    A.setMuted(!A.muted); renderSound();
    if (!A.muted && run && !$('s-play').hidden) A.music.start();
  }));
  renderSound();

  // ---------- start screen ----------
  const timerOpt = $('timer-opt');
  timerOpt.checked = timed;
  function renderTimerNote() { $('timer-note').hidden = timerOpt.checked; }
  timerOpt.addEventListener('change', () => { timed = timerOpt.checked; E.store.set('quiz.timer', timed); renderTimerNote(); });
  renderTimerNote();

  // Challenge link: ?n=Ana&p=51200&s=10
  const params = new URLSearchParams(location.search);
  const challenge = params.get('n') && Number.isFinite(+params.get('p'))
    ? { n: params.get('n').slice(0, 16), p: Math.max(0, Math.min(prize(STEPS), Math.round(+params.get('p')))), s: +params.get('s') || 0 }
    : null;
  function renderChallenge() {
    const el = $('challenge');
    el.hidden = !challenge;
    if (challenge) el.textContent = '🥊 ' + fill('challenge', { n: challenge.n, p: money(challenge.p) });
  }
  renderChallenge();

  $('play-btn').addEventListener('click', startRun);
  $('again-btn').addEventListener('click', startRun);
  $('rank-btn').addEventListener('click', openRanking);
  $('end-rank-btn').addEventListener('click', openRanking);

  // ---------- question picking ----------
  // One question per step: tier follows the step, never the same category twice in a row.
  function pickQuestions() {
    const out = [], seen = new Set();
    let lastCat = null;
    for (let step = 1; step <= STEPS; step++) {
      const tier = tierOf(step);
      let pool = BANK.filter((q) => q.tier === tier && !seen.has(q.id) && q.cat !== lastCat);
      if (!pool.length) pool = BANK.filter((q) => q.tier === tier && !seen.has(q.id));
      if (!pool.length) pool = BANK.filter((q) => !seen.has(q.id));
      // Prefer categories used least so far, so every run mixes all five
      const counts = {}; out.forEach((q) => { counts[q.cat] = (counts[q.cat] || 0) + 1; });
      const min = Math.min(...pool.map((q) => counts[q.cat] || 0));
      const fair = pool.filter((q) => (counts[q.cat] || 0) === min);
      const q = fair[Math.floor(Math.random() * fair.length)];
      out.push(q); seen.add(q.id); lastCat = q.cat;
    }
    return out;
  }

  // ---------- run ----------
  function startRun() {
    run = {
      step: 1, banked: 0, qs: pickQuestions(), timed,
      lifelines: { fifty: true, duro: true, market: true },
    };
    show('s-play');
    buildLadder();
    A.music.setDanger(false);
    A.music.setIntensity(0);
    if (!A.muted) A.music.start();
    A.play('tap');
    showQuestion();
  }

  function buildLadder() {
    $('ladder').innerHTML = Array.from({ length: STEPS }, (_, i) => `<li class="${SAFE.includes(i + 1) ? 'safe' : ''}"></li>`).join('');
  }
  function renderLadder() {
    [...$('ladder').children].forEach((li, i) => {
      li.classList.toggle('done', i + 1 < run.step);
      li.classList.toggle('now', i + 1 === run.step);
    });
  }

  function showQuestion() {
    const q = run.qs[run.step - 1];
    run.q = q;
    run.order = shuffle([0, 1, 2, 3]);     // display order of the option indexes; 0 is the right one
    run.removed = new Set();
    run.market = null;
    run.answered = false;
    $('stake-step').textContent = `${E.t('step')} ${run.step}/15 · ${E.t('forPrize')}`;
    $('stake-prize').textContent = money(prize(run.step));
    $('hint').hidden = true;
    run.hintShown = false;
    renderLadder();
    renderQuestion();
    renderTools();
    A.music.setIntensity((run.step - 1) / (STEPS - 1));
    if (run.step === 11) { A.play('sting'); E.toast('⚠️ ' + E.t('stingTop'), 2200); }
    E.react($('duro-play'), 'hop');
    startTimer();
  }

  function renderQuestion() {
    const q = run.q;
    $('q-cat').textContent = E.t(CATS[q.cat]);
    $('q-text').textContent = E.t(q.q);
    const letters = 'ABCD';
    $('answers').innerHTML = run.order.map((oi, pos) => {
      const gone = run.removed.has(oi) ? ' gone' : '';
      const pct = run.market ? `<span class="pct">${run.market[oi]}%</span>` : '<span></span>';
      const fillStyle = run.market ? ` style="--mkt:${run.market[oi]}%"` : '';
      return `<button type="button" class="ans${gone}${run.market ? ' voted' : ''}" data-oi="${oi}"${fillStyle}><span class="k">${letters[pos]}</span><span>${E.t(q.options[oi])}</span>${pct}</button>`;
    }).join('');
    $('answers').classList.toggle('locked', run.answered);
  }

  function renderTools() {
    $('ll-5050').disabled = !run.lifelines.fifty || run.answered;
    $('ll-duro').disabled = !run.lifelines.duro || run.answered;
    $('ll-market').disabled = !run.lifelines.market || run.answered;
    const canCash = run.step > 1 && !run.answered;
    $('cash-btn').disabled = !canCash;
    $('cash-btn').textContent = `💰 ${E.t('cashOut')} ${money(prize(run.step - 1))}`;
  }

  // ---------- timer ----------
  function startTimer() {
    stopTimer();
    $('timer').hidden = !run.timed;
    if (!run.timed) return;
    const total = timeFor(run.step) * 1000;
    deadline = performance.now() + total;
    lastSecond = null;
    $('timer').classList.remove('low');
    const tick = () => {
      const left = Math.max(0, deadline - performance.now());
      const secs = Math.ceil(left / 1000);
      $('timer-fill').style.transform = `scaleX(${left / total})`;
      $('timer-num').textContent = secs + ' s';
      const low = secs <= 10;
      $('timer').classList.toggle('low', low);
      if (low !== A.music.danger) A.music.setDanger(low);
      if (secs !== lastSecond) { if (low && secs > 0 && lastSecond !== null) A.play('second'); lastSecond = secs; }
      if (left <= 0) timeUp();
    };
    // A plain interval (not animation frames): it keeps counting when the page is not being drawn.
    timerId = setInterval(tick, 100);
    tick();
  }
  function stopTimer() {
    clearInterval(timerId); timerId = 0;
    A.music.setDanger(false);
  }
  function timeUp() {
    stopTimer();
    if (run.answered) return;
    run.answered = true;
    $('hint').hidden = true;
    A.play('timeout');
    E.react($('duro-play'), 'wobble');
    revealAnswers(null);
    setTimeout(() => openReveal(false, true), 900);
  }

  // ---------- answering ----------
  $('answers').addEventListener('click', (e) => {
    const b = e.target.closest('.ans');
    if (!b || run.answered) return;
    run.answered = true;
    stopTimer();
    renderTools();
    $('hint').hidden = true;
    const oi = +b.dataset.oi;
    b.classList.add('picked');
    $('answers').classList.add('locked');
    A.play('lock');
    A.duck(true);
    setTimeout(() => {           // a beat of suspense before the verdict
      const ok = oi === 0;
      revealAnswers(oi);
      A.play(ok ? 'right' : 'wrong');
      E.react($('duro-play'), ok ? 'hop' : 'wobble');
      setTimeout(() => openReveal(ok, false), 700);
    }, 1100);
  });

  function revealAnswers(pickedOi) {
    [...$('answers').children].forEach((b) => {
      const oi = +b.dataset.oi;
      b.classList.remove('picked');
      if (oi === 0) b.classList.add('right');
      else if (oi === pickedOi) b.classList.add('wrong');
    });
  }

  function openReveal(ok, timedOut) {
    const q = run.q;
    if (ok) run.banked = prize(run.step);
    const title = $('reveal-title');
    title.className = 'reveal-title ' + (ok ? 'ok' : 'ko');
    title.textContent = ok ? `✓ ${E.t('right')} ${money(prize(run.step))}` : `✗ ${E.t(timedOut ? 'timeUp' : 'wrong')}`;
    $('reveal-why').textContent = (ok ? '' : `${E.t('rightWas')}: «${E.t(q.options[0])}». `) + E.t(q.why);
    $('reveal-tag').textContent = `${q.src} · ${E.t(q.topic)}`;
    const last = !ok || run.step === STEPS;
    $('next-btn').textContent = E.t(last ? 'seeResult' : 'next');
    run.revealOk = ok;
    $('reveal').hidden = false;
    $('next-btn').focus({ preventScroll: true });
  }

  $('next-btn').addEventListener('click', () => {
    if ($('reveal').hidden || !run) return;
    $('reveal').hidden = true;
    A.duck(false);
    if (!run.revealOk) return endRun('fall');
    if (run.step === STEPS) return endRun('win');
    run.step++;
    run.hintShown = false;
    showQuestion();
  });

  // ---------- lifelines ----------
  $('ll-5050').addEventListener('click', () => {
    if (!run.lifelines.fifty || run.answered) return;
    run.lifelines.fifty = false;
    const wrong = shuffle([1, 2, 3].filter((i) => !run.removed.has(i))).slice(0, 2);
    wrong.forEach((i) => run.removed.add(i));
    if (run.market) wrong.forEach((i) => { run.market[i] = 0; });
    A.play('lifeline');
    renderQuestion(); renderTools();
  });

  $('ll-duro').addEventListener('click', () => {
    if (!run.lifelines.duro || run.answered) return;
    run.lifelines.duro = false;
    run.hintShown = true;
    A.play('lifeline');
    E.react($('duro-play'), 'flip');
    showHint();
    renderTools();
  });
  // Duro's hint floats in a speech bubble over the screen (no layout space); tap it to close.
  function showHint() {
    const h = $('hint');
    h.textContent = '';
    const b = document.createElement('b'); b.textContent = `🪙 ${E.t('duroSays')} `;
    const x = document.createElement('span'); x.className = 'x'; x.textContent = '✕';
    h.append(b, E.t(run.q.hint), x);
    h.hidden = false;
  }
  $('hint').addEventListener('click', () => { $('hint').hidden = true; });

  $('ll-market').addEventListener('click', () => {
    if (!run.lifelines.market || run.answered) return;
    run.lifelines.market = false;
    run.market = marketVote(tierOf(run.step));
    A.play('lifeline');
    renderQuestion(); renderTools();
    E.toast('📊 ' + E.t('marketSays'), 3000);
  });

  // The crowd's favourite is the right answer with a probability that falls with difficulty.
  function marketVote(tier) {
    const live = [0, 1, 2, 3].filter((i) => !run.removed.has(i));
    const crowdRight = Math.random() < MARKET_RIGHT[tier];
    const fav = crowdRight ? 0 : shuffle(live.filter((i) => i !== 0))[0];
    const w = {};
    live.forEach((i) => { w[i] = 5 + Math.random() * 20; });
    w[fav] += 30 + Math.random() * 25;
    const sum = live.reduce((s, i) => s + w[i], 0);
    const res = { 0: 0, 1: 0, 2: 0, 3: 0 };
    live.forEach((i) => { res[i] = Math.round((w[i] / sum) * 100); });
    const diff = 100 - live.reduce((s, i) => s + res[i], 0);
    res[fav] += diff;          // make it add up to exactly 100
    return res;
  }

  // ---------- cash out / quit ----------
  $('cash-btn').addEventListener('click', () => {
    if (run.step <= 1 || run.answered) return;
    run.answered = true;
    stopTimer();
    run.banked = prize(run.step - 1);
    A.play('cash');
    revealAnswers(null);       // show what the answer was, for learning
    setTimeout(() => endRun('cash'), 1400);
  });

  $('quit-btn').addEventListener('click', () => $('quit-sheet').showModal());
  $('quit-no').addEventListener('click', () => $('quit-sheet').close());
  $('quit-yes').addEventListener('click', () => {
    $('quit-sheet').close();
    stopTimer();
    $('reveal').hidden = true;
    A.music.stop();
    run = null;
    show('s-start');
  });

  // ---------- end ----------
  function endRun(kind) {
    stopTimer();
    A.music.stop();
    const reached = kind === 'win' ? STEPS : kind === 'cash' ? run.step - 1 : run.step;
    if (kind === 'fall') run.banked = SAFE.filter((s) => s < run.step).reduce((m, s) => Math.max(m, prize(s)), 0);
    run.kind = kind; run.reached = reached;
    $('end-kicker').textContent = E.t(kind === 'win' ? 'kWin' : kind === 'cash' ? 'kCash' : 'kFall');
    $('end-prize').textContent = money(run.banked);
    const sub = kind === 'win' ? E.t('subWin')
      : kind === 'cash' ? fill('subCash', { n: reached })
      : fill(run.banked ? 'subFall' : 'subZero', { n: reached });
    $('end-sub').textContent = sub;
    $('name-in').value = E.store.get('quiz.name', '');
    $('unranked').hidden = run.timed;
    run.saved = false;
    show('s-end');
    setTimeout(() => {
      if (kind === 'win') { A.play('win'); E.react($('duro-end'), 'flip'); }
      else if (kind === 'cash') { E.react($('duro-end'), 'hop'); }
      else { A.play('wrong'); E.react($('duro-end'), 'wobble'); }
    }, 250);
  }

  // ---------- ranking (this device) ----------
  const scores = () => E.store.get('quiz.scores', []);
  function saveScore(name) {
    const list = scores();
    const entry = { name, prize: run.banked, step: run.reached, kind: run.kind, date: new Date().toISOString().slice(0, 10), id: Date.now() };
    list.push(entry);
    list.sort((a, b) => b.prize - a.prize || b.step - a.step || a.id - b.id);
    E.store.set('quiz.scores', list.slice(0, 10));
    return entry.id;
  }
  let lastSavedId = null;
  function openRanking() {
    const list = scores();
    $('rank-list').innerHTML = list.length
      ? list.map((s) => `<li class="${s.id === lastSavedId ? 'me' : ''}"><span class="who"></span><span class="amt">${money(s.prize)}</span></li>`).join('')
      : `<li class="rank-empty" style="list-style:none">${E.t('rankEmpty')}</li>`;
    if (list.length) {
      [...$('rank-list').children].forEach((li, i) => {
        const s = list[i], who = li.querySelector('.who');
        who.textContent = s.name;                        // names are user text: never innerHTML
        const small = document.createElement('small');
        small.textContent = `${E.t('step')} ${s.step}/15 · ${new Date(s.date + 'T12:00').toLocaleDateString(E.lang)}`;
        who.append(small);
      });
    }
    $('rank-sheet').showModal();
  }
  $('rank-close').addEventListener('click', () => $('rank-sheet').close());
  $('rank-sheet').addEventListener('click', (e) => { if (e.target === $('rank-sheet')) $('rank-sheet').close(); });

  // ---------- save & share ----------
  $('name-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = $('name-in').value.trim().replace(/\s+/g, ' ').slice(0, 16);
    if (!name) return;
    E.store.set('quiz.name', name);
    if (run.timed && !run.saved) { lastSavedId = saveScore(name); run.saved = true; E.toast('🏆 ' + E.t('saved')); }
    await share(name);
  });

  function shareURL(name) {
    const u = new URL('./', location.href);
    u.search = new URLSearchParams({ n: name, p: run.banked, s: run.reached }).toString();
    return u.toString();
  }

  async function share(name) {
    const url = shareURL(name);
    const text = fill('shareText', { n: name, p: money(run.banked), s: run.reached });
    let file = null;
    try { file = await cardFile(name); } catch { /* fall back to text */ }
    try {
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], text: `${text} ${url}` });
        return;
      }
      if (navigator.share) { await navigator.share({ text, url }); return; }
    } catch (err) { if (err && err.name === 'AbortError') return; }
    // Desktop fallback: download the card and copy the link
    if (file) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(file); a.download = file.name; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    }
    try { await navigator.clipboard.writeText(`${text} ${url}`); E.toast('🔗 ' + E.t('copied')); } catch { /* no clipboard */ }
  }

  // Share card: 1080×1350, paper & ink, Duro, name, prize, step.
  async function cardFile(name) {
    const W = 1080, H = 1350, c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    await document.fonts.ready;
    g.fillStyle = '#f5ecd9'; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(214,195,156,.55)'; g.lineWidth = 2;
    for (let y = 62; y < H; y += 64) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
    g.strokeStyle = '#241c12'; g.lineWidth = 8; g.strokeRect(40, 40, W - 80, H - 80);
    const img = await svgImage(E.mascotSVG(run.kind === 'fall' ? 'idle' : 'happy'));
    g.drawImage(img, W / 2 - 210, 120, 420, 462);
    g.fillStyle = '#241c12'; g.textAlign = 'center';
    g.font = '800 64px Fraunces, Georgia, serif';
    g.fillText(E.t('title'), W / 2, 680);
    g.font = '700 46px Inter, system-ui, sans-serif'; g.fillStyle = '#5b4a35';
    g.fillText(name, W / 2, 770);
    g.fillStyle = '#241c12'; g.font = '800 140px Fraunces, Georgia, serif';
    g.fillText(money(run.banked), W / 2, 930);
    g.font = '600 40px Inter, system-ui, sans-serif'; g.fillStyle = '#5b4a35';
    g.fillText(`${E.t('step')} ${run.reached}/15`, W / 2, 1000);
    g.save(); g.translate(W / 2, 1140); g.rotate(-0.05);
    g.strokeStyle = '#9b2d20'; g.lineWidth = 6; g.fillStyle = '#9b2d20';
    g.font = '800 54px Fraunces, Georgia, serif';
    const label = E.lang === 'en' ? 'BEAT ME?' : E.lang === 'ca' ? 'EM SUPERES?' : '¿ME SUPERAS?';
    const tw = g.measureText(label).width + 60;
    g.strokeRect(-tw / 2, -50, tw, 80); g.fillText(label, 0, 10); g.restore();
    const blob = await new Promise((r) => c.toBlob(r, 'image/png'));
    return new File([blob], 'te-lo-llevas.png', { type: 'image/png' });
  }
  function svgImage(svg) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res(img); img.onerror = rej;
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" '));
    });
  }

  // ---------- language change mid-run ----------
  E.onLang(() => {
    renderChallenge();
    if (run && !$('s-play').hidden) {
      $('stake-step').textContent = `${E.t('step')} ${run.step}/15 · ${E.t('forPrize')}`;
      $('stake-prize').textContent = money(prize(run.step));
      const answered = run.answered;
      renderQuestion(); renderTools();
      if (answered) [...$('answers').children].forEach((b) => { if (+b.dataset.oi === 0) b.classList.add('right'); });
    }
  });

  // Debug hook for automated play-tests (read-only view + the right option's index).
  window.QuizDebug = {
    get run() { return run; }, bankSize: () => BANK.length, pickQuestions, bank: BANK,
    // Render question q in its worst-case state (hint + market vote shown), for layout tests.
    render(q, step = 15) {
      run.step = step; run.q = q; run.order = [0, 1, 2, 3]; run.removed = new Set(); run.answered = false;
      run.hintShown = false; run.market = { 0: 40, 1: 30, 2: 20, 3: 10 };
      $('stake-step').textContent = `${E.t('step')} ${step}/15 · ${E.t('forPrize')}`;
      $('stake-prize').textContent = money(prize(step));
      renderQuestion(); renderTools();
    },
  };
})();
