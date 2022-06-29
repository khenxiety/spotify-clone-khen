import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottombarMobileComponent } from './bottombar-mobile.component';

describe('BottombarMobileComponent', () => {
  let component: BottombarMobileComponent;
  let fixture: ComponentFixture<BottombarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottombarMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottombarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
