import { useQuery } from "@tanstack/react-query";
import { fetchPatients } from "@/app/lib/api";

/** Displaying only the mentioned patient's data */
export const FEATURED_PATIENT = "Jessica Taylor";

export function usePatients() {
    return useQuery({
      queryKey: ["patients"],
      queryFn: fetchPatients,
      staleTime: 5 * 60 * 1000,
      select: (patients) => ({
        patients,
        featured: patients.find((p) => p.name === FEATURED_PATIENT) ?? null,
      }),
    });
}