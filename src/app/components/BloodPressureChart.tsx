"use client";

import {
 CategoryScale,
 Chart as ChartJS,
 LinearScale,
 LineElement,
 PointElement,
 Tooltip,
 type ChartData,
 type ChartOptions
} from "chart.js";
import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { shortMonthLabel, sortHistory } from "../lib/format";
import { useDashboardStore, type ChartRange } from "../store/useDashboardStore";
import type { DiagnosisHistoryEntry } from "../types/patient";
import { ChevronDownIcon } from "./Icons";
import LevelIndicator from "./levelIndicator";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

const SYSTOLIC = "#e66fd2";
const DIASTOLIC = "#8c6fe6";

const RANGES: { value: ChartRange; label: string }[] = [
   { value: 6, label: "Last 6 months" },
   { value: 12, label: "Last 12 months" },
   { value: 24, label: "Last 24 months" },
];

const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: { legend: { display: false } },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: { stepSize: 20, color: "#072635", font: { size: 11 } },
        grid: { color: "#cbc8d4" },
        border: { display: false },
      },
      x: {
       ticks: { color: "#072635", font: { size: 11 } },
       grid: { display: false },
       border: { display: false },
      },
    },
};


export default function BloodPressureChart({
  history
}: {
 history: DiagnosisHistoryEntry[];
}) {
  const range = useDashboardStore((s) => s.chartRange);
  const setRange = useDashboardStore((s) => s.setChartRange);

  const visible = useMemo(
    () => sortHistory(history).slice(-range),
    [history, range],
  );
  const latest = visible[visible.length - 1];

  const data: ChartData<"line"> = useMemo(
    () => ({
      labels: visible.map(shortMonthLabel),
      datasets: [
       {
          label: "Systolic",
          data: visible.map((e) => e.blood_pressure.systolic.value),
          borderColor: SYSTOLIC,
          backgroundColor: SYSTOLIC,
          pointBackgroundColor: SYSTOLIC,
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          tension: 0.4,
        },  
        {
          label: "Diastolic",
          data: visible.map((e) => e.blood_pressure.diastolic.value),
          borderColor: DIASTOLIC,
          backgroundColor: DIASTOLIC,
          pointBackgroundColor: DIASTOLIC,
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          tension: 0.4,
        },
      ],
    }),
    [visible],
  );

  if (!latest) return null;

  return (
   <div className="grid gap-5 rounded-xl bg-chart-bg p-4 lg:grid-cols-[1fr_190px]">
    <div className="min-w-0">
     <div className="mb-3 flex items-center justify-between">
      <h3 className="text-[18px] font-bold">Blood Pressure</h3>
      <label className="relative flex items-center text-[14px]">
        <span className="sr-only">Time range</span>
        <select
         value={range}
         onChange={(e) => setRange(Number(e.target.value) as ChartRange)}
         className="cursor-pointer appearance-none bg-transparent pr-6 outline-none"
        >
         {RANGES.map((r) => (
           <option key={r.value} value={r.value}>
              {r.label}
           </option>
         ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-0 h-4 w-4" />
      </label>
     </div>
     <div className="h-[220px]">
       <Line data={data} options={options} />
     </div>
    </div>

    <dl className="flex flex-col justify-center gap-4 lg:border-none">
     <Legend
       color={SYSTOLIC}
       label="Systolic"
       value={latest.blood_pressure.systolic.value}
       level={latest.blood_pressure.systolic.levels}
     />
     <hr className="border-black/10" />
     <Legend 
      color={DIASTOLIC}
      label="Diastolic"
      value={latest.blood_pressure.diastolic.value}
      level={latest.blood_pressure.diastolic.levels}
     />
    </dl>
   </div>
  );
}


function Legend({
 color,
 label,
 value,
 level
}: {
  color: string;
  label: string;
  value: number;
  level: DiagnosisHistoryEntry["heart_rate"]["levels"];
}) {
  return (
   <div className="space-y-1">
    <dt className="flex items-center gap-2 text-[14px] font-bold">
       <span
        className="h-3.5 w-3.5 rounded-full border-2 border-white"
        style={{ backgroundColor: color }}
       />
       {label}
    </dt>
    <dd>
        <p className="text-[22px] font-bold leading-tight">{value}</p>
        <LevelIndicator level={level} />
    </dd>
   </div>
  )
}