import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-surface-container-low" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="glass rounded-[3rem] border border-outline-variant/10 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-12 bg-primary-container/20 flex flex-col justify-between">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-6">
                {t('contact.titlePrefix')} <span className="text-primary">{t('contact.titleHighlight')}</span>
              </h2>
              <p className="text-slate-400 mb-8">{t('contact.description')}</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{t('contact.callLabel')}</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/8801770419889" className="font-bold">+8801770419889</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{t('contact.emailLabel')}</p>
                    <p className="font-bold">shihabaly333@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{t('contact.locationLabel')}</p>
                    <p className="font-bold">Mirpur, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {/* <a className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/20" href="#">
                <span className="font-bold">Gh</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/20" href="#">
                <span className="font-bold">Li</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:text-primary transition-colors border border-outline-variant/20" href="#">
                <span className="font-bold">Tw</span>
              </a> */}
            </div>
          </div>

          <div className="lg:w-3/5 p-12">
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t('contact.formNameLabel')}</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={t('contact.formNamePlaceholder')} type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t('contact.formEmailLabel')}</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={t('contact.formEmailPlaceholder')} type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t('contact.formSubjectLabel')}</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={t('contact.formSubjectPlaceholder')} type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t('contact.formMessageLabel')}</label>
                <textarea className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={t('contact.formMessagePlaceholder')} rows={5}></textarea>
              </div>
              <Button variant="primary" neon className="w-full">{t('contact.formSubmit')}</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
