import { Component, OnInit } from '@angular/core';
import { TestResult } from 'src/app/Interfaces/TestResult';
import { TestResultService } from 'src/app/Services/TestResult.service';

@Component({
  selector: 'app-all-testresult',
  templateUrl: './all-testresult.component.html',
  styleUrls: ['./all-testresult.component.css']
})
export class AllTestresultComponent implements OnInit {
  testres: any[]=[];
  
  constructor(private eService: TestResultService) { }

  ngOnInit(): void {
    this.eService.getAllTestResult().subscribe((data) => {
      this.testres = data;
    })
  }
  removeTestResult(testResultid: number) {
    this.eService.deleteTestResult(testResultid).subscribe((data: TestResult[]) => {
      this.testres = data;
      console.log(data);
    })

  }
}
