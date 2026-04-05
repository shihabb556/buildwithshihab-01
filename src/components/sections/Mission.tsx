import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Mission: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-surface" id="mission">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="relative group p-12 rounded-3xl bg-surface-container-low border border-primary/10 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
          <span className="material-symbols-outlined text-5xl text-primary mb-6">rocket_launch</span>
          <h3 className="font-headline text-3xl font-bold mb-4">{t('mission.missionTitle')}</h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            {t('mission.missionDesc')}
          </p>
        </div>
        
        <div className="relative group p-12 rounded-3xl bg-surface-container-low border border-tertiary/10 overflow-hidden md:mt-12">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tertiary/5 rounded-full blur-3xl group-hover:bg-tertiary/20 transition-all duration-700"></div>
          <span className="material-symbols-outlined text-5xl text-tertiary mb-6">visibility</span>
          <h3 className="font-headline text-3xl font-bold mb-4">{t('mission.visionTitle')}</h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            {t('mission.visionDesc')}
          </p>
        </div>
        
      </div>
    </section>
  );
};
