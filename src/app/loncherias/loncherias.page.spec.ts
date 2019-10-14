import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoncheriasPage } from './loncherias.page';

describe('LoncheriasPage', () => {
  let component: LoncheriasPage;
  let fixture: ComponentFixture<LoncheriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoncheriasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoncheriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
