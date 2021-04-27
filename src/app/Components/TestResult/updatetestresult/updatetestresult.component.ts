import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 import { TestResult } from 'src/app/Interfaces/TestResult';
 import { TestResultService } from 'src/app/Services/TestResult.service';

@Component({
  selector: 'app-updatetestresult',
  templateUrl: './updatetestresult.component.html',
  styleUrls: ['./updatetestresult.component.css']
})
export class UpdatetestresultComponent implements OnInit {

  testResultid: number;
  test: TestResult;

  constructor(private actRouter: ActivatedRoute, private eService: TestResultService, private router: Router) { }
testresultForm:FormGroup;

  ngOnInit(): void {
    this.test = new TestResult();
    this.testResultid = this.actRouter.snapshot.params['testResultid'];
    this.eService.getTestResultById(this.testResultid).subscribe(data => {
      this.test = data;
    });
  }


  updateData() {
    // this.test.testResultid = this.testResultid;
    this.eService.updateTestResult(this.test).subscribe(res => {
      this.router.navigate(['/testresult/all'])
    });
  }
}


