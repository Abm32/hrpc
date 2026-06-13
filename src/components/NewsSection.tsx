import {
  LayoutGrid,
  Calendar,
  CalendarDays,
  AlertCircle,
  Phone,
  FileText,
  Download,
  MapPin,
  ArrowRight,
} from 'lucide-react';

const EVENT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB2PuhRRhXeEZqPllJdrWUTCPeJAHLCxo3NOA08dVL2CWmarr7Jlu4TfYdkWHVbylr_MzljjXnoFgwlu5p1X1ReZ8TftXe13bDm45a9cXNfJnw9hKtTNNrVfH0qq4ph3kPb4DX563m4DecTM1SsFBWZIWnsQRtbHxmHvdgJsohTxrzbVnJNTM-V1N5a8G9ExHrOQrDYqwkl7wFG2emGAbUpmqd68Lml4t_aOcaGpd3mNd2ytr0gzDoU_mYObapfKFiPSZAJEj_-pdeZ';

export default function NewsSection() {
  return (
    <section className="py-16 bg-surface-container/30">
      <div className="max-w-container-max mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 border-b border-outline-variant pb-4">
          <h2 className="font-headline text-3xl text-primary flex items-center gap-3">
            <LayoutGrid size={26} className="text-secondary" />
            വാർത്തകളും പ്രവർത്തനങ്ങളും
          </h2>
          <a href="#" className="text-primary font-bold hover:underline mt-4 md:mt-0">
            എല്ലാ റിപ്പോർട്ടുകളും കാണുക →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feature Article */}
          <div className="lg:col-span-2 bg-white rounded gov-shadow overflow-hidden border border-outline-variant flex flex-col">
            <img
              src={EVENT_IMAGE}
              alt="Environment Day Event"
              className="w-full h-64 object-cover"
            />
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase">
                  വാർത്ത
                </span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <Calendar size={14} /> ജൂൺ 5, 2024
                </span>
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">
                കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതിയുടെ നേതൃത്വത്തിൽ ലോക പരിസ്ഥിതി ദിനാചരണം
                സംഘടിപ്പിച്ചു.
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed flex-1">
                ചാത്തന്നൂർ ശ്രീനാരായണ കോളേജിൽ സംഘടിപ്പിച്ച ചടങ്ങിൽ പരിസ്ഥിതി
                സംരക്ഷണത്തിന്റെ പ്രസക്തിയെക്കുറിച്ച് പ്രസിഡന്റ് ഡോ. ആയത്തിൽ അൻസാർ
                പ്രഭാഷണം നടത്തി. നൂറുകണക്കിന് വിദ്യാർത്ഥികൾ ചടങ്ങിൽ പങ്കെടുത്തു.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all"
              >
                പൂർണ്ണരൂപം വായിക്കാം <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Side Panel */}
          <div className="flex flex-col gap-6">
            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded border-l-4 border-primary gov-shadow border border-outline-variant">
              <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                <CalendarDays size={16} /> വരാനിരിക്കുന്ന പരിപാടികൾ
              </h4>
              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                    സൗജന്യ നിയമ സഹായ ക്യാമ്പ് - കൊല്ലം
                  </p>
                  <p className="text-[12px] text-gray-400 mt-1">
                    ജൂലൈ 15, രാവിലെ 10 മണി മുതൽ
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                    പരിസ്ഥിതി സെമിനാർ - തിരുവനന്തപുരം
                  </p>
                  <p className="text-[12px] text-gray-400 mt-1">
                    ഓഗസ്റ്റ് 02, ഉച്ചയ്ക്ക് 2 മണിക്ക്
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Helpline */}
            <div className="bg-primary text-on-primary p-6 rounded gov-shadow">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-lg">
                <AlertCircle size={22} /> എമർജൻസി ഹെൽപ്പ് ലൈൻ
              </h4>
              <p className="text-sm opacity-90 mb-4">
                അടിയന്തര മനുഷ്യാവകാശ ലംഘനങ്ങൾ റിപ്പോർട്ട് ചെയ്യാൻ വിളിക്കുക.
              </p>
              <div className="text-2xl font-bold font-headline flex items-center gap-2">
                <Phone size={22} /> +91 9526775936
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-surface p-6 rounded border border-outline-variant border-dashed">
              <h4 className="font-bold text-on-surface mb-4">ദ്രുത ലിങ്കുകൾ</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                    <FileText size={15} /> വിവരാവകാശ നിയമം
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                    <Download size={15} /> അപേക്ഷാ ഫോറങ്ങൾ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                    <MapPin size={15} /> ഓഫീസുകൾ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
