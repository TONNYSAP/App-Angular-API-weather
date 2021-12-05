import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClime2Component } from './search-clime2.component';

describe('SearchClime2Component', () => {
  let component: SearchClime2Component;
  let fixture: ComponentFixture<SearchClime2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClime2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClime2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
