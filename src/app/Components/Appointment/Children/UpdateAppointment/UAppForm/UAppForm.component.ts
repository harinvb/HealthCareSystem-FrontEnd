import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TestResult } from 'src/app/Interfaces/TestResult';

@Component({
  selector: 'app-UAppForm',
  templateUrl: './UAppForm.component.html',
  styleUrls: ['./UAppForm.component.css'],
})
export class UAppFormComponent implements OnInit {
  testAddForm!: FormGroup;
  testRes!: TestResult;
  @Output('testResultAddEvent')
  testResultAddEvent: EventEmitter<TestResult> = new EventEmitter();
  constructor(private formBuild: FormBuilder) {}

  ngOnInit() {
    this.testAddForm = this.formBuild.group({
      testReading: ['', Validators.required],
      testcondition: [null, Validators.required],
      testName: ['', Validators.required],
    });
  }
  get tests() {
    return this.testAddForm.get('testName');
  }
  submit() {
    console.log(this.testAddForm.value as TestResult);
    this.testResultAddEvent.emit(this.testAddForm.value as TestResult);
  }
}
