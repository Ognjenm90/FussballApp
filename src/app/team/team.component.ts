import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Team } from '../team';
import { Observable } from 'rxjs';
import { TeamService } from '../team.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Ligue } from '../ligue';
import { TeamDetailsComponent } from '../team-details/team-details.component';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  displayedColumns = [ 'name', 'gegruendet', 'ort', 'ligue', 'actions'];
  dataSource: MatTableDataSource<Team>;
  teamSelected: Team;

 
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(public teamService: TeamService, public dialog: MatDialog) { 


   
  }

  ngOnInit() {
    this.loadData();
  }
  public loadData() {
    this.teamService.getTeam().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      console.log(data.length);
    });
  }

  search(searchValue: string) {
    searchValue = searchValue.trim(); // leere plätze löschen
    searchValue = searchValue.toLowerCase(); //damit die mit kleinen und grossen Buchstaben gefunden werden
    this.dataSource.filter = searchValue;
  }

  public openDialog(flag: number, id: number, name:string,gegruendet:Date,ort:string,ligue: Ligue) {
    const dialogRef = this.dialog.open(TeamDetailsComponent, {
      data: { id: id, name:name,gegruendet:gegruendet, ort:ort,ligue:ligue}
    });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
     
        this.loadData();
      
    });
  }


}
