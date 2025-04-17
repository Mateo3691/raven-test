import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() isUserLogged: boolean = false;
  @Input() userName: string = "";
  @Output() finishSession: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeThemes: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  get iconThemeName(): string {
    return localStorage.getItem('theme') === 'dark' ? 'pi pi-sun' : 'pi pi-moon';
  }

  /**
   * Metodo encargado de cambiar el tema de la aplicacion. Al inicio estará en modo claro y cada vez que se clickee el boton de cambio
   * de tema, se cambiara el tema de la aplicacion al opuesto
   * @returns {void}
   */
  changeTheme(): void {
    this.changeThemes.emit();
  }

  /**
   * Metodo que cierra la sesion, borra los datos de autorizacio del localStorage y redirige a la pagina de login
   * @returns {void}
   */
  terminarSesion(): void {
    this.finishSession.emit();
  }

}
