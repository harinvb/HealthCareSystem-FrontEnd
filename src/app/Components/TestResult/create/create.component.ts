import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestResultService } from 'src/app/Services/TestResult.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateTestResultComponent implements OnInit {
  testresultForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private eService: TestResultService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.testresultForm = this.fb.group({
      testName: ['', Validators.required],
      testReading: ['', Validators.required],
      testcondition: ['', Validators.required],
    });
  }
  get testName() {
    return this.testresultForm.get('testName');
  }
  get testReading() {
    return this.testresultForm.get('testReading');
  }
  get testcondition() {
    return this.testresultForm.get('testcondition');
  }

  get testResultid() {
    return this.testresultForm.get('testResultid');
  }
  regTestResult() {
    this.eService.addTestResult(this.testresultForm.value).subscribe(
      (res) => {
        this.router.navigate(['testresult/all']);
      },
      (error: string) => {
        this.errorMessage = error;
      }
    );
  }
}
