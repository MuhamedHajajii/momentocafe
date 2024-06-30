import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAdminstrationComponent } from './delivery-adminstration.component';

describe('DeliveryAdminstrationComponent', () => {
  let component: DeliveryAdminstrationComponent;
  let fixture: ComponentFixture<DeliveryAdminstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryAdminstrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryAdminstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
