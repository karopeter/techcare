import type { VitalLevel } from "../types/patient";
import { TriangleDownIcon, TriangleUpIcon } from "./Icons";

/** "Higher than Average" ▲ / "Lower than Average" ▼ / "Normal" (no icon). */
export default function LevelIndicator({ level}: { level: VitalLevel}) {
    return (
     <p className="flex items-center gap-2 text-[14px]">
      {level === "Higher than Average" && <TriangleUpIcon className="h-2.5 w-2.5" />}
      {level === "Lower than Average" && <TriangleDownIcon className="h-2.5 w-2.5" />}
      {level}
     </p>
    )
}