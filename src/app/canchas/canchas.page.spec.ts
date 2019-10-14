import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchasPage } from './canchas.page';

describe('CanchasPage', () => {
  let component: CanchasPage;
  let fixture: ComponentFixture<CanchasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanchasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
