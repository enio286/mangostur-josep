import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  
  private apiUrl = 'http://localhost:3000/api'; // Tu URL de API

  constructor(private http: HttpClient) {
    // Verificar si hay usuario en localStorage al iniciar
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  register(userData: Omit<User, 'id' | 'createdAt'>): Observable<User> {
    const newUser = {
      ...userData,
      createdAt: new Date(),
      active: true
    };
    
    return this.http.post<User>(`${this.apiUrl}/users/register`, newUser);
  }

  updateUser(userId: string, userData: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${userId}`, userData);
  }

  deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${userId}`);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}