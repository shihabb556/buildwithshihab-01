import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = t('about.stats') as Array<{ value: string, label: string }>;

  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-surface rounded-2xl overflow-hidden aspect-square border border-outline-variant/20">
                <img
                  alt="Md. Shihab Uddin Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbrWCD9px4u_SHeFrblq3pf_bjNKnOn9AYPI7FjxirCDupQx909PAcA89ov-2WpO0aunmY73DE1JQK3_Xj8dar0BKRrYL1k1l-glR9pL1MGI-8cIJ3ThFltaTz6AdQu_0cFuOuP-8GUqiteo-t9mng30FsRdxdrugzY4AynXilX0L5aRu2ARxzJvnIuNi11CTOB2kl71Vm2RZhnG8IJE-qQ6S93P5VdEnZfgrl0q0fbq-W8vMtfjJhH168VmL9zMD9pKk7IGpPQIk"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-8">
            <h2 className="font-headline text-4xl font-bold tracking-tight">
              {t('about.titlePrefix')} <span className="text-tertiary">{t('about.titleHighlight')}</span> {t('about.titleSuffix')}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats?.map((stat, index) => (
                <div key={index} className="glass p-4 rounded-xl border border-outline-variant/10 text-center hover:border-primary/30 transition-colors">
                  <span className="block text-3xl font-headline font-bold text-primary">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* <div className="flex flex-wrap gap-3">
              {certifications?.map((cert, index) => (
                <span key={index} className="bg-tertiary-container text-gray-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-tertiary/20">
                  {cert}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
