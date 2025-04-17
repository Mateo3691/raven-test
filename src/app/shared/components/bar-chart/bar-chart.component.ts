import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @Input() data: any = {};
  @Output() selectDataEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  /**
   * Este metodo notifica cuando se selecciona un dato del grafico para emitir sus valores
   * @param data 
   */
  selectData(data: any): void {
    this.selectDataEmitter.emit(data);
  }

}
