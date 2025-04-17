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
      preffix: "$",
      description: "Precio",
    },
    {
      key: "ventas_mensuales",
      description: "Ventas mensuales",
      type: "icon",
      icon: "pi pi-chart-bar"
    },
    {
      key: "comp_product",
      description: "Comparación",
      type: "icon",
      icon: "pi-eye"
    }
  ]

  errorData: boolean = false;
  loadingData: boolean = false;
  tableData: any[] = [];
  showModal: boolean = false;
  selectedRowGraphData: any = null;
  tipoGrafico: string = "bar";
  modalTitle: string = "";
  isLoading: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.useServiceData();
  }

  useServiceData(): void{
    this.isLoading = true;
    this.dataService.getData().subscribe((res) => {
      this.tableData = res;
      this.isLoading = false;
    },  (err) => {
      this.errorData = true;
      this.loadingData = false;
    })
  }

  /**
   * Dependiendo del icono que se haya presionado en la tabla de datos, en este componente se abrirá un modal con el grafico correspondiente
   * y se mostrara la data correspondiente a ese grafico
   * @param data 
   */
  onRowClicked(data: any): void{
    const {product, key} = data;
    if(key === "ventas_mensuales" || key === "comp_product"){
      this.modalTitle = key === "ventas_mensuales" ? "Ventas mensuales" : "Comparación de productos";
      this.tipoGrafico = key === "ventas_mensuales" ? "bar" : "doughnut";
      this.showModalData(product);
    }
  }

  showModalData(data: any): void{
    const {comp_product, ventas_mensuales} = data;
    this.selectedRowGraphData = this.tipoGrafico === "bar" ? ventas_mensuales : comp_product;
    this.showModal = true;
  }

  closeModal(): void{
    this.showModal = false;
    this.selectedRowGraphData = null;
  }
}
