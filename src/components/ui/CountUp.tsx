'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  value: string; // e.g. "1,200+", "95%"
  duration?: number;
  delay?: number;
}

/* Counts from 0 up to the number in `value` the first time it scrolls into view.
   The real value is rendered on the server, so it still reads correctly without JS. */
export default function CountUp({ value, duration = 1.6, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();

  const match = value.match(/^(\D*)([\d,]+)(.*)$/);

  useEffect(() => {
    if (!inView || reduceMotion || !match || !ref.current) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ''));
    const node = ref.current;
    const format = (n: number) => prefix + Math.round(n).toLocaleString('en-US') + suffix;

    node.textContent = format(0);
    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: n => { node.textContent = format(n); },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
