import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DynamicTableComponent,
    DoughnutChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    RouterModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    DynamicTableComponent
  ]
})
export class SharedModule { }
