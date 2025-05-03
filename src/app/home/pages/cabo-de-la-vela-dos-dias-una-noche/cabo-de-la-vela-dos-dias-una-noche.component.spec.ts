import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboDeLaVelaDosDiasUnaNocheComponent } from './cabo-de-la-vela-dos-dias-una-noche.component';

describe('CaboDeLaVelaDosDiasUnaNocheComponent', () => {
  let component: CaboDeLaVelaDosDiasUnaNocheComponent;
  let fixture: ComponentFixture<CaboDeLaVelaDosDiasUnaNocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaboDeLaVelaDosDiasUnaNocheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaboDeLaVelaDosDiasUnaNocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
