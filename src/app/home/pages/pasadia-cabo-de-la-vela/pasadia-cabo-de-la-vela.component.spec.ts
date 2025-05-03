import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadiaCaboDeLaVelaComponent } from './pasadia-cabo-de-la-vela.component';

describe('PasadiaCaboDeLaVelaComponent', () => {
  let component: PasadiaCaboDeLaVelaComponent;
  let fixture: ComponentFixture<PasadiaCaboDeLaVelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasadiaCaboDeLaVelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasadiaCaboDeLaVelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
