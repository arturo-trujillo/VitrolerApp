import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { deleteField, FieldValue } from '@angular/fire/firestore';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public usersCollection : AngularFirestoreCollection<any>;
  users:Observable<any>;
  cart:any

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<any>('users');
    this.users = this.usersCollection.valueChanges();
   }

   addToCart(itemid:any, quantity:any, item:any){
  
     const userid =  localStorage.getItem("user");
     var json = JSON.parse(userid || "");
     const id = json["uid"]
     let key = "carrito." + itemid;
    
     this.usersCollection.doc(id).update({
      [key] : { cantidad : quantity,'precioTotal' : quantity * item.Precio,
      'item': item},

    })
     
   }

   updatecart(quantity:any, itemid:any, item:any){

    const userid =  localStorage.getItem("user");
    var json = JSON.parse(userid || "");
    const id = json["uid"]
    let key = "carrito." + itemid;

    this.usersCollection.doc(id).update({
      [key] : { 'cantidad' : quantity,'precioTotal' : quantity * item.Precio,
    'item': item},

    })
   }

   clearCart(){
    const userid =  localStorage.getItem("user");
    var json = JSON.parse(userid || "");
    const id = json["uid"]
    let key =  "carrito";

     this.usersCollection.doc(id).update({
       [key]: deleteField()
     });

   }
   deleteFromCart(itemid:any, item:any){
    const userid =  localStorage.getItem("user");
    var json = JSON.parse(userid || "");
    const id = json["uid"]
    let key =  "carrito." + itemid;

     this.usersCollection.doc(id).update({
       [key]: deleteField()
     });
   }
}
