import { Phone } from 'lucide-react';

import { useLang } from '../i18n/LanguageContext';

import drAyathilAnsar from '../assets/members/dr_ayathil_ansar.jpg';
import bPradeep from '../assets/members/b_pradeep.jpg';
import drVinodLal from '../assets/members/dr_vinod_lal.jpg';
import johnVarghese from '../assets/members/john_varghese_puthenpura.jpg';

interface Member {
  name: string;
  role: string;
  /** Secondary credential shown on its own line under the role, e.g. a former post. */
  subRole?: string;
  img: string;
  phone?: string;
  /** Tailwind object-position class to keep the face centred (default: object-top). */
  objectPosition?: string;
}

// State committee — photos imported from src/assets/members.
const stateMembers: Member[] = [
  { name: 'ഡോ. ആയത്തിൽ അൻസാർ', role: 'സംസ്ഥാന പ്രസിഡന്റ്', img: drAyathilAnsar, phone: '9388085000' },
  { name: 'ബി. പ്രദീപ്', role: 'ജനറൽ സെക്രട്ടറി', subRole: 'റിട്ട. ഡി.ഐ.ജി. പ്രിസൺസ്', img: bPradeep, phone: '9447694767' },
  { name: 'ജോൺ വർഗ്ഗീസ്', role: 'സംസ്ഥാന ട്രഷറർ', img: johnVarghese, phone: '9446590108' },
  { name: 'ഡോ. വിനോദ് ലാൽ', role: 'സംസ്ഥാന രക്ഷാധികാരി', img: drVinodLal, phone: '8848346045' },
  { name: 'കൊല്ലം സുകു', role: 'സംസ്ഥാന സെക്രട്ടറി', img: '/kollam_suku.jpg', phone: '9526775936' },
];

// District committee — photos served from public/ (referenced by root path).
const districtMembers: Member[] = [
  { name: 'ഇല്ലത്തു കോയ', role: 'വയനാട് ജില്ലാ പ്രസിഡന്റ്', img: '/illathu_koya.jpg' },
  { name: 'സജീവൻ നടത്തറ', role: 'തൃശൂർ ജില്ലാ പ്രസിഡന്റ്', img: '/sajeevan_nadathara.jpg' },
  {
    name: 'ഷീല ഹരിദാസ്',
    role: 'തൃശൂർ ജില്ലാ ജനറൽ സെക്രട്ടറി',
    img: '/sheela_haridas.jpg',
    phone: '8848041003',
  },
  {
    name: 'പ്രതീഷ് എസ്. ശശിധരൻ',
    role: 'കൊല്ലം ജില്ലാ പ്രസിഡന്റ്',
    img: '/pratheesh_s_sasidharan.jpg',
    phone: '9847711333',
  },
  {
    name: 'പി. കെ. സുജിത്ത്',
    role: 'ആലപ്പുഴ ജില്ലാ പ്രസിഡന്റ്',
    img: '/P_K_SUJITH.jpg',
    phone: '9995542506',
  },
  {
    name: 'അലക്സാണ്ടർ സെബാസ്റ്റ്യൻ',
    role: 'കൊല്ലം ജില്ലാ സെക്രട്ടറി',
    img: '/Alexander_Sebastian.jpg',
  },
  {
    name: 'മഹേഷ് പി. എം.',
    role: 'കോഴിക്കോട് ജില്ലാ പ്രസിഡന്റ്',
    img: '/mahesh_p_m.jpg',
    phone: '9846750700',
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="w-[calc(50%-0.5rem)] sm:w-64 bg-white p-4 rounded gov-shadow text-center border border-outline-variant hover:border-primary transition-colors">
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-primary-container bg-surface-container">
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          className={`w-full h-full object-cover ${member.objectPosition ?? 'object-top'}`}
        />
      </div>
      <h4 className="font-bold text-base sm:text-lg text-primary">{member.name}</h4>
      <p className="text-xs text-secondary font-bold uppercase tracking-tight mt-1">
        {member.role}
      </p>
      {member.subRole && (
        <p className="text-[11px] text-gray-500 italic mt-0.5">{member.subRole}</p>
      )}
      {member.phone && (
        <a
          href={`tel:+91${member.phone}`}
          className="mt-2 inline-flex items-center gap-1 text-sm text-primary font-semibold hover:underline"
        >
          <Phone size={13} className="shrink-0" /> +91 {member.phone}
        </a>
      )}
    </div>
  );
}

export default function OfficeBearers() {
  const { t } = useLang();

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-surface-container/20">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl text-primary mb-2">{t('members.heading')}</h2>
          <p className="text-gray-500">{t('members.subheading')}</p>
        </div>

        {/* State committee. Flex-wrap keeps any member count centred and balanced
            (3, 5, 7...) instead of leaving gaps in a fixed grid as more are added. */}
        <h3 className="text-center font-headline text-lg sm:text-xl text-secondary font-bold mb-6 sm:mb-8">
          {t('members.committeeState')}
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {stateMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        {/* District committee. */}
        <h3 className="text-center font-headline text-lg sm:text-xl text-secondary font-bold mt-12 sm:mt-16 mb-6 sm:mb-8">
          {t('members.committeeDistrict')}
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {districtMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
