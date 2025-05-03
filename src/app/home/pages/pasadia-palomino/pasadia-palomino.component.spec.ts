import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasadiaPalominoComponent } from './pasadia-palomino.component';

describe('PasadiaPalominoComponent', () => {
  let component: PasadiaPalominoComponent;
  let fixture: ComponentFixture<PasadiaPalominoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasadiaPalominoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasadiaPalominoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
