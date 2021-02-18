import { Component, OnInit, Inject } from '@angular/core';
import { Ligue } from '../ligue';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Team} from '../team';
import { LigueService } from '../ligue.service';
import { TeamService } from '../team.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Ligue>
  public ligues: Observable<any[]>;
  public flag: number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TeamDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Team,
    public timService: TeamService,
    public ligaService: LigueService
   ,afs:AngularFirestore) { 

 this.itemsCollection = afs.collection<Ligue>('ligues');
 this.ligues = this.itemsCollection.valueChanges();
}

ngOnInit() { }
  



  public add(): void {
   
    this.timService.addTeam(this.data);
    this.snackBar.open("Mannschaft erfolgreich hinzugefügt:", "ok",
      {
        duration: 2500
      });
  }

  public update(): void {
   
    this.timService.updateTeam(this.data);
    this.snackBar.open("Mannschaft erfolgreich geändert:", "ok",
      {
        duration: 2500
      });
  }

  public delete(): void {
    this.timService.deleteTeam(this.data);
    this.snackBar.open("Mannschaft erfolgreich gelöscht:", "ok",
      {
        duration: 2500
      });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Abgebrochen", "ok",
    {
      duration: 1000
    });
  }

}