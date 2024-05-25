import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let mockActivatedRoute: Partial<ActivatedRoute>;

  beforeEach(() => {
    mockActivatedRoute = {
      queryParams: of({
        id: 1
      }),
      snapshot: {
        params: { id: 1 } as any
      } as ActivatedRouteSnapshot
    }
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        RouterTestingModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
