import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationstaffingserviceComponent } from './applicationstaffingservice.component';

describe('ApplicationstaffingserviceComponent', () => {
  let component: ApplicationstaffingserviceComponent;
  let fixture: ComponentFixture<ApplicationstaffingserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationstaffingserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationstaffingserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
