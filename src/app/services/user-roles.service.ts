import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { find, Observable, take } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  private usersCollection: AngularFirestoreCollection<any>;
  users : Observable<any>;
  roley : any


  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<any>('users');
    this.users = this.usersCollection.valueChanges();
   }

   createUser(id:any, role:any){
    let user={
      "id":id,
      "role":role,
      "carrito":{},
    };
     this.usersCollection.doc(id).set(user);
   }

   getRole(id:any){

      console.log(this.users.subscribe);
      return "1";
    //  var a = (this.users.pipe(take(1)).subscribe( x =>{
       
    //    this.roley = (x.find( (y:any) => y.id == id)).role;
    //    console.log(this.roley)
    //   }))
    //   console.log(a);
    //   return this.roley;
    }
}
