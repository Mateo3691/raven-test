import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

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
    },
    {
      key: "graficos",
      description: "graficos",
      type: "icon",
      icon: "pi pi-chart-bar"
    },
  ]

  errorData: boolean = false;
  loadingData: boolean = false;
  tableData: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.useServiceData();
  }

  useServiceData(): void{
    this.dataService.getData().subscribe((res) => {
      this.tableData = res;
    })
  }

  onRowClicked(data: any): void{
    console.log("DATA",data);
  }

}
