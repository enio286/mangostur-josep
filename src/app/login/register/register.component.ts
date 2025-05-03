import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  registerData = {
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    password: ''
  };

  showPassword = false;

  constructor(private router: Router) {}

  onRegister() {
    // Aquí irá la lógica de registro
    console.log('Register data:', this.registerData);
    
    // Validaciones básicas
    if (!this.validateEmail(this.registerData.email)) {
      alert('Por favor ingrese un correo válido');
      return;
    }

    if (!this.validatePhone(this.registerData.telefono)) {
      alert('Por favor ingrese un número de teléfono válido');
      return;
    }

    // Por ahora solo navegamos al login
    this.router.navigate(['/login']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Validación de email
  private validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }

  // Validación de teléfono
  private validatePhone(phone: string): boolean {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  }
}