import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuEditFormComponent } from './buku-edit-form.component';

describe('BukuEditFormComponent', () => {
  let component: BukuEditFormComponent;
  let fixture: ComponentFixture<BukuEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BukuEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
