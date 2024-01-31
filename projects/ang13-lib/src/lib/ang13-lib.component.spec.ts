import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang13LibComponent } from './ang13-lib.component';

describe('Ang13LibComponent', () => {
  let component: Ang13LibComponent;
  let fixture: ComponentFixture<Ang13LibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ang13LibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ang13LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
