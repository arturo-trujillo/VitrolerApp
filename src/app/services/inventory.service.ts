import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  //private itemDoc: AngularFirestoreDocument<any>;
  private itemCol: AngularFirestoreCollection<any>;
  items: Observable<any>;
  constructor(private afs: AngularFirestore) {
    this.itemCol = afs.collection<any>('productos');
    this.items = this.itemCol.valueChanges();
 

  }
  
  createItem(item:any){
    const id= this.afs.createId();
    item.id = id;
    this.itemCol.doc(id).set(item);
  }

  editItem(item:any){
    this.afs.doc<any>('productos/' + item.id).update(item);
  }

  deleteItem(item:any){
    this.afs.doc<any>('productos/'+ item.id).delete();
  }
}
