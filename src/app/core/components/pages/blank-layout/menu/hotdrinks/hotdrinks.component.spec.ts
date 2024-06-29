import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdrinksComponent } from './hotdrinks.component';

describe('HotdrinksComponent', () => {
  let component: HotdrinksComponent;
  let fixture: ComponentFixture<HotdrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotdrinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotdrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
