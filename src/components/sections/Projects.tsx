import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projectData = [
    {
      title: "Gadget Bazar BD | E-Commerce Website with Admin Panel",
      tags: ["Next.js Fullstack", "Tailwind CSS", "MongoDB"],
      desc: "Gadget Bazar BD is a comprehensive e-commerce platform built with Next.js and Tailwind CSS. It features a modern, responsive design with a focus on user experience. The platform includes a wide range of features such as product listings, shopping cart functionality, user authentication, and order management.",
      img: "/project/gadget-bazar.png",
      link: "https://gadgetbazarbd.store"
    },
    {
      title: "HealtPortal | Online Medicine Store with Admin Panel",
      tags: ["Reactjs", "Tailwind CSS", "Java Spring Boot", "MongoDB"],
      desc: "HealtPortal is a comprehensive online medicine store built with Reactjs and Java Spring Boot. It features a modern, responsive design with a focus on user experience. The platform includes a wide range of features such as product listings, shopping cart functionality, user authentication, and order management.",
      img: "/project/health-portal.png",
      link: "https://health-portall-1.vercel.app/medicines"
    },
    {
      title: "GreenFields AgroTech | An Agro Company Portfolio",
      tags: ["Reactjs", "Tailwind CSS", "Lucide Icons", "Framer Motion"],
      desc: "GreenFields AgroTech is a comprehensive agro-based company portfolio website built with Reactjs and Tailwind CSS. It features a modern, responsive design with a focus on user experience. The platform includes a wide range of features such as product listings, shopping cart functionality, user authentication, and order management.",
      img: "/project/greenfields-agrotech.png",
      link: "https://greenfields-agrotech.vercel.app"
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
                  <a target="_blank" rel="noopener noreferrer" href={project.link}><ExternalLink className="text-primary w-6 h-6" /></a>
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
