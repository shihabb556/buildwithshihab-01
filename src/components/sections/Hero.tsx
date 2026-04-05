import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [typedTitle, setTypedTitle] = useState('');
  const titleGoal = t('hero.titleHighlight');

  // Typewriter effect logic
  useEffect(() => {
    setTypedTitle('');
    let currentIndex = 0;

    // Safety check in case it's an object instead of string during hot reloads
    if (typeof titleGoal !== 'string') return;

    const intervalId = setInterval(() => {
      setTypedTitle(titleGoal.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex >= titleGoal.length) {
        clearInterval(intervalId);
      }
    }, 100); // 100ms per character

    return () => clearInterval(intervalId);
  }, [titleGoal, language]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-tertiary font-label text-sm font-medium tracking-widest uppercase">
            {t('hero.availability')}
          </div>

          <h1 className="font-headline text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
            {t('hero.namePrefix')} <span className="text-gradient">{t('hero.nameHighlight')}</span>
          </h1>

          <p className="text-2xl md:text-3xl font-headline font-light text-on-surface-variant min-h-[4rem]">
            {t('hero.titlePrefix')} <span className="text-primary font-medium">{typedTitle}</span><span className="animate-pulse">|</span>
          </p>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" neon onClick={() => window.open('https://wa.me/8801770419889', '_blank')}>{t('hero.hireMe')}</Button>
            <a href="#work" className="glass px-4 rounded-lg text-center flex items-center hover:bg-primary/15 transition-colors duration-300">{t('hero.viewProjects')}</a>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="glass p-6 rounded-2xl border border-outline-variant/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="font-mono text-sm text-tertiary leading-relaxed whitespace-pre-wrap">
              <span className="text-slate-500">const</span> architect = {'{'}
              name: <span className="text-primary">"{t('hero.namePrefix')} {t('hero.nameHighlight')}"</span>,
              role: <span className="text-primary">"Fullstack Specialist"</span>,
              vision: <span className="text-primary">"Scalability & Precision"</span>,
              tools: [
              <span className="text-primary-fixed-dim">"React"</span>, <span className="text-primary-fixed-dim">"Node.js"</span>,
              <span className="text-primary-fixed-dim">"TypeScript"</span>, <span className="text-primary-fixed-dim">"Next.js"</span>
              ],
              readyToCode: <span className="text-slate-500">true</span>
              {'}'};

              <span className="text-slate-500">function</span> <span className="text-on-secondary-container">buildExcellence</span>() {'{'}
              <span className="text-slate-500">return</span> architect.tools.map(tool =&gt;
              deploy(tool, <span className="text-tertiary">"Production"</span>)
              );
              {'}'}
            </pre>
          </div>
          <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border border-outline-variant/20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
            <img
              alt="Code visualization"
              className="w-64 h-40 object-cover rounded-lg"
              src="/images/hero-code.png"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll Down">
          <span className="material-symbols-outlined text-primary text-3xl">expand_more</span>
        </a>
      </div>
    </section>
  );
};
