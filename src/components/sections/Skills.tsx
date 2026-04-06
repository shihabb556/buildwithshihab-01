import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ProgressBar } from '../ui/ProgressBar';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillsData = [
    { label: "React / Next.js", percentage: 95 },
    { label: "TypeScript", percentage: 90 },
    { label: "Node.js / Express", percentage: 88 },
    { label: "UI / UX Design", percentage: 82 }
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="skills">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-2xl sm:text-4xl font-bold mb-6">
            {t('skills.titlePrefix')} <span className="text-primary">{t('skills.titleHighlight')}</span>
          </h2>
          <p className="text-slate-400">{t('skills.description')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <ProgressBar key={index} label={skill.label} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  );
};
