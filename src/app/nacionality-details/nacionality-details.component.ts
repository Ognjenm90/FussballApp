import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NationalityService } from '../nationality.service';
import { Nationality } from '../nationality';

@Component({
  selector: 'app-nacionality-details',
  templateUrl: './nacionality-details.component.html',
  styleUrls: ['./nacionality-details.component.css']
})
export class NacionalityDetailsComponent implements OnInit {
  public flag: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<NacionalityDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Nationality,
    public nationalityService: NationalityService) { }

  ngOnInit() {
  }



  public add(): void {
   
    this.nationalityService.addNationality(this.data);
    this.snackBar.open("Natonalität erfolgreich hinzugefügt: " + this.data.name, "Ok",
      {
        duration: 2500
      });
  }

  public update(): void {
    this.nationalityService.updateNationality(this.data);
    this.snackBar.open("Natonalität erfolgreich geändert: " , "Ok",
      {
        duration: 2500
      });
  }

  public delete(): void {
    this.nationalityService.deleteNationality(this.data);
    this.snackBar.open("Natonalität erfolgreich gelöscht: " + this.data.id, "Ok",
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