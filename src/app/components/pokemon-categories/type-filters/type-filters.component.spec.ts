import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFiltersComponent } from './type-filters.component';

describe('TypeFiltersComponent', () => {
  let component: TypeFiltersComponent;
  let fixture: ComponentFixture<TypeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
