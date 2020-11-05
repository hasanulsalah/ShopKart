import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkartStylesComponent } from './shopkart-styles.component';

describe('ShopkartStylesComponent', () => {
  let component: ShopkartStylesComponent;
  let fixture: ComponentFixture<ShopkartStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopkartStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkartStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
