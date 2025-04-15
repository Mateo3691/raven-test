import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Metodo encargado de cambiar el tema de la aplicacion. Al inicio estará en modo claro y cada vez que se clickee el boton de cambio
   * de tema, se cambiara el tema de la aplicacion al opuesto
   * @returns {void}
   */
  changeTheme(): void {

  }

  /**
   * Metodo que cierra la sesion, borra los datos de autorizacio del localStorage y redirige a la pagina de login
   * @returns {void}
   */
  terminarSesion(): void {

  }

}
