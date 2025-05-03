import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Tour {
  id: number;
  title: string;
  description: string;
  duration: string;
  nights?: number;
  image: string;
  popular?: boolean;
  price: number;
  destinations: string[];
}

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {
  constructor(private router: Router) {}

  verDetalles(tourId: number) {
    // Mapear cada ID a su ruta correspondiente
    const rutasPorId: { [key: number]: string } = {
      1: '/recorridoenriohacha',
      2: '/pasadiacabodelavela',
      3: '/cabodelaveladosdiasunanoche',
      4: '/cabodelavelatresdiasdosnoches',
      5: '/cabodelavelaypuntagallinadosdiasunanoche',
      6: '/cabodelavelaypuntagallinatresdiasdosnoches',
      7: '/cabodelavelapuntagallinacuatrodiasdrestresnoches',
      8: '/cabodelavelapuntagallinacamaronescincodiascuatronoches',
      9: '/tarde-de-rancheria',
      10: '/pasadiacamarones',
      11: '/pasadiapalomino'
    };

    const ruta = rutasPorId[tourId];
    if (ruta) {
      this.router.navigate([ruta]);
    }
  }
  tours: Tour[] = [
    {
      id: 1,
      title: 'Recorrido en Riohacha',
      description: 'Explora la capital de La Guajira, conoce su malecón, cultura y gastronomía local.',
      duration: '1 día',
      image: 'assets/images/riohacha/riohacha2.jpg',
      price: 100000,
      destinations: ['Riohacha']
    },
    {
      id: 2,
      title: 'Pasadía Cabo de la Vela',
      description: 'Disfruta de las hermosas playas y paisajes del Cabo de la Vela.',
      duration: '1 día',
      image: 'assets/images/cabo-vela.jpg',
      price: 200000,
      destinations: ['Cabo de la Vela']
    },
    {
      id: 3,
      title: 'Cabo de la Vela - 2 días/1 noche',
      description: 'Experiencia completa con hospedaje, incluyendo atardecer y amanecer en el desierto.',
      duration: '2 días',
      nights: 1,
      image: 'assets/images/cabo-2dias.jpg',
      price: 400000,
      destinations: ['Cabo de la Vela'],
      popular: true
    },
    {
      id: 4,
      title: 'Cabo de la Vela - 3 días/2 noches',
      description: 'Aventura extendida para disfrutar más tiempo de este paraíso.',
      duration: '3 días',
      nights: 2,
      image: 'assets/images/cabo-3dias.jpg',
      price: 550000,
      destinations: ['Cabo de la Vela']
    },
    {
      id: 5,
      title: 'Cabo de la Vela y Punta Gallina - 2 días/1 noche',
      description: 'Combina dos destinos increíbles en una aventura única.',
      duration: '2 días',
      nights: 1,
      image: 'assets/images/cabo-punta.jpg',
      price: 550000,
      destinations: ['Cabo de la Vela', 'Punta Gallina']
    },
    {
      id: 6,
      title: 'Cabo de la Vela y Punta Gallina - 3 días/2 noche',
      description: 'Combina dos destinos increíbles en una aventura única.',
      duration: '2 días',
      nights: 1,
      image: 'assets/images/cabo-punta.jpg',
      price: 700000,
      destinations: ['Cabo de la Vela', 'Punta Gallina']
    },
    {
      id: 7,
      title: 'Cabo de la Vela, Punta Gallina y Mayapo - 4 días/3 noches',
      description: 'Recorre los principales destinos de La Guajira en una aventura inolvidable.',
      duration: '4 días',
      nights: 3,
      image: 'assets/images/cabo-punta-mayapo.jpg',
      price: 1000000,
      destinations: ['Cabo de la Vela', 'Punta Gallina', 'Mayapo']
    }
    ,{
      id: 8,
      title: 'Cabo de la Vela, Punta Gallina, Mayapo y Camarones - 5 días/4 noches',
      description: 'La experiencia más completa de La Guajira visitando cuatro destinos emblemáticos.',
      duration: '5 días',
      nights: 4,
      image: 'assets/images/cabo-punta-mayapo-camarones.jpg',
      price: 1200000,
      destinations: ['Cabo de la Vela', 'Punta Gallina', 'Mayapo', 'Camarones']
    }
    ,{
      id: 9,
      title: 'Tarde de ranchería',
      description: 'Experimenta la auténtica vida wayúu en una ranchería tradicional.',
      duration: '1 día',
      nights: 0,
      image: 'assets/images/rancheria.jpg',
      price: 120000,
      destinations: ['Ranchería']
    }
    ,{
      id: 10,
      title: 'Pasadía Camarones - Santuario de los Flamencos',
      description: 'Visita el majestuoso Santuario de Flora y Fauna Los Flamencos en Camarones.',
      duration: '1 día',
      nights: 0,
      image: 'assets/images/flamencos.jpg',
      price: 150000,
      destinations: ['Camarones']
    }
    ,{
      id: 11,
      title: 'Pasadía Palomino',
      description: 'Disfruta de un día completo en las hermosas playas de Palomino.',
      duration: '1 día',
      nights: 0,
      image: 'assets/images/palomino.jpg',
      price: 150000,
      destinations: ['Palomino']
    }
   
  ];


  filteredTours: Tour[] = [];
  selectedDuration: string = '';
  selectedDestination: string = '';

  ngOnInit() {
    this.filteredTours = [...this.tours];
  }

  filterTours() {
    if (!this.selectedDuration && !this.selectedDestination) {
      this.filteredTours = [...this.tours];
      return;
    }

    this.filteredTours = this.tours.filter(tour => {
      // Extraer solo el número de la duración (ej: "2 días" -> "2")
      const tourDurationNumber = tour.duration.split(' ')[0];
      
      const durationMatch = !this.selectedDuration || 
        tourDurationNumber === this.selectedDuration;

      const destinationMatch = !this.selectedDestination || 
        tour.destinations.some(dest => {
          if (this.selectedDestination === 'cabo') return dest.includes('Cabo');
          if (this.selectedDestination === 'punta') return dest.includes('Punta');
          if (this.selectedDestination === 'mayapo') return dest.includes('Mayapo');
          if (this.selectedDestination === 'camarones') return dest.includes('Camarones');
          if (this.selectedDestination === 'palomino') return dest.includes('Palomino');
          return false;
        });
      
      return durationMatch && destinationMatch;
    });
  }
}