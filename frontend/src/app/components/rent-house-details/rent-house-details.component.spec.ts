import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentHouseDetailsComponent } from './rent-house-details.component';

describe('RentHouseDetailsComponent', () => {
  let component: RentHouseDetailsComponent;
  let fixture: ComponentFixture<RentHouseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentHouseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentHouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
