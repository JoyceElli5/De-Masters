'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mortarboard01Icon } from '@hugeicons/core-free-icons';

const title = 'DE-MASTERS';
const subtitle = 'ACADEMY';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismiss = () => {
      window.setTimeout(() => setVisible(false), 2100);
    };

    if (document.readyState === 'complete') {
      dismiss();
      return;
    }

    window.addEventListener('load', dismiss, { once: true });
    return () => window.removeEventListener('load', dismiss);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
          className="fixed inset-0 z-[100] bg-brand-blue text-white flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center px-6"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
              className="mb-5 text-brand-red"
            >
              <HugeiconsIcon icon={Mortarboard01Icon} size={56} />
            </motion.div>

            <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 text-3xl md:text-5xl font-black tracking-[0.18em]">
              {title.split('').map((char, index) => (
                <motion.span
                  key={`title-${char}-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.28 }}
                  className={char === '-' ? 'px-1' : ''}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap justify-center gap-x-1 text-sm md:text-base tracking-[0.5em] text-white/70 font-semibold">
              {subtitle.split('').map((char, index) => (
                <motion.span
                  key={`subtitle-${char}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.25 }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
