import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorridoenRiohachaComponent } from './recorridoen-riohacha.component';

describe('RecorridoenRiohachaComponent', () => {
  let component: RecorridoenRiohachaComponent;
  let fixture: ComponentFixture<RecorridoenRiohachaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecorridoenRiohachaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecorridoenRiohachaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
