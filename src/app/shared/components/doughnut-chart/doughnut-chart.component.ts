import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent{

  @Input() configOptions: any = {};
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
