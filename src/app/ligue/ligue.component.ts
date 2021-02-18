import { Component, OnInit, ViewChild } from '@angular/core';
import { LigueService } from '../ligue.service';

import { Ligue } from '../ligue';

import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LigueDetailsComponent } from '../ligue-details/ligue-details.component';

@Component({
  selector: 'app-ligue',
  templateUrl: './ligue.component.html',
  styleUrls: ['./ligue.component.css']
})
export class LigueComponent implements OnInit {

  displayedColumns = [ 'name', 'actions'];
 
  dataSource: MatTableDataSource<Ligue>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
 

  constructor(public ligueService: LigueService, public dialog: MatDialog) { 

    this.loadData();
  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.ligueService.getLigue().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    console.log(data.length);
      this.dataSource.paginator = this.paginator;
      });

  }

  public openDialog(flag: number, id: number,name: string) {
    const dialogRef = this.dialog.open(LigueDetailsComponent, { data: { id: id, name: name} });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
     
        this.loadData();
     
    });
  }
}