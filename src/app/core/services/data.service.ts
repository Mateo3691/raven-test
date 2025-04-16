import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { estadisticas } from '../../data-mocks/datos-estadisticas';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /**
   * Metodo que retorna los datos mockeados que simulan la respuesta de una API
   * @returns Observable<any[]>
   */
  getData(): Observable<any[]> {
    return of(estadisticas).pipe(delay(1000));
  }
}
