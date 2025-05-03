import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboDeLaVelaPuntaGallinaMayapoCuatroDiasTresNochesComponent } from './cabo-de-la-vela-punta-gallina-mayapo-cuatro-dias-tres-noches.component';

describe('CaboDeLaVelaPuntaGallinaMayapoCuatroDiasTresNochesComponent', () => {
  let component: CaboDeLaVelaPuntaGallinaMayapoCuatroDiasTresNochesComponent;
  let fixture: ComponentFixture<CaboDeLaVelaPuntaGallinaMayapoCuatroDiasTresNochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaboDeLaVelaPuntaGallinaMayapoCuatroDiasTresNochesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaboDeLaVelaPuntaGallinaMayapoCuatroDiasTresNochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
