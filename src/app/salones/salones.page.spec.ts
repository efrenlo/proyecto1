import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonesPage } from './salones.page';

describe('SalonesPage', () => {
  let component: SalonesPage;
  let fixture: ComponentFixture<SalonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
