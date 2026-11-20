import Image from "next/image";
import type { Patient } from "../types/patient";
import { MoreHorizontalIcon, SearchIcon } from "./Icons";

interface PatientListProps {
    patients: Patient[];
    activeName: string;
    onSelect: (name: string) => void;
}

export default function PatientList({ patients, activeName, onSelect}: PatientListProps) {
    return (
     <section
      aria-labelledby="patients-heading"
      className="flex min-h-0 flex-col rounded-2xl bg-white py-5"
     >
     <div className="mb-6 flex items-center justify-between px-5">
       <h2 id="patients-heading" className="text-2xl font-extrabold">
        Patients
       </h2>
       <SearchIcon className="h-[18px] w-[18px]" />
     </div>

     <ul className="thin-scroll min-h-0 flex-1 overflow-y-auto">
      {patients.map((patient, index) => {
        const active = patient.name === activeName;
        return (
         <li
          key={`${patient.name}-${index}`}
          className={active ? "bg-brand-tint" : ""}
         >
            <button
             type="button"
             onClick={() => onSelect(patient.name)}
             aria-current={active ? "true" : undefined}
             className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-brand-tint/60"
            >
              <Image
             src={patient.profile_picture}
             alt={patient.name}
             width={48}
             height={48}
             className="h-12 w-12 rounded-full object-cover" 
           />
           <div className="min-w-0 flex-1 leading-snug">
             <p className="truncate text-[14px] font-bold">{patient.name}</p>
             <p className="text-[13px] text-ink-soft">
              {patient.gender}, {patient.age}
             </p>
           </div>
           <MoreHorizontalIcon className="h-4 w-4 text-ink" />
            </button>
         </li>
        )
      })}
     </ul>
     </section>
    )
}