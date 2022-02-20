import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItdirectplacementComponent } from './itdirectplacement.component';

describe('ItdirectplacementComponent', () => {
  let component: ItdirectplacementComponent;
  let fixture: ComponentFixture<ItdirectplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItdirectplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItdirectplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
