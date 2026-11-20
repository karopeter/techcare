import Image from "next/image";
import type { Reading } from "../types/patient";
import LevelIndicator from "./levelIndicator";

interface VitalCardProps {
  label: string;
  reading: Reading;
  unit: string;
  iconSrc: string;
  className: string;
}


export default function VitalCard({
  label,
  reading,
  unit,
  iconSrc,
  className,
}: VitalCardProps) {
    return (
     <article className={`flex min-h-[242px] flex-col rounded-xl p-4 ${className}`}>
      <div className="mb-4 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white">
        <Image src={iconSrc} alt="" width={96} height={96} className="h-full w-full object-contain p-4" />
      </div>
      <h3 className="text-[16px]">{label}</h3>
      <p className="mb-4 text-[26px] font-extrabold leading-tight">
       {reading.value}
       {unit}
      </p>
      <div className="mt-auto">
        <LevelIndicator level={reading.levels} />
      </div>
     </article>
    );
}