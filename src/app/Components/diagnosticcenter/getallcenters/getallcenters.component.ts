import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../../DiagnosticTest/test.service';
import { CenterService } from '../center.service';
import { DiagnosticCenter } from '../diagnosticCenter';

@Component({
  selector: 'app-getallcenters',
  templateUrl: './getallcenters.component.html',
  styleUrls: ['./getallcenters.component.css'],
})
export class GetallcentersComponent implements OnInit {
  center!: any[];
  test!: any[];
  errorMessage!: any;
  searchText: any;
  constructor(
    private centerService: CenterService,
    private router: Router,
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.testService.getAllTest().subscribe((data) => {
      this.test = data;
    });
    this.getAllCenters();
  }
  getAllCenters() {
    this.centerService.getAllDiagnosticCenters().subscribe((data) => {
      this.center = data;
      console.log(data);
    });
  }
  removeCenter(id: number) {
    this.centerService.deleteCenter(id).subscribe((data: DiagnosticCenter) => {
      this.getAllCenters();
      this.router.navigate(['diagnosticCenter/all']);
    });
  }
}
