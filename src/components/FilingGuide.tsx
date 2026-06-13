const steps = [
  {
    num: '1',
    title: 'റിപ്പോർട്ട് തയ്യാറാക്കുക',
    desc: 'പരാതിയും അനുബന്ധ തെളിവുകളും ശേഖരിക്കുക.',
  },
  {
    num: '2',
    title: 'ഓൺലൈനായി സമർപ്പിക്കുക',
    desc: 'ഔദ്യോഗിക പോർട്ടൽ വഴി പരാതി അപ്‌ലോഡ് ചെയ്യുക.',
  },
  {
    num: '3',
    title: 'പരിശോധന',
    desc: 'സമിതിയുടെ നിയമ വിദഗ്ദ്ധർ പരാതി പരിശോധിക്കുന്നു.',
  },
  {
    num: '4',
    title: 'നടപടി',
    desc: 'നിയമപരമായ നടപടികളോ ഒത്തുതീർപ്പോ നടക്കുന്നു.',
  },
];

export default function FilingGuide() {
  return (
    <section className="py-16 bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-10">
        <h2 className="font-headline text-3xl mb-12 text-center">
          പരാതി സമർപ്പിക്കുന്നതിനുള്ള ഘട്ടങ്ങൾ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-white/20" />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative z-10">
              <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                {step.num}
              </div>
              <h5 className="font-bold mb-2">{step.title}</h5>
              <p className="text-sm opacity-80">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
