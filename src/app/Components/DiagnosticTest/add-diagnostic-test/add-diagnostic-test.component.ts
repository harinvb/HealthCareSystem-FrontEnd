import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiagnosticTestServiceService } from '../diagnostic-test-service.service';

@Component({
  selector: 'app-add-diagnostic-test',
  templateUrl: './add-diagnostic-test.component.html',
  styleUrls: ['./add-diagnostic-test.component.css']
})
export class AddDiagnosticTestComponent implements OnInit {
  testForm!: FormGroup;
  errorMessage!: string;
  submitted=false;
   
    constructor(private fb: FormBuilder, private testService: DiagnosticTestServiceService,
      private router: Router) { }
  
    ngOnInit(): void {
      this.testForm = this.fb.group({
        testid: ['', Validators.required],
        testName: ['', Validators.required],
        testPrice: ['', Validators.required],
        normalValue: ['', Validators.required],
        units: ['', Validators.required]
  
      })
     
    }
    get testid(){
      return this.testForm.get('testid');
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
    addTest() {
      this.testService.addTest(this.testForm.value).subscribe(res => {
        this.router.navigate(['diagnostictest/all']);
      },
        error => {
          this.errorMessage = error;
  
        }
      )
      this.submitted=true;
    }
  

}
