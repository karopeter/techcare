import Image from "next/image";
import { 
  CalendarIcon, 
  CardIcon, 
  GearIcon,
  HomeIcon,
  MessageIcon,
  MoreVerticalIcon,
  PatientsIcon
} from "./Icons";

const NAV_ITEMS = [
  { label: "Overview", Icon: HomeIcon },
  { label: "Patients", Icon: PatientsIcon, active: true },
  { label: "Schedule", Icon: CalendarIcon },
  { label: "Message", Icon: MessageIcon },
  { label: "Transactions", Icon: CardIcon },
];


export default function Navbar() {
    return (
     <header className="flex items-center justify-between rounded-full bg-white px-4 py-3 sm:px-8">
      <Image 
        src="/TestLogo.svg"
        alt="Tech Store"
        width={211}
        height={48}
        priority
        className="h-10 w-auto"
      />

      <nav aria-label="Primary" className="hidden lg:block">
       <ul className="flex items-center gap-2">
        {NAV_ITEMS.map(({ label, Icon, active }) => (
         <li key={label}>
           <a
            href="#"
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-bold leading-[19px] ${
                active ? "bg-brand" : "hover:bg-page"
            }`}
           >
            <Icon className="h-[18px] w-[18px]" />
            {label}
           </a>
         </li>
        ))}
       </ul>
      </nav>

      <div className="flex items-center gap-3">
        <Image
          src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
          alt="Dr. Jose Simmons"
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover" 
        />
        <div className="hidden leading-tight sm:block">
           <p className="text-[14px] font-bold">Dr. Jose Simmons</p>
           <p className="text-[14px] text-ink-soft">General Practitioner</p>
        </div>
        <span className="mx-1 hidden h-10 w-px bg-black/10 sm:block" />
        <GearIcon className="h-5 w-5" />
        <MoreVerticalIcon className="h-5 w-5" />
      </div>
     </header>
    )
}