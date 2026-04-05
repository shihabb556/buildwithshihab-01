import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO @ TechFlow",
      text: '"Alex didn\'t just build our app; he built a foundation for our entire future growth. His technical depth is unparalleled."',
      img: "/images/client/client-1.png",
      borderColor: "border-primary/20"
    },
    {
      name: "Marcus Thorne",
      role: "Founder @ ArchiSoft",
      text: '"The level of precision in the UI Alex delivered was exactly what we were looking for. He is truly a master of the craft."',
      img: "/images/client/client-2.png",
      borderColor: "border-tertiary/20"
    }
  ];

  return (
    <section className="py-24 bg-surface" id="testimonials">
      <div className="max-w-7xl mx-auto px-8 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3">
            <h2 className="font-headline text-4xl font-bold mb-6">
              {t('testimonials.titlePrefix')} <span className="text-tertiary">{t('testimonials.titleHighlight')}</span>
            </h2>
            <p className="text-slate-400 mb-8">{t('testimonials.description')}</p>
            <div className="flex gap-4">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Next Testimonial"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollRef}
            className="w-full md:w-2/3 flex gap-8 overflow-x-auto no-scrollbar pb-10 scroll-smooth snap-x snap-mandatory"
          >
            {testimonials.map((item, i) => (
              <div key={i} className={`min-w-[400px] snap-center glass p-10 rounded-3xl border ${item.borderColor}`}>
                <div className="flex items-center gap-4 mb-6">
                  <img alt={item.name} className="w-12 h-12 rounded-full object-cover" src={item.img} />
                  <div>
                    <h5 className="font-bold">{item.name}</h5>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">{item.text}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
