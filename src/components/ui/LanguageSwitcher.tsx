import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="ml-4 flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-colors duration-300 uppercase text-sm"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'BN' : 'EN'}
    </button>
  );
};
