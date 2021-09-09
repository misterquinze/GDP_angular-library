import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelangganEditFormComponent } from './pelanggan-edit-form.component';

describe('PelangganEditFormComponent', () => {
  let component: PelangganEditFormComponent;
  let fixture: ComponentFixture<PelangganEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelangganEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelangganEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
