import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
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
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    DialogModule,
    ChartModule
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    RouterModule,
    ButtonModule,
    TableModule,
    DialogModule,
    MessageModule,
    ChartModule,
    DoughnutChartComponent,
    BarChartComponent,
    ReactiveFormsModule,
    DynamicTableComponent
  ]
})
export class SharedModule { }
