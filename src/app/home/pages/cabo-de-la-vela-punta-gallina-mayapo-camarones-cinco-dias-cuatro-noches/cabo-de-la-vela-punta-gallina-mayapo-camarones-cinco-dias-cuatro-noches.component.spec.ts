import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboDeLaVelaPuntaGallinaMayapoCamaronesCincoDiasCuatroNochesComponent } from './cabo-de-la-vela-punta-gallina-mayapo-camarones-cinco-dias-cuatro-noches.component';

describe('CaboDeLaVelaPuntaGallinaMayapoCamaronesCincoDiasCuatroNochesComponent', () => {
  let component: CaboDeLaVelaPuntaGallinaMayapoCamaronesCincoDiasCuatroNochesComponent;
  let fixture: ComponentFixture<CaboDeLaVelaPuntaGallinaMayapoCamaronesCincoDiasCuatroNochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaboDeLaVelaPuntaGallinaMayapoCamaronesCincoDiasCuatroNochesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaboDeLaVelaPuntaGallinaMayapoCamaronesCincoDiasCuatroNochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
