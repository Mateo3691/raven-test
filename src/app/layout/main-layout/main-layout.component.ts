import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ThemesService } from '../../core/services/themes.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private authService: AuthService, private themesService: ThemesService) { }

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
    this.themesService.toggleTheme();
  }

  /**
   * Metodo encargado de cerrar la sesion del usuario
   * @returns void
   */
  logOutUser(){
    this.authService.logOut();
  }

}
