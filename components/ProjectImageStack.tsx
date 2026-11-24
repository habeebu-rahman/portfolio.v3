
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Images, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProjectScreenshot {
  id: string;
  src: string;
  title: string;
  label: string;
}

interface Props {
  images: ProjectScreenshot[];
}

export default function ProjectImageStack({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-surface)]">
        <Images size={35} className="text-[var(--color-dim)]" />
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          Project screenshots coming soon
        </p>
      </div>
    );
  }

  const orderedImages = [
    ...images.slice(currentIndex),
    ...images.slice(0, currentIndex),
  ];

  const nextImage = () => {
    setCurrentIndex((previous) => (previous + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (previous) => (previous - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full">
      <div className="group relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-raised)] p-7 sm:h-[440px] sm:p-12">

        {/* Background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(var(--color-ink) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Image stack */}
        <div
          className="relative h-full w-full max-w-2xl cursor-pointer"
          onClick={nextImage}
        >
          <AnimatePresence mode="popLayout">
            {orderedImages.map((image, index) => {
              const isTop = index === 0;

              return (
                <motion.div
                  key={image.id}
                  style={{ zIndex: images.length - index }}
                  initial={{
                    scale: 0.94,
                    y: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: isTop ? 1 : 1 - index * 0.035,
                    y: isTop ? 0 : index * -19,
                    opacity: index > 2 ? 0 : 1,
                  }}
                  exit={{
                    y: 65,
                    scale: 0.94,
                    opacity: 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                  className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 bg-[var(--color-surface)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)]"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 700px"
                    priority={isTop}
                    className="object-cover object-center"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

                  <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 text-left sm:p-6">
                    <span className="w-fit rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
                      {image.label}
                    </span>

                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-wide text-white drop-shadow-lg sm:text-2xl">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation arrows and counter - same bottom-right position */}
        <div
          className="absolute bottom-3 right-4 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[10px] text-white/80 backdrop-blur-md"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={previousImage}
            disabled={images.length <= 1}
            aria-label="Show previous project screenshot"
            className="transition hover:scale-110 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={13} />
          </button>

          <span>{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="text-white/40">/</span>
          <span>{String(images.length).padStart(2, '0')}</span>

          <button
            type="button"
            onClick={nextImage}
            disabled={images.length <= 1}
            aria-label="Show next project screenshot"
            className="transition hover:scale-110 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-[var(--color-dim)]">
        Click the image stack or use the arrows to explore the screenshots
      </p>

      {/* Screenshot indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show screenshot ${index + 1}: ${image.title}`}
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === index
                ? 'w-8 bg-[var(--color-accent)]'
                : 'w-2 bg-[var(--color-line)] hover:bg-[var(--color-muted)]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
