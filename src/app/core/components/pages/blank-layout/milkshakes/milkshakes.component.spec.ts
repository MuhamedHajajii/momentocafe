import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkshakesComponent } from './milkshakes.component';

describe('MilkshakesComponent', () => {
  let component: MilkshakesComponent;
  let fixture: ComponentFixture<MilkshakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilkshakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MilkshakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
