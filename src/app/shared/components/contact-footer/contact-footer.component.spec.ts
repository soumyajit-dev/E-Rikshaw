import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFooterComponent } from './contact-footer.component';

describe('ContactFooterComponent', () => {
  let component: ContactFooterComponent;
  let fixture: ComponentFixture<ContactFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
