import { Component, OnInit } from '@angular/core';
import { estadisticas } from '../../../data-mocks/datos-estadisticas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  columns = [
    {
      key: "id",
      description: "ID producto",
    },
    {
      key: "producto",
      description: "Producto",
    },
    {
      key: "cantidad",
      description: "Cantidad",
    },
    {
      key: "fecha",
      description: "Fecha",
    },
    {
      key: "precio",
      description: "Precio",
    }
  ]

  tableData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tableData = estadisticas;
  }

  onRowClicked(data: any): void{
    console.log("DATA",data);
  }

}
