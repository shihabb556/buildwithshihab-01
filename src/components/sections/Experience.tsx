import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');
  
  // Safe default arrays to avoid crashes if translation logic misses
  const experienceData = Array.isArray(t('experience.items')) ? t('experience.items') : [];
  const filtersList = Array.isArray(t('experience.filtersList')) ? t('experience.filtersList') : ['All', 'Frontend', 'Backend', 'Fullstack'];

  const filteredExperiences = filter === 'All' 
    ? experienceData 
    : experienceData.filter((exp: any) => exp.category === filter);

  return (
    <section className="py-24 bg-surface" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-4">
              {t('experience.titlePrefix')} <span className="text-primary">{t('experience.titleHighlight')}</span>
            </h2>
            <p className="text-slate-400">{t('experience.description')}</p>
          </div>
          
          {/* Filtering Options */}
          <div className="flex flex-wrap gap-4">
            {filtersList.map((f: string) => (
              <button 
                key={f}
                className={`font-bold transition-colors ${filter === f ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-slate-200'}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        
        {/* Experience Cards */}
        <div className="space-y-8">
          {filteredExperiences.map((exp: any, index: number) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component tailored with IntersectionObserver for scroll animations
const ExperienceCard: React.FC<{ experience: any }> = ({ experience }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`glass p-8 rounded-3xl border border-outline-variant/10 shadow-lg group hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(37,99,235,0.25)] hover:border-[#2563eb]/50 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ backgroundColor: '#0b132690' }}
    >
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-8">
        <div className="flex gap-6 items-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563eb]/20 to-[#7bd0ff]/20 flex items-center justify-center border border-[#7bd0ff]/20 group-hover:from-[#2563eb]/40 group-hover:to-[#7bd0ff]/40 transition-colors duration-500">
            <span className="material-symbols-outlined text-3xl text-[#7bd0ff] group-hover:scale-110 transition-transform">work</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-headline text-white group-hover:text-[#7bd0ff] transition-colors">{experience.role}</h3>
            <div className="flex items-center gap-2 mt-2 text-slate-400">
              <span className="material-symbols-outlined text-sm">business</span>
              <p className="font-medium tracking-wide">{experience.company}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-[#2563eb]/10 border border-[#2563eb]/30 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest text-[#7bd0ff] w-fit shadow-[0_0_15px_rgba(37,99,235,0.15)]">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          {experience.duration}
        </div>
      </div>
      
      <div className="mb-8 pl-4 border-l-2 border-outline-variant/30 group-hover:border-[#2563eb]/40 transition-colors">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">task_alt</span>
          Key Achievements
        </h4>
        <ul className="space-y-3">
          {experience.achievements?.map((point: string, i: number) => (
            <li key={i} className="text-slate-300 leading-relaxed flex items-start">
              <span className="text-[#2563eb] mr-3 mt-1.5">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">integration_instructions</span>
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {experience.stack?.map((tech: string, i: number) => (
            <span 
              key={i} 
              className="text-xs font-bold uppercase bg-surface-container-highest px-4 py-2 rounded-xl text-[#7bd0ff] border border-[#7bd0ff]/10 hover:border-[#7bd0ff]/50 hover:bg-[#7bd0ff]/10 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

