/* --------------------------------------------------------------------------
   Nexora Studio — quiet sound for the valley (off until the visitor turns it on).
   Everything is synthesised with Web Audio: a soft wind bed (filtered noise
   with a slow swell) and short, low UI tones. No audio files are loaded.
   -------------------------------------------------------------------------- */

let ctx = null;
let master = null;
let wind = null;
let lastBlip = 0;

function build() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return false;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  // Two seconds of brown-ish noise, looped.
  const length = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < length; i += 1) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    data[i] = last * 3.2;
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  const band = ctx.createBiquadFilter();
  band.type = 'bandpass';
  band.frequency.value = 420;
  band.Q.value = 0.6;
  const level = ctx.createGain();
  level.gain.value = 0.22;
  // A slow swell, like gusts coming down from the mountains.
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.07;
  const lfoDepth = ctx.createGain();
  lfoDepth.gain.value = 220;
  lfo.connect(lfoDepth).connect(band.frequency);
  const lfo2 = ctx.createOscillator();
  lfo2.frequency.value = 0.045;
  const lfo2Depth = ctx.createGain();
  lfo2Depth.gain.value = 0.09;
  lfo2.connect(lfo2Depth).connect(level.gain);
  source.connect(band).connect(level).connect(master);
  source.start();
  lfo.start();
  lfo2.start();
  wind = { source, lfo, lfo2 };
  return true;
}

export async function start() {
  if (!ctx && !build()) return;
  if (ctx.state === 'suspended') await ctx.resume();
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setTargetAtTime(0.5, ctx.currentTime, 0.6);
}

export async function stop() {
  if (!ctx) return;
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.setTargetAtTime(0, ctx.currentTime, 0.25);
}

// Short, low tones: hover is barely there, click and screen are a touch brighter.
export function blip(kind = 'hover') {
  if (!ctx || ctx.state !== 'running' || !wind) return;
  const now = ctx.currentTime;
  if (now - lastBlip < 0.06) return;
  lastBlip = now;
  const spec = {
    hover: { f: 660, to: 700, gain: 0.025, dur: 0.12 },
    click: { f: 520, to: 390, gain: 0.05, dur: 0.18 },
    screen: { f: 880, to: 1320, gain: 0.04, dur: 0.32 },
  }[kind] || { f: 600, to: 600, gain: 0.03, dur: 0.15 };
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(spec.f, now);
  osc.frequency.exponentialRampToValueAtTime(spec.to, now + spec.dur);
  const env = ctx.createGain();
  env.gain.setValueAtTime(0, now);
  env.gain.linearRampToValueAtTime(spec.gain, now + 0.012);
  env.gain.exponentialRampToValueAtTime(0.0001, now + spec.dur);
  osc.connect(env).connect(master);
  osc.start(now);
  osc.stop(now + spec.dur + 0.02);
}
