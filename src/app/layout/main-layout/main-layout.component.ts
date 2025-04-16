import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  get userName(){
    return this.authService.user;
  }

  // Podria usar directamente la variable desde el service, pero esta es una forma mas prolija de hacerlo
  get isUserLogged(){
    return this.authService.isUserLogged;
  }

  ngOnInit(): void {
  }

  /**
   * Metodo encargao de cambiar el tema de la aplicacion, que puede ser claro u oscuro
   * @returns void
   */
  changeColorTheme(){
    const body = document.body;
    body.classList.toggle('dark-theme');
  }

  /**
   * Metodo encargado de cerrar la sesion del usuario
   * @returns void
   */
  logOutUser(){
    this.authService.logOut();
    // al recargar y querer entrar nuevamente ya se activa el guard de la ruta, y si no hay un usuario logueado, lo redirige al login
    window.location.reload();
  }

}
