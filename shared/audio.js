// Generated music and sound effects (Web Audio, no files). Exposed as window.EcoAudio.
//
// Music: "the floor can open at any time". D minor with a Phrygian half-step (D–Eb)
// in the bass, a heartbeat kick, a clock tick, a slow pad that ends every phrase on
// an unresolved A major (dominant), and an arpeggio that climbs with the stakes.
//
//   EcoAudio.music.start()          start (call after a user tap: autoplay rules)
//   EcoAudio.music.stop()
//   EcoAudio.music.setIntensity(x)  0 = step 1 … 1 = step 15: layers, tempo, filter, pitch
//   EcoAudio.music.setDanger(bool)  last seconds of the timer: faster heart, tremolo, high drone
//   EcoAudio.setMuted(bool) / EcoAudio.muted
(() => {
  let ctx = null, master = null, musicBus = null, sfxBus = null, reverb = null, delay = null;
  const MUSIC_LEVEL = 0.7;
  let muted = false;
  try { muted = JSON.parse(localStorage.getItem('eco.muted') || 'false'); } catch { /* private mode */ }

  function init() {
    if (ctx) return ctx;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 4;
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.9;
    master.connect(comp).connect(ctx.destination);
    musicBus = ctx.createGain(); musicBus.gain.value = MUSIC_LEVEL; musicBus.connect(master);
    sfxBus = ctx.createGain(); sfxBus.gain.value = 0.8; sfxBus.connect(master);

    // Reverb: a generated decaying-noise impulse response
    reverb = ctx.createConvolver();
    const len = ctx.sampleRate * 2.6, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.8);
    }
    reverb.buffer = ir;
    const revGain = ctx.createGain(); revGain.gain.value = 0.35;
    reverb.connect(revGain).connect(musicBus);

    // Dotted-eighth feedback delay for the arpeggio
    delay = ctx.createDelay(1);
    const fb = ctx.createGain(); fb.gain.value = 0.32;
    const dl = ctx.createBiquadFilter(); dl.type = 'lowpass'; dl.frequency.value = 2600;
    delay.connect(dl).connect(fb).connect(delay);
    const dOut = ctx.createGain(); dOut.gain.value = 0.3;
    dl.connect(dOut).connect(musicBus);
    return ctx;
  }

  const hz = (midi) => 440 * Math.pow(2, (midi - 69) / 12);
  function send(node, dry = 1, wet = 0, echo = 0) {
    const g = ctx.createGain(); g.gain.value = dry; node.connect(g).connect(musicBus);
    if (wet) { const w = ctx.createGain(); w.gain.value = wet; node.connect(w).connect(reverb); }
    if (echo) { const e = ctx.createGain(); e.gain.value = echo; node.connect(e).connect(delay); }
  }

  // ---------- instruments ----------
  function bass(t, midi, dur, cutoff, vel = 0.22) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = 'sawtooth'; o2.type = 'sine';
    o.frequency.value = hz(midi); o2.frequency.value = hz(midi - 12);
    f.type = 'lowpass'; f.Q.value = 7;
    f.frequency.setValueAtTime(cutoff * 2.2, t);
    f.frequency.exponentialRampToValueAtTime(cutoff * 0.6, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vel, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.95);
    o.connect(f); o2.connect(f); f.connect(g);
    send(g, 1, 0.05);
    o.start(t); o2.start(t); o.stop(t + dur); o2.stop(t + dur);
  }

  function pad(t, notes, dur, bright, vel = 0.07) {
    const f = ctx.createBiquadFilter(), g = ctx.createGain();
    f.type = 'lowpass'; f.Q.value = 2;
    f.frequency.setValueAtTime(300 + bright * 300, t);
    f.frequency.linearRampToValueAtTime(700 + bright * 1900, t + dur * 0.7); // swell
    f.frequency.linearRampToValueAtTime(400 + bright * 400, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vel, t + dur * 0.35);
    g.gain.linearRampToValueAtTime(0.0001, t + dur + 0.4);
    f.connect(g); send(g, 0.8, 0.7);
    notes.forEach((n) => [-7, 0, 7].forEach((cents) => {
      const o = ctx.createOscillator();
      o.type = 'sawtooth'; o.frequency.value = hz(n); o.detune.value = cents;
      o.connect(f); o.start(t); o.stop(t + dur + 0.5);
    }));
  }

  function pluck(t, midi, vel = 0.09) {
    const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = 'triangle'; o.frequency.value = hz(midi);
    f.type = 'bandpass'; f.frequency.value = hz(midi) * 2; f.Q.value = 0.8;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vel, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    o.connect(f).connect(g); send(g, 0.9, 0.25, 0.8);
    o.start(t); o.stop(t + 0.4);
  }

  function heart(t, vel = 1) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(110, t);
    o.frequency.exponentialRampToValueAtTime(38, t + 0.18);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.6 * vel, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(g); send(g, 1, 0.08);
    o.start(t); o.stop(t + 0.32);
    // the knock: a short triangle thump around 200 Hz, audible on small speakers
    const k = ctx.createOscillator(), kg = ctx.createGain();
    k.type = 'triangle';
    k.frequency.setValueAtTime(240, t);
    k.frequency.exponentialRampToValueAtTime(110, t + 0.09);
    kg.gain.setValueAtTime(0.0001, t);
    kg.gain.exponentialRampToValueAtTime(0.32 * vel, t + 0.004);
    kg.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    k.connect(kg); send(kg, 1, 0.1);
    k.start(t); k.stop(t + 0.14);
  }

  let noiseBuf = null;
  function noise() {
    if (noiseBuf) return noiseBuf;
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return noiseBuf;
  }
  function tick(t, vel = 0.05, tone = 7000) {
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noise();
    f.type = 'bandpass'; f.frequency.value = tone; f.Q.value = 1.8;
    g.gain.setValueAtTime(vel, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
    s.connect(f).connect(g); send(g, 1, 0.1);
    s.start(t); s.stop(t + 0.05);
  }

  // A thin high drone that only sounds in danger: two close sines beating against each other.
  let drone = null;
  function setDrone(on) {
    if (!ctx) return;
    const t = ctx.currentTime;
    if (on && !drone) {
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.035, t + 1.2);
      const a = ctx.createOscillator(), b = ctx.createOscillator();
      a.type = b.type = 'sine'; a.frequency.value = hz(86); b.frequency.value = hz(86) * 1.012;
      a.connect(g); b.connect(g); send(g, 1, 0.5);
      a.start(); b.start();
      drone = { g, a, b };
    } else if (!on && drone) {
      const d = drone; drone = null;
      d.g.gain.cancelScheduledValues(t); d.g.gain.setValueAtTime(d.g.gain.value, t); d.g.gain.linearRampToValueAtTime(0.0001, t + 0.6);
      d.a.stop(t + 0.7); d.b.stop(t + 0.7);
    }
  }

  // ---------- the piece ----------
  // 8 bars in D minor, 16 steps (sixteenths) per bar. Chords every 2 bars:
  // Dm – Bb – Gm – A (dominant, never resolved: the next loop starts again on Dm).
  const CHORDS = [
    { root: 38, pad: [62, 65, 69], arp: [62, 65, 69, 74] },        // Dm
    { root: 34, pad: [58, 62, 65], arp: [58, 62, 65, 70] },        // Bb
    { root: 31, pad: [55, 58, 62], arp: [55, 58, 62, 67] },        // Gm
    { root: 33, pad: [57, 61, 64], arp: [57, 61, 64, 69] },        // A (C#: leading tone)
  ];
  // Bass ostinato in sixteenths: root pulses with a Phrygian half-step lean (+1) on the offbeats.
  const BASS = [0, null, 0, null, 0, null, 1, null, 0, null, 0, null, 0, 1, 0, null];

  let playing = false, timer = null, nextTime = 0, step = 0;
  let intensity = 0, danger = false;

  function bpm() { return 92 + intensity * 22 + (danger ? 10 : 0); }

  function scheduleStep(s, t) {
    const sixteenth = 60 / bpm() / 4;
    const bar = Math.floor(s / 16) % 8, pos = s % 16;
    const chord = CHORDS[Math.floor(bar / 2)];
    const cutoff = 220 + intensity * 500 + (danger ? 300 : 0);

    // Pad: one long swell per chord (every 2 bars)
    if (pos === 0 && bar % 2 === 0) pad(t, chord.pad, sixteenth * 32, intensity, 0.05 + intensity * 0.05);

    // Bass ostinato (always)
    const b = BASS[pos];
    if (b !== null) bass(t, chord.root + 12 + b, sixteenth * 1.8, cutoff, 0.16 + intensity * 0.12);

    // Clock tick: quarters at rest, eighths from mid stakes, sixteenths in danger
    const tickEvery = danger ? 1 : intensity > 0.45 ? 2 : 4;
    if (pos % tickEvery === 0) tick(t, (pos % 4 === 0 ? 0.16 : 0.09) * (1 + intensity * 0.6), pos % 4 === 0 ? 4200 : 6200);

    // Heartbeat (lub-dub) from low-mid stakes; twice a bar in danger
    if (intensity > 0.2 || danger) {
      const beats = danger ? [0, 8] : [0];
      if (beats.includes(pos)) { heart(t, 1); heart(t + sixteenth * 1.1, 0.6); }
    }

    // Arpeggio from mid stakes, climbing an octave near the top
    if (intensity > 0.4) {
      const every = intensity > 0.75 || danger ? 1 : 2;
      if (pos % every === 0) {
        const n = chord.arp[(pos / every) % chord.arp.length];
        pluck(t, n + (intensity > 0.85 ? 12 : 0), 0.06 + intensity * 0.09);
      }
    }

    // Danger: tremolo stab on the chord's top note every beat
    if (danger && pos % 4 === 2) pluck(t, chord.pad[2] + 12, 0.05);
  }

  function scheduler() {
    // If the timer was throttled (busy phone, background tab), skip the missed steps
    // instead of firing them all at once.
    if (nextTime < ctx.currentTime - 0.05) nextTime = ctx.currentTime + 0.05;
    while (nextTime < ctx.currentTime + 0.12) {
      scheduleStep(step, nextTime);
      nextTime += 60 / bpm() / 4;
      step = (step + 1) % (16 * 8);
    }
  }

  const music = {
    start() {
      init();
      if (ctx.state === 'suspended') ctx.resume();
      if (playing) return;
      playing = true; step = 0; nextTime = ctx.currentTime + 0.08;
      musicBus.gain.cancelScheduledValues(ctx.currentTime);
      musicBus.gain.setValueAtTime(0.0001, ctx.currentTime);
      musicBus.gain.linearRampToValueAtTime(MUSIC_LEVEL, ctx.currentTime + 1.5);
      timer = setInterval(scheduler, 25);
      if (danger) setDrone(true);
    },
    stop() {
      if (!playing) return;
      playing = false; clearInterval(timer);
      const t = ctx.currentTime;
      musicBus.gain.cancelScheduledValues(t);
      musicBus.gain.setValueAtTime(musicBus.gain.value, t);
      musicBus.gain.linearRampToValueAtTime(0.0001, t + 0.8);
      setDrone(false);
    },
    setIntensity(x) { intensity = Math.max(0, Math.min(1, x)); },
    setDanger(on) { danger = !!on; if (playing) setDrone(danger); },
    get playing() { return playing; },
    get intensity() { return intensity; },
    get danger() { return danger; },
  };

  // ---------- sound effects ----------
  function tone(t, freq, dur, { type = 'sine', vel = 0.2, to = null, bus = null, wet = 0.15 } = {}) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vel, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(bus || sfxBus);
    if (wet) { const w = ctx.createGain(); w.gain.value = wet; g.connect(w).connect(reverb); }
    o.start(t); o.stop(t + dur + 0.02);
  }
  function noiseHit(t, dur, freq, vel, type = 'bandpass') {
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noise(); f.type = type; f.frequency.value = freq; f.Q.value = 1.2;
    g.gain.setValueAtTime(vel, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(sfxBus); s.start(t); s.stop(t + dur + 0.02);
  }
  const SFX = {
    tap(t) { tone(t, 900, 0.05, { type: 'triangle', vel: 0.12, wet: 0 }); },
    lock(t) { tone(t, 220, 0.25, { type: 'square', vel: 0.08, to: 180 }); tone(t, 440, 0.25, { vel: 0.1, to: 360 }); },
    right(t) { [72, 76, 79, 84].forEach((m, i) => tone(t + i * 0.08, hz(m), 0.35, { type: 'triangle', vel: 0.16 })); },
    wrong(t) { tone(t, hz(50), 0.6, { type: 'sawtooth', vel: 0.12, to: hz(43) }); tone(t + 0.02, hz(51), 0.6, { type: 'sawtooth', vel: 0.1, to: hz(44) }); },
    timeout(t) { [0, 0.18, 0.36].forEach((d) => tone(t + d, 880, 0.12, { type: 'square', vel: 0.08, wet: 0 })); SFX.wrong(t + 0.5); },
    second(t) { tone(t, 1320, 0.06, { type: 'square', vel: 0.06, wet: 0 }); },
    lifeline(t) { noiseHit(t, 0.35, 1200, 0.25); tone(t, 300, 0.35, { vel: 0.08, to: 1200 }); },
    cash(t) { // cash register: drawer bell + coins
      tone(t, 2637, 0.6, { vel: 0.12 }); tone(t + 0.01, 3520, 0.5, { vel: 0.06 });
      for (let i = 0; i < 6; i++) tone(t + 0.12 + i * 0.05, 1800 + Math.random() * 1600, 0.12, { type: 'triangle', vel: 0.05, wet: 0.05 });
      noiseHit(t + 0.05, 0.18, 3000, 0.12);
    },
    sting(t) { tone(t, hz(38), 1.4, { type: 'sawtooth', vel: 0.12, to: hz(37) }); tone(t, hz(62), 1.2, { type: 'triangle', vel: 0.08 }); },
    win(t) {
      [[60, 64, 67], [62, 65, 69], [64, 67, 72], [67, 72, 76]].forEach((ch, i) =>
        ch.forEach((m) => tone(t + i * 0.22, hz(m + 12), i === 3 ? 1.4 : 0.3, { type: 'triangle', vel: 0.09 })));
    },
  };

  // Leaving the app pauses all sound; coming back resumes the music where it was.
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return;
    if (document.hidden) ctx.suspend().catch(() => {});
    else if (playing) ctx.resume().catch(() => {});
  });

  window.EcoAudio = {
    music,
    get muted() { return muted; },
    setMuted(m) {
      muted = !!m;
      try { localStorage.setItem('eco.muted', JSON.stringify(muted)); } catch { /* private mode */ }
      if (master) master.gain.setTargetAtTime(muted ? 0 : 0.9, ctx.currentTime, 0.05);
    },
    // play('right' | 'wrong' | 'cash' | 'timeout' | 'second' | 'tap' | 'lock' | 'lifeline' | 'sting' | 'win')
    play(name) {
      if (!SFX[name]) return;
      init();
      if (ctx.state === 'suspended') ctx.resume();
      SFX[name](ctx.currentTime + 0.01);
    },
    // Dip the music under an important moment (e.g. the answer reveal).
    duck(on) {
      if (!ctx || !playing) return;
      const t = ctx.currentTime;
      musicBus.gain.cancelScheduledValues(t);
      musicBus.gain.setValueAtTime(musicBus.gain.value, t);
      musicBus.gain.linearRampToValueAtTime(on ? MUSIC_LEVEL * 0.35 : MUSIC_LEVEL, t + 0.25);
    },
    _ctx: () => init(), _sfxBus: () => (init(), sfxBus),
    // Debug: an analyser on the final mix, to measure levels from the console.
    _tap() { init(); const a = ctx.createAnalyser(); a.fftSize = 2048; master.connect(a); return a; },
  };
})();
