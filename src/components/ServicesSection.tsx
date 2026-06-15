import { Scale, Leaf, Users, ClipboardList } from 'lucide-react';

import { useLang } from '../i18n/LanguageContext';

const services = [
  { icon: Scale, titleKey: 'services.legalAidTitle', descKey: 'services.legalAidDesc' },
  { icon: Leaf, titleKey: 'services.environmentTitle', descKey: 'services.environmentDesc' },
  { icon: Users, titleKey: 'services.justiceTitle', descKey: 'services.justiceDesc' },
  { icon: ClipboardList, titleKey: 'services.grievanceTitle', descKey: 'services.grievanceDesc' },
];

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl text-primary mb-4">{t('services.heading')}</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.titleKey}
                className="p-6 sm:p-8 bg-surface-container/20 rounded border border-outline-variant hover:border-primary hover:bg-white transition-all text-center group cursor-pointer"
              >
                <Icon
                  size={40}
                  className="text-primary mb-4 mx-auto group-hover:scale-110 transition-transform"
                />
                <h5 className="font-bold mb-2">{t(service.titleKey)}</h5>
                <p className="text-sm text-gray-500">{t(service.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
