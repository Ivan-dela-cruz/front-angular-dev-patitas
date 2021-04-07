import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalUserRescatistaComponent } from './portal-user-rescatista.component';

describe('PortalUserRescatistaComponent', () => {
  let component: PortalUserRescatistaComponent;
  let fixture: ComponentFixture<PortalUserRescatistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalUserRescatistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalUserRescatistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
