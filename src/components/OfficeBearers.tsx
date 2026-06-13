import drAyathilAnsar from '../assets/members/dr_ayathil_ansar.png';
import bPradeep from '../assets/members/b_pradeep.png';
import drVinodLal from '../assets/members/dr_vinod_lal.png';
import johnVarghese from '../assets/members/john_varghese_puthenpura.png';

const members = [
  {
    name: 'ഡോ. ആയത്തിൽ അൻസാർ',
    role: 'സംസ്ഥാന പ്രസിഡന്റ്',
    img: drAyathilAnsar,
  },
  {
    name: 'ബി. പ്രദീപ്',
    role: 'സംസ്ഥാന സെക്രട്ടറി',
    img: bPradeep,
  },
  {
    name: 'ഡോ. വിനോദ് ലാൽ',
    role: 'സംസ്ഥാന രക്ഷാധികാരി',
    img: drVinodLal,
  },
  {
    name: 'ജോൺ വർഗ്ഗീസ്',
    role: 'കോശാധ്യക്ഷൻ',
    img: johnVarghese,
  },
];

export default function OfficeBearers() {
  return (
    <section className="py-16 bg-surface-container/20">
      <div className="max-w-container-max mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl text-primary mb-2">ഭാരവാഹികൾ</h2>
          <p className="text-gray-500">
            സംസ്ഥാന മനുഷ്യാവകാശ സംരക്ഷണ സമിതിയുടെ നേതൃനിര
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white p-4 rounded gov-shadow text-center border border-outline-variant hover:border-primary transition-colors"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-primary-container p-1"
              />
              <h4 className="font-bold text-lg text-primary">{member.name}</h4>
              <p className="text-xs text-secondary font-bold uppercase tracking-tight mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
