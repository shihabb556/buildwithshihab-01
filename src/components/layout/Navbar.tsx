import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/40 backdrop-blur-xl shadow-[0_15px_30px_-15px_rgba(180,197,255,0.1)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-headline tracking-tight">
        <div className="text-2xl font-bold tracking-tighter text-[#b4c5ff]">BuildWithShihab</div>
        <div className="hidden lg:flex items-center space-x-8">
          <a className="text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#work">{t('nav.work')}</a>
          <a className="text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#experience">{t('nav.experience')}</a>
          <a className="text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#services">{t('nav.services')}</a>
          <a className="text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#skills">{t('nav.skills')}</a>
          <a className="text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#mission">{t('nav.mission')}</a>
          <a className="text-slate-400 hover:text-slate-100 transition-colors duration-300" href="#contact">{t('nav.contact')}</a>
          <LanguageSwitcher />
          <Button variant="ghost" className="cursor-pointer" onClick={() => window.open('https://wa.me/8801770419889', '_blank')}>{t('nav.hireMe')}</Button>
        </div>
        <div className="lg:hidden flex items-center">
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} className="ml-4 text-primary cursor-pointer">
            {isOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface-container/95 backdrop-blur-lg border-t border-outline-variant/10">
          <div className="flex flex-col items-center py-6 space-y-6">
            <a onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100" href="#work">{t('nav.work')}</a>
            <a onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100" href="#experience">{t('nav.experience')}</a>
            <a onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100" href="#services">{t('nav.services')}</a>
            <a onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100" href="#skills">{t('nav.skills')}</a>
            <a onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100" href="#mission">{t('nav.mission')}</a>
            <a onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-100" href="#contact">{t('nav.contact')}</a>
            <Button variant="primary" className="mt-4" onClick={() => window.open('https://wa.me/8801770419889', '_blank')}>{t('nav.hireMe')}</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
