import { Facebook, AtSign, Phone } from 'lucide-react';

import { useLang } from '../i18n/LanguageContext';

const EMBLEM_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBvwXH6qkqXVsIR6xE9be2mWZZ8frY4v1I_-qxdHWaXaLkr_WLWflF_QyjmRd57gSjPTPhAZR89nli0rBWVvS4hJN2E89qJ7RmptzgAVcUBEvP7ReT0g1Rg9RsPuviFO54zGLZMqIoqXChsVqF7grTVY0tuyakuUUMt6VpQY0jJ3MyZDobkiRNY8VsRVJ1-LjF67ECHPOt2YdnEIDuiVXP_FI41_prPl4ztCgoB6miGxcc-lg42qOzaiTyBidBpG37V6A27Fu0dJXg5';

export default function SiteFooter() {
  const { t } = useLang();

  const footerLinks = [
    t('footer.privacy'),
    t('footer.terms'),
    t('footer.rti'),
    t('footer.volunteers'),
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-container-max mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src={EMBLEM_URL}
              alt="Kerala State Emblem"
              className="h-12 w-auto brightness-0 invert"
            />
            <span className="font-headline text-xl font-bold leading-tight">HRPS KERALA</span>
          </div>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            {t('footer.about')}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <AtSign size={14} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h6 className="font-bold text-sm uppercase tracking-widest text-secondary mb-6">
            {t('footer.linksTitle')}
          </h6>
          <ul className="space-y-4 text-sm text-gray-400">
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h6 className="font-bold text-sm uppercase tracking-widest text-secondary mb-6">
            {t('footer.addressTitle')}
          </h6>
          <address className="not-italic text-sm text-gray-400 leading-loose">
            {t('footer.addressLine1')}
            <br />
            {t('footer.addressLine2')}
            <br />
            {t('footer.addressLine3')}
          </address>
          <div className="mt-6 p-4 bg-white/5 rounded border border-white/10">
            <p className="text-[10px] text-secondary font-bold uppercase">{t('footer.secretaryLabel')}</p>
            <p className="text-lg font-bold mt-1 text-white flex items-center gap-2">
              <Phone size={16} /> +91 9526775936
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-10 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-[11px] text-gray-500">
          {t('footer.copyright')}
        </p>
        <p className="text-[10px] text-gray-600 mt-2 italic">
          {t('footer.managedBy')}
        </p>
      </div>
    </footer>
  );
}
