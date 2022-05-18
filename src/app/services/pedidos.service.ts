import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private itemCol:AngularFirestoreCollection<any>;
  items:Observable<any>
  constructor( private afs:AngularFirestore, private router:Router) {
    this.itemCol = afs.collection<any>('pedidos');
    this.items = this.itemCol.valueChanges();
   }

   createPedido(item:any){
    const id= this.afs.createId();
    item.id = id;
    this.itemCol.doc(id).set(item);
    this.router.navigate([''])
    
   }
}
