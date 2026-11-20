import { create } from "zustand";

/** Number of months show in the blood pressure chart. */
export type ChartRange = 6 | 12 | 24;

interface DashboardState {
  chartRange: ChartRange;
  setChartRange: (range: ChartRange) => void;
  selectedName: string | null;
  selectPatient: (name: string) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
    chartRange: 6,
    setChartRange: (chartRange) => set({ chartRange }),
    selectedName: null,
    selectPatient: (name) => set({ selectedName: name, chartRange: 6 }),
}));