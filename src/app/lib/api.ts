import type { Patient } from "../types/patient";

export async function fetchPatients(): Promise<Patient[]> {
  const token = btoa(
    `${process.env.NEXT_PUBLIC_API_USERNAME}:${process.env.NEXT_PUBLIC_API_PASSWORD}`,
  );

  const res = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: { Authorization: `Basic ${token}` },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error_message ?? `Request failed with status ${res.status}`);
  }

  return res.json();
}