import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRentalPage } from './new-rental.page';

describe('NewRentalPage', () => {
  let component: NewRentalPage;
  let fixture: ComponentFixture<NewRentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
