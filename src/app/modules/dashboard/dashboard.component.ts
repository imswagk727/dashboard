import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  addr:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', addr: "1" },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', addr: "1"  },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' , addr: "1" },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , addr: "1" },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' , addr: "1" },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' , addr: "1" },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , addr: "1" },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , addr: "1" },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' , addr: "1" },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' , addr: "1" },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' , addr: "1" },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' , addr: "1" },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' , addr: "1" },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' , addr: "1" },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' , addr: "1" },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' , addr: "1" },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' , addr: "1" },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' , addr: "1" },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' , addr: "1" },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' , addr: "1" },
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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'addr'];
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
