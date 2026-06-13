import { Scale, Leaf, Users, ClipboardList } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'നിയമ സഹായം',
    desc: 'അർഹരായവർക്ക് സൗജന്യ നിയമോപദേശവും സഹായവും നൽകുന്നു.',
  },
  {
    icon: Leaf,
    title: 'പരിസ്ഥിതി സംരക്ഷണം',
    desc: 'പ്രകൃതി വിഭവങ്ങളുടെ സംരക്ഷണത്തിനായി വിവിധ പദ്ധതികൾ.',
  },
  {
    icon: Users,
    title: 'സാമൂഹിക നീതി',
    desc: 'പാർശ്വവൽക്കരിക്കപ്പെട്ടവർക്ക് നീതി ഉറപ്പാക്കുന്ന പ്രവർത്തനങ്ങൾ.',
  },
  {
    icon: ClipboardList,
    title: 'പരാതി പരിഹാരം',
    desc: 'ലഭിക്കുന്ന പരാതികളിൽ കൃത്യമായ നടപടികൾ സ്വീകരിക്കുന്നു.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-container-max mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl text-primary mb-4">പ്രധാന സേവനങ്ങൾ</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-8 bg-surface-container/20 rounded border border-outline-variant hover:border-primary hover:bg-white transition-all text-center group cursor-pointer"
              >
                <Icon
                  size={40}
                  className="text-primary mb-4 mx-auto group-hover:scale-110 transition-transform"
                />
                <h5 className="font-bold mb-2">{service.title}</h5>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
