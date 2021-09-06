import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewaNewFormComponent } from './sewa-new-form.component';

describe('SewaNewFormComponent', () => {
  let component: SewaNewFormComponent;
  let fixture: ComponentFixture<SewaNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SewaNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SewaNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
