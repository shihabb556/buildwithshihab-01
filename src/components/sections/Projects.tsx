import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Card } from '../ui/Card';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projectData = [
    {
      title: "Nova Crypto Dashboard",
      tags: ["React", "D3.js", "Solidity"],
      desc: "A high-performance real-time trading platform featuring complex data visualization and wallet integration.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARFxz_hbPo2JnWFf4AwHwq19kTTKSvgPpFHc_fV3jGXg54QmssqMURpAcnogOrpkrGF2_yd60XMsU2kxNDdh47hvbIR2y0lPRbs7nUcoU7NVQXNqukHWp1I2zdGO8OlpYUELJtHfExPl9Mt83KqlmtL4P6VkiRWGixm2Qvtv9fd2iP6v6BdzKTt59KyzLPF1-W_gE2U-kB-IA4T1eObh3aMdyZVMyhm04fjw96L7tIQV3nRpll0bN0S0SoAuLZVvosxsQ-Q28D4bk",
      link: "#"
    },
    {
      title: "Luxe Commerce API",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      desc: "Headless commerce solution with lightning-fast page transitions and secure multi-currency payment gateway.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgpqky_mLaerrM1N8IydFRCW_fBtMqQEh-NUcKwRZnJjwnXUwewE40Y2bDL5xqLwH6eV1QczbtDC_1msG4KlfqeTL9dZh0eA1m4D2WNm_cCMeZf2ENPyuA3Z1BoBrVvIpdw50X9HiDVBFNIWYHprY8yOdQJsWaHmbLHVq8LISgJeE1ZPbFC0CNZrcFc2Y1UxH1kYdZkLFUemmzar3GBydmqYEvDqg5HPbKZ2LJc8jlxcv7SRVzHwn9reoGQskjoI-sDzrnvDxSXs4",
      link: "#"
    },
    {
      title: "Core OS Shell",
      tags: ["Electron", "Node.js", "Rust"],
      desc: "A desktop productivity suite designed for extreme speed and minimalist workflows.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-KM2b4jSRqWI0Usu9LHEPUyrLXgZMQHhncUDeDwykdVLcg5XkVdzZaGfFt_nqYAuRnSQ2GYWhlxd1Wm4Pt0bM4y6TbrSnaekghfxbskCQGILUTg7vgi-nYMBoNeDQJHGFZXa3OObvgQSUiVoip7woyeDPvIs9FzjT2DuMMIAofSfinhPHvfIkenSK-FrqoTZwTHGq1cwHi7tVf_fP4mSBkPj1WcnIcIFnjoGfGDPV_EgOcq_XQ9rzbgcRcTq3doEg5yMrYftZRvg",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="work">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-4">
              {t('projects.titlePrefix')} <span className="text-primary">{t('projects.titleHighlight')}</span>
            </h2>
            <p className="text-slate-400">{t('projects.description')}</p>
          </div>
          <div className="flex gap-4">
            <button className="text-primary font-bold border-b-2 border-primary">{t('projects.filters.all')}</button>
            <button className="text-slate-500 hover:text-slate-200 transition-colors">{t('projects.filters.frontend')}</button>
            <button className="text-slate-500 hover:text-slate-200 transition-colors">{t('projects.filters.fullstack')}</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, idx) => (
            <div key={idx} className="group relative bg-surface rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-primary/40 transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={project.img} />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold font-headline">{project.title}</h4>
                  <a href={project.link}><span className="material-symbols-outlined text-primary">open_in_new</span></a>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase bg-surface-container-highest px-3 py-1 rounded-full text-tertiary">{tag}</span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
