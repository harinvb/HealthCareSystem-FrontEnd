import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../../DiagnosticTest/test.service';
import { CenterService } from '../center.service';

@Component({
  selector: 'app-addtesttocenter',
  templateUrl: './addtesttocenter.component.html',
  styleUrls: ['./addtesttocenter.component.css'],
})
export class AddtesttocenterComponent implements OnInit {
  test!: any[];
  centertest!: any[];
  centerid!: number;
  constructor(
    private centerService: CenterService,
    private testService: TestService,
    private actRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.centerid = this.actRouter.snapshot.params['diagonasticCenterid'];
    //this.testid=this.actRouter.snapshot.params['diagonasticTestid'];
    this.testService.getAllTest().subscribe((data) => {
      this.test = data;
    });
  }
  addTest(testid: number) {
    console.log(this.centerid, testid);
    this.centerService
      .addTestToCenter(this.centerid, testid)
      .subscribe((data) => {
        this.router.navigate(['diagnosticCenter/testDetails/' + this.centerid]);
      });
  }
}
