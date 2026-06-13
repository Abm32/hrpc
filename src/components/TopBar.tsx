import { Building2 } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary-container text-on-primary-container py-1 border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-10 flex justify-between items-center text-[12px] font-medium">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Building2 size={14} />
            കേരള സർക്കാർ ഔദ്യോഗിക വെബ്സൈറ്റ്
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#main" className="hover:underline hidden sm:block">
            സ്കിപ്പ് ടു മെയിൻ കണ്ടന്റ്
          </a>
          <div className="flex gap-2 items-center font-semibold">
            <span className="cursor-pointer hover:text-primary">A-</span>
            <span className="cursor-pointer hover:text-primary">A</span>
            <span className="cursor-pointer hover:text-primary">A+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
