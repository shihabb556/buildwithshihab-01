import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="ml-4 flex items-center justify-center lg:w-8 lg:h-8 w-5 h-5 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-colors duration-300 uppercase lg:text-sm text-xs p-3 lg:p-0"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'BN' : 'EN'}
    </button>
  );
};
