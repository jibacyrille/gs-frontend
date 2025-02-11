import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationAcaComponent } from './organisation-aca.component';

describe('OrganisationAcaComponent', () => {
  let component: OrganisationAcaComponent;
  let fixture: ComponentFixture<OrganisationAcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganisationAcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganisationAcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
