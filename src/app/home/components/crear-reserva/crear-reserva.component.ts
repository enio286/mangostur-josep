import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Reserva } from '../../../models/reserva.model';
import { ReservaService } from '../../../service/reserva.service';
import { ToastrService } from 'ngx-toastr';

interface Tour {
  id: number;
  title: string;
  price: number;
}

@Component({
  selector: 'app-crear-reserva',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  reservaForm!: FormGroup;
  loading: boolean = false;
  minDate!: string;
  tours: Tour[] = [
    { id: 1, title: 'Recorrido en Riohacha', price: 50000 },
    { id: 2, title: 'Pasadía Cabo de la Vela', price: 120000 },
    { id: 3, title: 'Cabo de la Vela 2D/1N', price: 250000 },
    { id: 4, title: 'Cabo de la Vela 3D/2N', price: 350000 },
    { id: 5, title: 'Cabo + Punta Gallina 2D/1N', price: 300000 },
    { id: 6, title: 'Cabo + Punta Gallina 3D/2N', price: 450000 },
    { id: 7, title: 'Cabo + Punta Gallina + Mayapo 4D/3N', price: 600000 },
    { id: 8, title: 'Tour Completo 5D/4N', price: 750000 },
    { id: 9, title: 'Tarde de Ranchería', price: 80000 },
    { id: 10, title: 'Pasadía Camarones', price: 100000 },
    { id: 11, title: 'Pasadía Palomino', price: 100000 }
  ];

  constructor(
    private fb: FormBuilder,
    private reservaService: ReservaService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  private initForm(): void {
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];

    this.reservaForm = this.fb.group({
      fecha_reserva: ['', [Validators.required]],
      estado: ['pendiente', Validators.required],
      userId: ['', [Validators.required, Validators.min(1)]],
      tourId: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      cantidad_personas: ['', [Validators.required, Validators.min(1), Validators.max(20)]]
    });
  }

  getTourPrice(): number {
    const tourId = this.reservaForm.get('tourId')?.value;
    const tour = this.tours.find(t => t.id === Number(tourId));
    return tour ? tour.price : 0;
  }

  getTotal(): number {
    const cantidadPersonas = this.reservaForm.get('cantidad_personas')?.value || 0;
    return this.getTourPrice() * cantidadPersonas;
  }

  onSubmit() {
    if (this.reservaForm.valid && !this.loading) {
      this.loading = true;

      const nuevaReserva: Reserva = {
        id: 0,
        ...this.reservaForm.value,
        fecha_reserva: new Date(this.reservaForm.value.fecha_reserva),
        precio_total: this.getTotal()
      };

      this.reservaService.crearReserva(nuevaReserva).subscribe({
        next: (reservaCreada) => {
          this.toastr.success('Reserva creada exitosamente');
          this.router.navigate(['/reservas']);
        },
        error: (error) => {
          this.toastr.error('Error al crear la reserva');
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    } else {
      this.markFormGroupTouched(this.reservaForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.reservaForm.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Este campo es requerido';
      if (control.errors['email']) return 'Email inválido';
      if (control.errors['pattern']) return 'Formato inválido';
      if (control.errors['min']) return 'Valor mínimo no alcanzado';
      if (control.errors['max']) return 'Valor máximo excedido';
      if (control.errors['minlength']) return 'Longitud mínima no alcanzada';
    }
    return '';
  }
}
