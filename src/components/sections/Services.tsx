import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">
            {t('services.titlePrefix')} <span className="text-tertiary">{t('services.titleHighlight')}</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-3 glass p-10 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 group">
            <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">code</span>
            <h4 className="text-2xl font-bold mb-4">Frontend Engineering</h4>
            <p className="text-slate-400">Crafting high-fidelity, responsive, and accessible user interfaces that prioritize performance and delight.</p>
          </div>
          
          <div className="md:col-span-3 glass p-10 rounded-3xl border border-outline-variant/10 hover:border-tertiary/30 transition-all duration-500 group">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-6 group-hover:scale-110 transition-transform">layers</span>
            <h4 className="text-2xl font-bold mb-4">Full Stack Development</h4>
            <p className="text-slate-400">End-to-end architecture from database design to server logic and seamless API integrations.</p>
          </div>
          
          <div className="md:col-span-2 glass p-10 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 group">
            <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform">brush</span>
            <h4 className="text-xl font-bold mb-4">UI/UX Strategy</h4>
            <p className="text-sm text-slate-400">User-centric design flows and high-fidelity prototyping that solves real business problems.</p>
          </div>
          
          <div className="md:col-span-4 glass p-10 rounded-3xl border border-outline-variant/10 hover:border-tertiary/30 transition-all duration-500 group flex items-center gap-8">
            <div className="flex-1">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6 group-hover:scale-110 transition-transform">query_stats</span>
              <h4 className="text-xl font-bold mb-4">SEO & Performance</h4>
              <p className="text-sm text-slate-400">Optimizing core web vitals and search presence to ensure your product reaches its audience.</p>
            </div>
            <img 
              alt="Performance graph" 
              className="w-32 h-32 rounded-2xl hidden lg:block object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIVmQPt_isL6b5l2CNOaSYsY-UwtFwVjo75gfKgf9tqzYHGO7DAQ1CKwr9UmpBDIOYQNIbEg0wm-wC7G-kSirC-Sk2cM7iida-8soTFH4tS59BAPJHjcKBjaWuUBoiNKNSnh4PGytSjn9Fkx7S0TlwmlrmAZ8f-GfD1Nd7LIOxiUSFSXS4EAHwh4Bio1qrg9u0vHLziOlzRzlxM7sSNa6tqfSuPF1nagHwLr-7OxygUPPhdbj3rxSQZBLV4BpyFNU-jqAuWfa-P4s" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
