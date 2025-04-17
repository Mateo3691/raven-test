import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent {

  @Input() title: string = '';
  @Input() canFilter: boolean = false;
  @Input() isGlobalFilter: boolean = true; // defino que por default la busqueda sea en todas las columnas de la tabla
  @Input() showPaginator: boolean = false;
  @Input() definedColumns: any[] = [];
  @Input() data: any[] = [];
  @Input() pageSize: number = 4;
  @Input() isLoading: boolean = false;
  @Input() errorData: boolean = false;
  searchValue: string = '';
  currentPage = 1;
  /**
   * Propiedad que contiene los datos que se van a mostrar en la tabla
   */
  @Input() columns: any[] = [];
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  get filterColumns(){
    return this.isGlobalFilter ?  
          this.columns.filter((col: any) => col.type !== 'icon').map((col: any) => col.key) :
          this.definedColumns;
  }

  constructor() { }

  /**
   * Método encargado de detectar cuando el usuario clickea un registro de la tabla, y en que columna, y emitir el mismo al componente padre
   * @param registro 
   */
  onRowSelect(registro: {product: any, key: string}) {
    this.rowClicked.emit(registro);
  }

  /**
   * Método encargado de ordenar los registros de la tabla
   * Si bien PrimeNg tiene su propio metodo customizado para ordenar, preferí crearlo para no dejarle todo a la librería
   * y así poder tener un mejor control de lo que se hace
   * @param event 
   */
  customSort(event: any) {
    const {order, field} = event;
    this.data.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (typeof valueA === 'string') {
        return order === 1
          ? valueA.localeCompare(String(valueB))
          : (String(valueB)).localeCompare(valueA);
      } else {
        return order === 1
          ? (valueA as number) - (valueB as number)
          : (valueB as number) - (valueA as number);
      }
    });
  }

  /**
   * Método encargado de limpiar el filtro de la tabla
   * @param event 
   */
  clear(table: Table) {
    this.searchValue = '';
    table.clear();
  }

}
