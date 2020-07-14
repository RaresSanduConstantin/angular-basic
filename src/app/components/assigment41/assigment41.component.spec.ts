import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assigment41Component } from './assigment41.component';

describe('Assigment41Component', () => {
  let component: Assigment41Component;
  let fixture: ComponentFixture<Assigment41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assigment41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assigment41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
