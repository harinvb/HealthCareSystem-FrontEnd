import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CenterService } from '../center.service';

@Component({
  selector: 'app-addcenter',
  templateUrl: './addcenter.component.html',
  styleUrls: ['./addcenter.component.css']
})
export class AddcenterComponent implements OnInit {
  centerForm!: FormGroup;
  errorMessage!: string;

  constructor(private centerService: CenterService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.centerForm = this.fb.group({
      name: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      contactEmail: [''],

    })
  }
  get contactEmail(){
    return this.centerForm.get('contactEmail');
  }
  get contactNo(){
    return this.centerForm.get('contactNo');
  }
  get address(){
    return this.centerForm.get('address');
  }
  get name(){
    return this.centerForm.get('name');
  }
  addCenter() {
    this.centerService.addDiagnosticCenter(this.centerForm.value).subscribe(res => {
      this.router.navigate(['diagnosticCenter/all']);
    }, error => {
      this.errorMessage = error;
    })

  }

}
