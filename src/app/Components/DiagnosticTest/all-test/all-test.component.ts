import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticTest } from 'src/app/Interfaces/DiagnosticTest';
import { DiagnosticTestServiceService } from '../diagnostic-test-service.service';

@Component({
  selector: 'app-all-test',
  templateUrl: './all-test.component.html',
  styleUrls: ['./all-test.component.css'],
})
export class AllTestComponent implements OnInit {
  DiagnosticTest!: DiagnosticTest[];
  constructor(
    private testService: DiagnosticTestServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAll();
  }
  removeDiagnosticTest(diagnosticTestid: number) {
    console.log(diagnosticTestid);
    this.testService
      .deleteTest(diagnosticTestid)
      .subscribe((data: DiagnosticTest) => {
        console.log(data);
        this.getAll();
      });
  }
  getAll() {
    this.testService.getAllTest().subscribe((data) => {
      this.DiagnosticTest = data;
      console.log(data);
    });
  }
}
