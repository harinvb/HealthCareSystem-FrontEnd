import { AppointmentStatus } from './AppointmentStatus.enum';
import { DiagnosticCenter } from './DiagnosticCenter';
import { DiagnosticTest } from './DiagnosticTest';
import { TestResult } from './TestResult';

export interface Appointment {
  appointmentid: number;

  appointmentDate: Date;

  approvalStatus: AppointmentStatus;

  diagnosticTests: DiagnosticTest[];

  diagnosticCenter: DiagnosticCenter;

  testResult: TestResult[];
}
