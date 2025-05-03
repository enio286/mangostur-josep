import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboDeLaVelaYPuntaGallinaTresDiasDosNochesComponent } from './cabo-de-la-vela-ypunta-gallina-tres-dias-dos-noches.component';

describe('CaboDeLaVelaYPuntaGallinaTresDiasDosNochesComponent', () => {
  let component: CaboDeLaVelaYPuntaGallinaTresDiasDosNochesComponent;
  let fixture: ComponentFixture<CaboDeLaVelaYPuntaGallinaTresDiasDosNochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaboDeLaVelaYPuntaGallinaTresDiasDosNochesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaboDeLaVelaYPuntaGallinaTresDiasDosNochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
