import { Building2 } from 'lucide-react';

import { useLang } from '../i18n/LanguageContext';

export default function TopBar() {
  const { t } = useLang();

  return (
    <div className="bg-primary-container text-on-primary-container py-1 border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center text-[11px] sm:text-[12px] font-medium gap-2">
        <div className="flex items-center gap-4 min-w-0">
          <span className="flex items-center gap-1 truncate">
            <Building2 size={14} className="shrink-0" />
            {t('topBar.govLabel')}
          </span>
        </div>
        <div className="flex gap-3 sm:gap-4 items-center shrink-0">
          <a href="#main" className="hover:underline hidden sm:block">
            {t('topBar.skipToContent')}
          </a>
          <div className="flex gap-1 sm:gap-2 items-center font-semibold">
            <span className="cursor-pointer hover:text-primary px-1 py-0.5" title={t('topBar.decreaseFont')}>A-</span>
            <span className="cursor-pointer hover:text-primary px-1 py-0.5" title={t('topBar.resetFont')}>A</span>
            <span className="cursor-pointer hover:text-primary px-1 py-0.5" title={t('topBar.increaseFont')}>A+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
