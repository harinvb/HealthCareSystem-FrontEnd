import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterService } from '../center.service';
import { DiagnosticCenter } from '../diagnosticCenter';

@Component({
  selector: 'app-updatecenter',
  templateUrl: './updatecenter.component.html',
  styleUrls: ['./updatecenter.component.css']
})
export class UpdatecenterComponent implements OnInit {
  center!: DiagnosticCenter;
  centerId!: number;
  constructor(private centerService:CenterService,private actRouter: ActivatedRoute, private router:Router) { }
  centerForm!:FormGroup;
  ngOnInit(): void {
    this.center= new DiagnosticCenter();
    this.centerId=this.actRouter.snapshot.params['diagonasticCenterid'];
    this.centerService.getCenterById(this.centerId).subscribe(data=>{
      this.center=data;
    })
  }
  // get contactEmail(){
  //   return this.centerForm.get('contactEmail');
  // }
  // get contactNo(){
  //   return this.centerForm.get('contactNo');
  // }
  // get address(){
  //   return this.centerForm.get('address');
  // }
  // get name(){
  //   return this.centerForm.get('name');
  // }
  updateDcenter(){
    this.centerService.updateCenter(this.center).subscribe(res=>{
      this.router.navigate(['diagnosticCenter/all']);
    })
  }

}
