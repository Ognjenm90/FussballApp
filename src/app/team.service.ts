import { Injectable } from "@angular/core";
import {Team } from './team'
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from '@angular/fire/firestore';
@Injectable()
export class TeamService {
   
    teamDoc: AngularFirestoreDocument<Team>;

   
    private itemsCollection: AngularFirestoreCollection<Team>
 
    
    
   
    constructor(private httpClient: HttpClient,private afs: AngularFirestore) { 
        this.itemsCollection = this.afs.collection('teams');
        
        
      /*  this.teams = this.itemsCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {      
            const data = a.payload.doc.data() as Team;
            const id = a.payload.doc.id;
        
            return { id, ...data };
          }))
        );*/
  
    }


       getTeam() {
       return this.itemsCollection.valueChanges();
          //return this.teams;

       }
    
   
    addTeam(data: Team){

      let id1=this.afs.createId();
      this.afs.collection("teams").doc(id1).set({
      id:id1,
      name:data.name
      ,gegruendet:data.gegruendet,
       ort:data.ort,
       ligue:data.ligue
      })
    }
    public updateTeam(team: Team): void {
      this.afs.doc(`teams/${team.id}`).update(team);
       
    }
   
    public deleteTeam(data: Team): void {
     
        this.teamDoc = this.afs.doc(`teams/${data.id}`);
        this.teamDoc.delete();
     
    } 
    
}