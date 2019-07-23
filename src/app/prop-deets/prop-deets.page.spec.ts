import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropDeetsPage } from './prop-deets.page';

describe('PropDeetsPage', () => {
  let component: PropDeetsPage;
  let fixture: ComponentFixture<PropDeetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropDeetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropDeetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
