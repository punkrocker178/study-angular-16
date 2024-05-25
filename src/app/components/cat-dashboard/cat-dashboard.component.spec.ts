import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDashboardComponent } from './cat-dashboard.component';

describe('CatDashboardComponent', () => {
  let component: CatDashboardComponent;
  let fixture: ComponentFixture<CatDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
