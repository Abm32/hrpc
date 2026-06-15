import { Facebook, AtSign, Phone } from 'lucide-react';

import { useLang } from '../i18n/LanguageContext';
import hrpcLogo from '../assets/hrpc_logo.png';

export default function SiteFooter() {
  const { t } = useLang();

  const footerLinks = [
    t('footer.privacy'),
    t('footer.terms'),
    t('footer.rti'),
    t('footer.volunteers'),
  ];

  return (
    <footer className="bg-slate-900 text-white pt-12 sm:pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src={hrpcLogo}
              alt="Human Rights Protection Council of Kerala logo"
              className="h-12 w-auto object-contain bg-white rounded-full p-0.5"
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
              href="mailto:hrpckerala1995@gmail.com"
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
            <a
              href="tel:+919388085000"
              className="text-lg font-bold mt-1 text-white flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone size={16} className="shrink-0" /> +91 9388085000
            </a>
            <a
              href="mailto:hrpckerala1995@gmail.com"
              className="text-sm mt-3 text-gray-300 flex items-center gap-2 hover:text-white transition-colors break-all"
            >
              <AtSign size={15} className="shrink-0" /> hrpckerala1995@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16 pt-8 border-t border-white/10 text-center">
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
