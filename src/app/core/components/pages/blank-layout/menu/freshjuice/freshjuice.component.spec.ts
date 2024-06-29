import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshjuiceComponent } from './freshjuice.component';

describe('FreshjuiceComponent', () => {
  let component: FreshjuiceComponent;
  let fixture: ComponentFixture<FreshjuiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreshjuiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreshjuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
