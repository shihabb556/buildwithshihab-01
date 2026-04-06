import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Briefcase, Building2, Clock, CheckCircle, Code2, GraduationCap, Library } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const [filter] = useState('All');
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  // Safe default arrays to avoid crashes if translation logic misses
  const experienceData = Array.isArray(t('experience.items')) ? t('experience.items') : [];

  const filteredExperiences = filter === 'All'
    ? experienceData
    : experienceData.filter((exp: any) => exp.category === filter);

  return (
    <section className="py-24 bg-surface" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold mb-4">
              {t('experience.titlePrefix')} <span className="text-primary">{t('experience.titleHighlight')}</span>
            </h2>
            <p className="text-slate-400">{t('experience.description')}</p>
          </div>

          {/* Filtering Options */}
          {/* <div className="flex flex-wrap gap-4">
            {filtersList.map((f: string) => (
              <button 
                key={f}
                className={`font-bold transition-colors ${filter === f ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-slate-200'}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div> */}
        </div>

        {/* Tab System */}
        <div className="flex gap-8 mb-12 border-b border-outline-variant/10">
          <button
            onClick={() => setActiveTab('experience')}
            className={`cursor-pointer pb-4 px-2 font-bold transition-all text-xl tracking-wide ${activeTab === 'experience' ? 'text-[#7bd0ff] border-b-2 border-[#7bd0ff] drop-shadow-[0_0_12px_rgba(123,208,255,0.6)]' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`cursor-pointer pb-4 px-2 font-bold transition-all text-xl tracking-wide ${activeTab === 'education' ? 'text-[#7bd0ff] border-b-2 border-[#7bd0ff] drop-shadow-[0_0_12px_rgba(123,208,255,0.6)]' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Education
          </button>
        </div>

        {/* Experience Cards */}
        {/* Tab Content */}
        <div className="space-y-8 relative min-h-[400px]">
          {activeTab === 'experience' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8">
              {filteredExperiences.map((exp: any, index: number) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8">
              <EducationCard />
            </div>
          )}
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
            <Briefcase className="w-8 h-8 text-[#7bd0ff] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-headline text-white group-hover:text-[#7bd0ff] transition-colors">{experience.role}</h3>
            <div className="flex items-center gap-2 mt-2 text-slate-400">
              <Building2 className="w-4 h-4" />
              <p className="font-medium tracking-wide">{experience.company}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#2563eb]/10 border border-[#2563eb]/30 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest text-[#7bd0ff] w-fit shadow-[0_0_15px_rgba(37,99,235,0.15)]">
          <Clock className="w-4 h-4" />
          {experience.duration}
        </div>
      </div>

      <div className="mb-8 pl-4 border-l-2 border-outline-variant/30 group-hover:border-[#2563eb]/40 transition-colors">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
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
          <Code2 className="w-4 h-4" />
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

const EducationCard: React.FC = () => {
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
            <GraduationCap className="w-8 h-8 text-[#7bd0ff] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-headline text-white group-hover:text-[#7bd0ff] transition-colors">Diploma in Computer Science and Technology</h3>
            <div className="flex items-center gap-2 mt-2 text-slate-400">
              <Library className="w-4 h-4" />
              <p className="font-medium tracking-wide">CPI Management and Technology, Polytechnic Institute, Mirpur-6, Dhaka</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#2563eb]/10 border border-[#2563eb]/30 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest text-[#7bd0ff] w-fit shadow-[0_0_15px_rgba(37,99,235,0.15)] relative overflow-hidden group-hover:bg-[#2563eb]/20 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <Clock className="w-4 h-4" />
          Currently Studying
          <span className="ml-2 bg-[#7bd0ff]/20 text-[#7bd0ff] px-2 py-0.5 rounded-md text-[10px] animate-pulse">
            FINAL YEAR
          </span>
        </div>
      </div>

      <div className="pl-4 border-l-2 border-outline-variant/30 group-hover:border-[#2563eb]/40 transition-colors">
        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          Academic Focus
        </h4>
        <ul className="space-y-3">
          <li className="text-slate-300 leading-relaxed flex items-start">
            <span className="text-[#2563eb] mr-3 mt-1.5">•</span>
            Building a strong foundation in Data Structures, Algorithms, and System Architecture
          </li>
          <li className="text-slate-300 leading-relaxed flex items-start">
            <span className="text-[#2563eb] mr-3 mt-1.5">•</span>
            Developing practical software engineering skills for modern web and application development
          </li>
          <li className="text-slate-300 leading-relaxed flex items-start">
            <span className="text-[#2563eb] mr-3 mt-1.5">•</span>
            Gaining hands-on experience through project-based learning and technological exploration
          </li>
        </ul>
      </div>
    </div>
  );
};


