import { Component, OnInit, ViewChild } from  '@angular/core';
import { NationalityService } from '../nationality.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nationality } from '../nationality';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from  '@angular/material';
import { NacionalityDetailsComponent } from '../nacionality-details/nacionality-details.component';

@Component({
  selector: 'app-nacionality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css']
})
export class NationalityComponent implements OnInit {

  displayedColumns = [ 'name', 'actions'];
  exampleDatabase: NationalityService;
  dataSource: MatTableDataSource<Nationality>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public nationalityService: NationalityService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.nationalityService.getNationality().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
  });
  }
  public openDialog(flag: number, id: number, name: string) {
    const dialogRef = this.dialog.open(NacionalityDetailsComponent, { data: { id: id, name: name} });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
    
        this.loadData();
      
    });
  }
}
