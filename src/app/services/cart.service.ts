import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private usersCollection : AngularFirestoreCollection<any>;
  users:Observable<any>;
  cart:any

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<any>('users');
    this.users = this.usersCollection.valueChanges();
   }

   addToCart(itemid:any, quantity:any){
     console.log(itemid,quantity )
     const userid =  localStorage.getItem("user");
     var json = JSON.parse(userid || "");
     const id = json["uid"]
     let key = "carrito." + itemid;
    
     this.usersCollection.doc(id).update({
      [key] : { cantidad : quantity},
    })
     
   }
}
