import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-alltests',
  templateUrl: './alltests.component.html',
  styleUrls: ['./alltests.component.css']
})
export class AlltestsComponent implements OnInit {
  DiagnosticTest!: any[];

  constructor(private testService:TestService, private router:Router) { }

  ngOnInit(): void {
    this.testService.getAllTest().subscribe((data) => {
      this.DiagnosticTest = data;console.log(data);
    });
  }

}
