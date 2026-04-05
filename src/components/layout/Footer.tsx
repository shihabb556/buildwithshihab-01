import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0b1326] w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto border-t border-white/5 pt-12">
        <div className="text-lg font-black text-[#b4c5ff]"><span className="text-[#7bd0ff]">BuildWith</span>Shihab</div>
        <div className="flex gap-8 text-sm text-slate-500 font-body">
          {/* <a className="hover:text-[#b4c5ff] transition-colors duration-300" href="#">Privacy Policy</a>
          <a className="hover:text-[#b4c5ff] transition-colors duration-300" href="#">Terms of Service</a> */}
          <a className="hover:text-[#b4c5ff] transition-colors duration-300" target="_blank" rel="noopener noreferrer" href="https://github.com/shihabb556">Github</a>
          <a className="hover:text-[#b4c5ff] transition-colors duration-300" target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/md.shihab.uddin.218279">Facebook</a>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed text-center md:text-right">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};
