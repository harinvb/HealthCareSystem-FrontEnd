import { Appointment } from './Appointment';

export interface Patient {
  patientId: number;
  name: string;
  phoneNo: string;
  age: number;
  gender: string;
  appointments: Appointment[];
}
