import { Component, OnInit, Testability } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosticTestServiceService } from '../diagnostic-test-service.service';
import { DiagnosticTest } from '../DiagnosticTest';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  DiagnosticTest!: DiagnosticTest;
  diagnosticTestid!: number;
  constructor(private testService: DiagnosticTestServiceService, private actRouter: ActivatedRoute, private router: Router) { }
  testForm!: FormGroup;
  ngOnInit(): void {
    this.DiagnosticTest = new DiagnosticTest();
    this.diagnosticTestid = this.actRouter.snapshot.params['diagnosticTestid'];
    this.testService.getTestById(this.diagnosticTestid).subscribe((data: any) => {
      this.DiagnosticTest = data;
    })

  }
  get testName(){
    return this.testForm.get('testName');
  }
  get testPrice(){
    return this.testForm.get('testPrice');
  }
  get normalValue(){
    return this.testForm.get('normalValue');
  }
  get units(){
    return this.testForm.get('units');
  }
  updateDtest() {
    this.testService.updateTest(this.DiagnosticTest).subscribe(res => {
      this.router.navigate(['/DiagnosticTest/all/']);
    })
  }
}





