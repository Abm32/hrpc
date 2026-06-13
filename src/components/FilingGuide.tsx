import { useLang } from '../i18n/LanguageContext';

const steps = [
  { num: '1', titleKey: 'filing.step1Title', descKey: 'filing.step1Desc' },
  { num: '2', titleKey: 'filing.step2Title', descKey: 'filing.step2Desc' },
  { num: '3', titleKey: 'filing.step3Title', descKey: 'filing.step3Desc' },
  { num: '4', titleKey: 'filing.step4Title', descKey: 'filing.step4Desc' },
];

export default function FilingGuide() {
  const { t } = useLang();

  return (
    <section className="py-16 bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-10">
        <h2 className="font-headline text-3xl mb-12 text-center">
          {t('filing.heading')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-white/20" />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative z-10">
              <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                {step.num}
              </div>
              <h5 className="font-bold mb-2">{t(step.titleKey)}</h5>
              <p className="text-sm opacity-80">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
