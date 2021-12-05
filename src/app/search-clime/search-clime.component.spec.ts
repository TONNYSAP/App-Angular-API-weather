import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClimeComponent } from './search-clime.component';

describe('SearchClimeComponent', () => {
  let component: SearchClimeComponent;
  let fixture: ComponentFixture<SearchClimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
