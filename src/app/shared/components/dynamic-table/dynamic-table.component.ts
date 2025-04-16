import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() title: string = '';
  @Input() canFilter: boolean = false;
  @Input() showPaginator: boolean = false;
  @Input() data: any[] = [];
  @Input() pageSize: number = 4;
  
  currentPage = 1;
  /**
   * Propiedad que contiene los datos que se van a mostrar en la tabla
   */
  @Input() columns: any[] = [];
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();
  
  filteredData: any[] = []; // lo uso para que siempre sea el resultado de filtrar la data por cualquiera que sea el filtro

  constructor() { }

  ngOnInit(): void {
  }

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

}
