export type  VitalLevel = "Normal" | "Higher than Average" | "Lower than Average";

export interface Reading {
    value: number;
    levels: VitalLevel;
}


export interface DiagnosisHistoryEntry {
  month: string;
  year: number;
  blood_pressure: {
    systolic: Reading;
    diastolic: Reading;
  };
  heart_rate: Reading;
  respiratory_rate: Reading;
  temperature: Reading;
}

export interface Diagnostic {
    name: string;
    description: string;
    status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryEntry[];
  diagnostic_list: Diagnostic[];
  lab_results: string[];
}