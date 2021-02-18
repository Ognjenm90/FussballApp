import { Injectable } from "@angular/core";
import { Nationality } from './nationality'
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders, } from "@angular/common/http";
import { Observable , of} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from '@angular/fire/firestore';
@Injectable()
export class NationalityService {
    private readonly API_URL = 'api/nationalities';
    
    dataChange: BehaviorSubject<Nationality[]> = new BehaviorSubject<Nationality[]>([]);
    natDoc: AngularFirestoreDocument<Nationality>;

   
    private itemsCollection: AngularFirestoreCollection<Nationality>
    public nationalities: Observable<Nationality[]>;

 

     
  

     


  constructor(private afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection('nationalities');
  
 /*   this.ligues = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {      
        const data = a.payload.doc.data() as Ligue;
        const id = a.payload.doc.id;
        
        return { id, ...data };
      
      }))); */

  }

  getNationality() { 
    //return this.ligues;
    
       return this.itemsCollection.valueChanges();
    }
    
    addNationality(data: Nationality){

let id1=this.afs.createId();
this.afs.collection("nationalities").doc(id1).set({
id:id1,
  name:data.name
})
    }
 
        updateNationality(data: Nationality){
        
          this.afs.doc(`nationalities/${data.id}`).update(data);
      }
    
      deleteNationality(data: Nationality) {
        this.natDoc = this.afs.doc(`nationalities/${data.id}`);
        this.natDoc.delete();
      }
}