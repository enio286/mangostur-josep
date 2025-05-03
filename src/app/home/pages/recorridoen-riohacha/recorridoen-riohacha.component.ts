import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recorridoen-riohacha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recorridoen-riohacha.component.html',
  styleUrl: './recorridoen-riohacha.component.css'
})
export class RecorridoenRiohachaComponent {
  monumentos = [
    'Monumento Identidad',
    'Monumento del Palabrero',
    'Monumento Francisco el Hombre',
    'Monumento Mariposas Amarillas',
    'Monumento I Love Riohacha',
    'Monumentos del Poporo',
    'Monumento del Arahuaco',
    'Monumento Parque de los Cañones',
    'Nicolás de Federmann',
    'Monumento de Waleker'
  ];
}
