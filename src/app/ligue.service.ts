import { Injectable } from "@angular/core";
import { Ligue } from './ligue'
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders  } from "@angular/common/http";
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from '@angular/fire/firestore';


import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators'
@Injectable({ providedIn: 'root' })
export class LigueService {
ligueDoc: AngularFirestoreDocument<Ligue>;

   
    private itemsCollection: AngularFirestoreCollection<Ligue>
    public ligues: Observable<Ligue[]>;
   
 
    constructor(private afs: AngularFirestore) {

      this.itemsCollection = this.afs.collection('ligues');
    
   /*   this.ligues = this.itemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {      
          const data = a.payload.doc.data() as Ligue;
          const id = a.payload.doc.id;
          
          return { id, ...data };
        
        }))); */
      
   
    }
 
  getLigue() { 
//return this.ligues;

   return this.itemsCollection.valueChanges();
}

addLigue(data: Ligue){

let id1=this.afs.createId();
this.afs.collection("ligues").doc(id1).set({
id:id1,
  name:data.name
})


}
 
    updateLigue(data: Ligue){
    
      
      console.log(data.id)
        this.afs.doc(`ligues/${data.id}`).update(data);
    
  }

  deleteLigue(data: Ligue) {

    this.ligueDoc = this.afs.doc(`ligues/${data.id}`);
    this.ligueDoc.delete();
  }
 
  
}