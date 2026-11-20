import Image from "next/image";
import type { ReactNode } from "react";
import { formatDate } from "../lib/format";
import type { Patient } from "../types/patient";
import { CalendarIcon, GenderFemaleIcon, PhoneIcon, ShieldIcon } from "./Icons";


export default function ProfileCard({ patient }: { patient: Patient }) {
    return (
     <section
      aria-label="Patient profile"
      className="shrink-0 rounded-2xl bg-white px-5 py-8"
     >
     <Image
      src={patient.profile_picture}
      alt={patient.name}
      width={200}
      height={200}
      priority
      className="mx-auto h-[200px] w-[200px] rounded-full object-cover" 
     />
      <h2 className="my-6 text-center text-2xl font-extrabold">{patient.name}</h2>

      <dl className="space-y-5">
        <Row icon={<Image src="/BirthIcon.svg" alt="" width={44} height={44} className="h-11 w-11" />} label="Date Of Birth">
          {formatDate(patient.date_of_birth)}
        </Row>
        <Row icon={<Image src="/FemaleIcon.svg" alt="" width={44} height={44} className="h-11 w-11" />} label="Gender">
          {patient.gender}
        </Row>
        <Row icon={<Image src="/PhoneIcon.svg" alt="" width={44} height={44} className="h-11 w-11" />} label="Contact Info.">
           {patient.phone_number}
        </Row>
        <Row icon={<Image src="/PhoneIcon.svg" alt="" width={44} height={44} className="h-11 w-11" />} label="Emergency Contacts">
         {patient.emergency_contact}
        </Row>
        <Row icon={<Image src="/InsuranceIcon.svg" alt="" width={44} height={44} className="h-11 w-11" />} label="Insurance Provider">
          {patient.insurance_type}
        </Row>
      </dl>

      <button
        type="button"
        className="mx-auto mt-8 block rounded-full bg-brand px-10 py-3 text-[14px] font-bold"
      >
         Show All Information
      </button>
     </section>
    );
}


function Row({
  icon,
  label,
  children
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
   <div className="flex items-center gap-4">
     <span className="flex h-11 w-11 shrink-0 items-center justify-center">
     {icon}
     </span>
     <div className="leading-snug">
      <dt className="text-[14px] font-normal">{label}</dt>
      <dd className="text-[14px] font-bold">{children}</dd>
     </div>
   </div>
  );
}