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
  let muted = false;
  try { muted = JSON.parse(localStorage.getItem('eco.muted') || 'false'); } catch { /* private mode */ }

  function init() {
    if (ctx) return ctx;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 4;
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.9;
    master.connect(comp).connect(ctx.destination);
    musicBus = ctx.createGain(); musicBus.gain.value = 0.55; musicBus.connect(master);
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
  function bass(t, midi, dur, cutoff) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = 'sawtooth'; o2.type = 'square';
    o.frequency.value = hz(midi); o2.frequency.value = hz(midi - 12);
    f.type = 'lowpass'; f.Q.value = 7;
    f.frequency.setValueAtTime(cutoff * 2.2, t);
    f.frequency.exponentialRampToValueAtTime(cutoff * 0.6, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.22, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.95);
    o.connect(f); o2.connect(f); f.connect(g);
    send(g, 1, 0.05);
    o.start(t); o2.start(t); o.stop(t + dur); o2.stop(t + dur);
  }

  function pad(t, notes, dur, bright) {
    const f = ctx.createBiquadFilter(), g = ctx.createGain();
    f.type = 'lowpass'; f.Q.value = 2;
    f.frequency.setValueAtTime(300 + bright * 300, t);
    f.frequency.linearRampToValueAtTime(700 + bright * 1900, t + dur * 0.7); // swell
    f.frequency.linearRampToValueAtTime(400 + bright * 400, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.07, t + dur * 0.35);
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
    g.gain.exponentialRampToValueAtTime(0.75 * vel, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(g); send(g, 1, 0.08);
    o.start(t); o.stop(t + 0.32);
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
    f.type = 'bandpass'; f.frequency.value = tone; f.Q.value = 6;
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
    if (pos === 0 && bar % 2 === 0) pad(t, chord.pad, sixteenth * 32, intensity);

    // Bass ostinato (always)
    const b = BASS[pos];
    if (b !== null) bass(t, chord.root + 12 + b, sixteenth * 1.8, cutoff);

    // Clock tick: quarters at rest, eighths from mid stakes, sixteenths in danger
    const tickEvery = danger ? 1 : intensity > 0.45 ? 2 : 4;
    if (pos % tickEvery === 0) tick(t, pos % 4 === 0 ? 0.06 : 0.03, pos % 4 === 0 ? 6500 : 8500);

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
        pluck(t, n + (intensity > 0.85 ? 12 : 0), 0.05 + intensity * 0.05);
      }
    }

    // Danger: tremolo stab on the chord's top note every beat
    if (danger && pos % 4 === 2) pluck(t, chord.pad[2] + 12, 0.05);
  }

  function scheduler() {
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
      musicBus.gain.linearRampToValueAtTime(0.55, ctx.currentTime + 1.5);
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

  window.EcoAudio = {
    music,
    get muted() { return muted; },
    setMuted(m) {
      muted = !!m;
      try { localStorage.setItem('eco.muted', JSON.stringify(muted)); } catch { /* private mode */ }
      if (master) master.gain.setTargetAtTime(muted ? 0 : 0.9, ctx.currentTime, 0.05);
    },
    // Sound effects share the context; added with the quiz.
    _ctx: () => init(), _sfxBus: () => (init(), sfxBus),
  };
})();
