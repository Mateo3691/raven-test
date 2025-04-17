import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() configOptions: any = {};
  @Input() data: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
