import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CenterService } from '../center.service';

@Component({
  selector: 'app-testdetails',
  templateUrl: './testdetails.component.html',
  styleUrls: ['./testdetails.component.css']
})
export class TestdetailsComponent implements OnInit {
  tests!: any[];
  constructor(private centerService:CenterService, private actRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTests(this.actRouter.snapshot.params['diagonasticCenterid']);
  }
  getTests(centerid:number){
    console.log(centerid);
    this.centerService.getTestsById(centerid).subscribe(data=>{
      this.tests=data;
      console.log(data);
      
    },error=>{console.log(error)})
  }
}
