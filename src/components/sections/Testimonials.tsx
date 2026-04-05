import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

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
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQBu-L8wvFr7YE9dmPrNkFIlycKiFhvq0ckkAon1jjlblp3VDev2q9KOjh6jcnD_l0z3ip2biTyubeJNfDUJ7RpvDdPg9-wmXl6bWN8ChNFXDpSrX5QHpZG5oqfmQE6Pz4cIN7a-2B0gpVVD0WPKihz5L98saBTf0-RJqYHd4gFQGnPRapjs5iWyRKqi-CYBb-7QmmRoNyISbgN6S--iJg6vo0joqwx6ETJ0wcfc5MPusIjfA_YO50WuwuK2Ft6wjFarniDa3VmR8",
      borderColor: "border-primary/20"
    },
    {
      name: "Marcus Thorne",
      role: "Founder @ ArchiSoft",
      text: '"The level of precision in the UI Alex delivered was exactly what we were looking for. He is truly a master of the craft."',
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAThoMLuNWpNy5K5PfL82MangqUxNDu5dVOYQ_tbShrlHGHkzBGsmRMm8GX7KSKPovPlcWtLjYr7fMMwWuCQd4IZq7HOobruds2BqOdp9XhIOzwMvaMHnRQ4vxtXdEVaG7KUbKFEd8aqUW33KYnO2O-USyL5HctOcQq3lybK3zQ_btwBIXGNibtae1YExhyWv5aUjNsJ5FWv3e-QPC0r7PwJpukBdBAf7VrOoBXkapW77r-9rkSMDQP7ECDUeTrFtVs842wRao3iks",
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
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Next Testimonial"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
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
