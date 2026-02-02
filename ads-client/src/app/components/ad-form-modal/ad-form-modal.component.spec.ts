import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFormModalComponent } from './ad-form-modal.component';

describe('AdFormModalComponent', () => {
  let component: AdFormModalComponent;
  let fixture: ComponentFixture<AdFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdFormModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
