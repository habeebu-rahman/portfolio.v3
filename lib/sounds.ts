let context: AudioContext | null = null;
export function playUiSound(kind: 'click' | 'success' | 'pop' = 'click') {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    context ??= new AudioContextClass();
    if (context.state === 'suspended') void context.resume();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    const tones = kind === 'success' ? [660, 880] : kind === 'pop' ? [520] : [420];
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(tones[0], now);
    if (tones[1]) oscillator.frequency.setValueAtTime(tones[1], now + 0.075);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.055, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.15);
  } catch {
    /* Audio is an optional enhancement; never interrupt navigation. */
  }
}

/* ------------------------------------------------------------------
 * Shared sound on/off state.
 * Every <SoundToggle /> (header, footer, anywhere else) reads from and
 * writes to this one store, so they can never disagree.
 * ------------------------------------------------------------------ */
let soundEnabled = false;
const soundListeners = new Set<() => void>();

export function getSoundEnabled() {
  return soundEnabled;
}

export function subscribeSound(listener: () => void) {
  soundListeners.add(listener);
  return () => {
    soundListeners.delete(listener);
  };
}

export function setSoundEnabled(next: boolean) {
  soundEnabled = next;
  // SoundEffects and the Time Machine button read this attribute.
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.sound = next ? 'on' : 'off';
  }
  soundListeners.forEach((listener) => listener());
}
