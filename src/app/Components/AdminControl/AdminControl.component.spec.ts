/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminControlComponent } from './AdminControl.component';

describe('AdminControlComponent', () => {
  let component: AdminControlComponent;
  let fixture: ComponentFixture<AdminControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
