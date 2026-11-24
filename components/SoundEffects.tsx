'use client';
import { useEffect } from 'react';
import { playUiSound } from '@/lib/sounds';
export default function SoundEffects() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (document.documentElement.dataset.sound !== 'on') return;
      const target = event.target as HTMLElement | null;
      if (!target?.closest('a,button')) return;
      const el = target.closest('a,button');
      if (el?.classList.contains('sound-toggle')) return;
      playUiSound(el?.classList.contains('button-primary') ? 'pop' : 'click');
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);
  return null;
}
