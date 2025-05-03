import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  showPassword = false;

  constructor(private router: Router) {}

  onLogin() {
    // Aquí irá la lógica de autenticación
    console.log('Login data:', this.loginData);
    // Por ahora solo navegamos a home
    this.router.navigate(['/home']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}