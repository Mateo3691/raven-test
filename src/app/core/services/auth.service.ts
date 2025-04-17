import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MOCK_USERS } from '../../data-mocks/users-casos';
import { Login } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;
  user: string = ''; // En esta variable guardo el nombre del usuario para usarlo 

  constructor(private router: Router) { }

  get isUserLogged(): boolean {
    return this.isLogged;
  }

  /**
   * Método encargado de buscra coincidencias con la "base de datos" de usuarios
   * @param data Información del usuario
   * @returns 
   */
  login(data: Login): Observable<boolean> {
    // Aca se podria guardar la informacion del usuario en el local storage y tomarla desde ahi en el dashboar, pero 
    // no lo hice porque no es necesario para el funcionamiento de la app
    this.isLogged = false;
    const {email, password} = data;
    const emailExiste = MOCK_USERS.find(user => user.email === email);
    if(!emailExiste)
      return of(false).pipe(delay(500));

    const passValido = emailExiste.password === password;
    if(!passValido)
      return of(false).pipe(delay(500));

    this.isLogged = true;
    this.user = emailExiste.name;
    return of(this.isLogged).pipe(delay(500));
  }

  /**
   * Metodo que se acciona al desloguear a una persona, limpa la data de validacion del usuario
   */
  logOut(): void {
    this.isLogged = false;
    this.user = '';
    this.router.navigate(['/login'])
  }
}
