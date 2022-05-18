import { Injectable } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private itemCol:AngularFirestoreCollection<any>;
  items:Observable<any>
  constructor( private afs:AngularFirestore) {
    this.itemCol = afs.collection<any>('ventas');
    this.items = this.itemCol.valueChanges();
   }

   createVenta(item:any){
    const id= this.afs.createId();
    item.id = id;
    this.itemCol.doc(id).set(item);
   }
}
