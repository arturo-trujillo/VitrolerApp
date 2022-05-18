import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilinginfoComponent } from './bilinginfo.component';

describe('BilinginfoComponent', () => {
  let component: BilinginfoComponent;
  let fixture: ComponentFixture<BilinginfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilinginfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
