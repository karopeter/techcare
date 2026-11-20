import type { DiagnosisHistoryEntry } from "../types/patient";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/**
 * The API returns dates as either ISO ("1996-08-23") or US  ("08/23/1996").
 * Parsed manually to aviod timezone shifts, and rendered as  "August 23, 1996".
 */
export function formatDate(raw: string): string {
    let year: number, month: number, day: number;

    if (raw.includes("/")) {
      [month, day, year] = raw.split("/").map(Number);
    } else {
      [year, month, day] = raw.split("-").map(Number);
    }

    if (!year || !month || !day) return raw;
    return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function monthIndex(month: string): number {
    return MONTHS.indexOf(month);
}

/** Chronological (oldest -> newest) copy of the history */
export function sortHistory(
  history: DiagnosisHistoryEntry[],
): DiagnosisHistoryEntry[] {
  return [...history].sort(
    (a, b) => a.year - b.year || monthIndex(a.month) - monthIndex(b.month),
  );
}


export function shortMonthLabel(entry: DiagnosisHistoryEntry): string {
    return `${entry.month.slice(0, 3)}, ${entry.year}`;
}