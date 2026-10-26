import Reveal from '@/src/components/ui/Reveal';

interface PageHeaderProps {
  title: string;
  italic?: string;
  description: string;
}

/* Navy banner at the top of every inner page */
export default function PageHeader({ title, italic, description }: PageHeaderProps) {
  return (
    <section className="relative bg-navy text-white pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />

      <Reveal className="relative z-10 max-w-7xl mx-auto lg:px-10">
        <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight mb-5">
          {title}
          {italic && (
            <>
              {' '}
              <span className="italic text-white/90">{italic}</span>
            </>
          )}
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">{description}</p>
      </Reveal>
    </section>
  );
}
