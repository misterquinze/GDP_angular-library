import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelangganNewFormComponent } from './pelanggan-new-form.component';

describe('PelangganNewFormComponent', () => {
  let component: PelangganNewFormComponent;
  let fixture: ComponentFixture<PelangganNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelangganNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelangganNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
