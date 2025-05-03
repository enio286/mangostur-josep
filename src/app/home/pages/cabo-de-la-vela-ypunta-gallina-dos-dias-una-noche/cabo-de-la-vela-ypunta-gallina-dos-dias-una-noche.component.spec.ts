import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboDeLaVelaYPuntaGallinaDosDiasUnaNocheComponent } from './cabo-de-la-vela-ypunta-gallina-dos-dias-una-noche.component';

describe('CaboDeLaVelaYPuntaGallinaDosDiasUnaNocheComponent', () => {
  let component: CaboDeLaVelaYPuntaGallinaDosDiasUnaNocheComponent;
  let fixture: ComponentFixture<CaboDeLaVelaYPuntaGallinaDosDiasUnaNocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaboDeLaVelaYPuntaGallinaDosDiasUnaNocheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaboDeLaVelaYPuntaGallinaDosDiasUnaNocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
