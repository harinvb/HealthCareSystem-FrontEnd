import { DiagnosticTest } from './DiagnosticTest';

export interface DiagnosticCenter {
  diagonasticCenterid: number;
  name: string;
  contactNo: string;
  address: string;
  contactEmail: string;
  tests: DiagnosticTest[];
}
