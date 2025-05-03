import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TardeDeRancheriaComponent } from './tarde-de-rancheria.component';

describe('TardeDeRancheriaComponent', () => {
  let component: TardeDeRancheriaComponent;
  let fixture: ComponentFixture<TardeDeRancheriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TardeDeRancheriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TardeDeRancheriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
