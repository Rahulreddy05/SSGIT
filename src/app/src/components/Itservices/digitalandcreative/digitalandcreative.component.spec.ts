import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalandcreativeComponent } from './digitalandcreative.component';

describe('DigitalandcreativeComponent', () => {
  let component: DigitalandcreativeComponent;
  let fixture: ComponentFixture<DigitalandcreativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalandcreativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalandcreativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
