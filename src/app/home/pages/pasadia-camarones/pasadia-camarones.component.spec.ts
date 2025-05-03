import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadiaCamaronesComponent } from './pasadia-camarones.component';

describe('PasadiaCamaronesComponent', () => {
  let component: PasadiaCamaronesComponent;
  let fixture: ComponentFixture<PasadiaCamaronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasadiaCamaronesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasadiaCamaronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
