import { Building2 } from 'lucide-react';

import { useLang } from '../i18n/LanguageContext';

export default function TopBar() {
  const { t } = useLang();

  return (
    <div className="bg-primary-container text-on-primary-container py-1 border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-10 flex justify-between items-center text-[12px] font-medium">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Building2 size={14} />
            {t('topBar.govLabel')}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#main" className="hover:underline hidden sm:block">
            {t('topBar.skipToContent')}
          </a>
          <div className="flex gap-2 items-center font-semibold">
            <span className="cursor-pointer hover:text-primary" title={t('topBar.decreaseFont')}>A-</span>
            <span className="cursor-pointer hover:text-primary" title={t('topBar.resetFont')}>A</span>
            <span className="cursor-pointer hover:text-primary" title={t('topBar.increaseFont')}>A+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
