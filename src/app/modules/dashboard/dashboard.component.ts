import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  tensile_modulus: number;
  yeild: number;
  break: number;
  ave1: number;
  ave2:number;
  vicat: number;
  mvr260c: number;
  imvr260c: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
  { tensile_modulus: 2210, yeild: 53.4, break: 48.8, ave1: 54, ave2: 41, vicat: 134, mvr260c: 13.8, imvr260c:15.2},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['tensile_modulus', 'yeild', 'break', 'ave1', 'ave2', 'vicat','mvr260c', 'imvr260c'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
