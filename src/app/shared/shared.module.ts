import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';



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
    ReactiveFormsModule,
    MessageModule
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    RouterModule,
    ButtonModule,
    TableModule,
    MessageModule,
    ReactiveFormsModule,
    DynamicTableComponent
  ]
})
export class SharedModule { }
