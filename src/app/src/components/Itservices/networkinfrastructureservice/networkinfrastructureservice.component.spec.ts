import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkinfrastructureserviceComponent } from './networkinfrastructureservice.component';

describe('NetworkinfrastructureserviceComponent', () => {
  let component: NetworkinfrastructureserviceComponent;
  let fixture: ComponentFixture<NetworkinfrastructureserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkinfrastructureserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkinfrastructureserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
