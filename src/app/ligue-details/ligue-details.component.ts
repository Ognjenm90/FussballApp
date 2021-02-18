import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LigueService } from '../ligue.service';
import { Ligue } from '../ligue';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from '@angular/fire/firestore';
import {  map } from 'rxjs/operators'
@Component({
  selector: 'app-ligue-details',
  templateUrl: './ligue-details.component.html',
  styleUrls: ['./ligue-details.component.css']
})
export class LigueDetailsComponent implements OnInit {
  public flag: number;
  
 

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<LigueDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ligue,
    public ligaService: LigueService) { 
 }

  ngOnInit() {
  }

  public add(): void {
    
  
      
    this.ligaService.addLigue(this.data);
    
    this.snackBar.open("Ligue erfolgreich hinzugefügt: " + this.data.name, "Ok",
      {
        duration: 2500
      });
  }

  public update(): void {
    this.ligaService.updateLigue(this.data);
    this.snackBar.open("Ligue erfolgreich geändert. " , "Ok",
      {
        duration: 2500
      });
  }

  public delete(): void {
    this.ligaService.deleteLigue(this.data);
   console.log(this.data.id);
    this.snackBar.open("Ligue erfolgreich gelöscht: " ,"Ok",
      {
        duration: 2500
      });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Abgebrochen", "Ok",
    {
      duration: 1000
    });
  }
}
