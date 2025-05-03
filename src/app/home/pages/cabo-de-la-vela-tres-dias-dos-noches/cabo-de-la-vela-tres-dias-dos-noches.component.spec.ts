import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboDeLaVelaTresDiasDosNochesComponent } from './cabo-de-la-vela-tres-dias-dos-noches.component';

describe('CaboDeLaVelaTresDiasDosNochesComponent', () => {
  let component: CaboDeLaVelaTresDiasDosNochesComponent;
  let fixture: ComponentFixture<CaboDeLaVelaTresDiasDosNochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaboDeLaVelaTresDiasDosNochesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaboDeLaVelaTresDiasDosNochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
