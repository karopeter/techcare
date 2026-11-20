"use client";

import { FEATURED_PATIENT, usePatients } from "@/hooks/usePatient";
import { sortHistory } from "../lib/format";
import BloodPressureChart from "./BloodPressureChart";
import DiagnosticList from "./DiagnosticList";
import LabResults from "./LabResults";
import Navbar from "./Navbar";
import PatientList from "./PatientList";
import { useDashboardStore } from "../store/useDashboardStore";
import ProfileCard from "./ProfileCard";
import VitalCard from "./VitalCard";

export default function Dashboard() {
  const { data, isPending, isError, error, refetch } = usePatients();
  const patient = data?.featured;

  return (
    <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-8 p-4 sm:p-[18px] lg:h-screen">
      <Navbar />

      {isPending && (
        <p role="status" className="py-20 text-center text-ink-soft">
          Loading patient data…
        </p>
      )}

      {isError && (
        <div role="alert" className="py-20 text-center">
          <p className="mb-4 font-bold">Couldn&apos;t load patient data.</p>
          <p className="mb-4 text-ink-soft">{error.message}</p>
          <button
            type="button"
            onClick={() => refetch()}
            className="rounded-full bg-brand px-8 py-3 text-[14px] font-bold"
          >
            Try again
          </button>
        </div>
      )}

      {data && !patient && (
        <p role="alert" className="py-20 text-center text-ink-soft">
          {FEATURED_PATIENT} was not found in the API response.
        </p>
      )}

      {data && patient && <Content data={data} />}
    </div>
  );
}

function Content({
  data,
}: {
  data: NonNullable<ReturnType<typeof usePatients>["data"]>;
}) {
  const selectedName = useDashboardStore((s) => s.selectedName);
  const selectPatient = useDashboardStore((s) => s.selectPatient);
  const patient = 
    data.patients.find((p) => p.name === selectedName) ?? data.featured!;
   const latest = sortHistory(patient.diagnosis_history).at(-1);

  return (
    <main className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[minmax(280px,1fr)_minmax(0,2.4fr)_minmax(280px,1fr)]">
      <div className="flex max-h-[600px] min-h-0 flex-col lg:max-h-none">
        <PatientList 
          patients={data.patients} 
          activeName={patient.name} 
          onSelect={selectPatient}
          />
      </div>

      <div className="thin-scroll flex min-h-0 flex-col gap-8 lg:overflow-y-auto lg:pr-1">
        <section
          aria-labelledby="history-heading"
          className="rounded-2xl bg-white p-5"
        >
          <h2 id="history-heading" className="mb-8 text-2xl font-extrabold">
            Diagnosis History
          </h2>
          <BloodPressureChart history={patient.diagnosis_history} />

          {latest && (
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              <VitalCard
                label="Respiratory Rate"
                reading={latest.respiratory_rate}
                unit=" bpm"
                className="bg-card-resp"
                iconSrc="/respiratory.svg"
              />
              <VitalCard
                label="Temperature"
                reading={latest.temperature}
                unit="°F"
                className="bg-card-temp"
               iconSrc="/temperature.svg"
              />
              <VitalCard
                label="Heart Rate"
                reading={latest.heart_rate}
                unit=" bpm"
                className="bg-card-heart"
                iconSrc="/HeartBPM.svg"
              />
            </div>
          )}
        </section>

        <DiagnosticList items={patient.diagnostic_list} />
      </div>

      <div className="thin-scroll flex min-h-0 flex-col gap-8 lg:overflow-y-auto lg:pr-1">
        <ProfileCard patient={patient} />
        <LabResults results={patient.lab_results} />
      </div>
    </main>
  );
}