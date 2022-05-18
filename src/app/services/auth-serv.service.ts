import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { UserRolesService } from './user-roles.service';



@Injectable({
  providedIn: 'root'
})
export class AuthServService {
  userData: any; 
  constructor(private auth: AngularFireAuth, private router: Router, private UserS: UserRolesService,private _snackBar: MatSnackBar) { 
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }



  login(email:string, password:string) {
    this.auth.signInWithEmailAndPassword( email, password)
    .then((result)=>{
        var l;
         this.UserS.users.pipe(take(1)).subscribe(x =>{ 
          l = (x.find( (y:any) => y.id == result.user?.uid)).role
          if(l == "0" ){

            console.log("to dash!")
            this.router.navigate(['admin-dash'])
          }
          this._snackBar.open("Bienvenido", "Cerrar")
         })
        
        
    })
    .catch(()=>  this._snackBar.open("No se puede iniciar sesion", "Cerrar"))
  }

  createUser(email:string, password:string){
    this.auth.createUserWithEmailAndPassword(email,password)

    .then((result)=>{
      this.UserS.createUser(result.user?.uid || " ", "1" );
      this._snackBar.open("Usuario generado!", "Cerrar")
    })
    .catch(()=> this._snackBar.open("No se pudo registrar", "Cerrar"))
   
  }

  logout() {
    this.auth.signOut()
    .then(()=>{
      localStorage.removeItem('user');
      this.router.navigate([''])
    })
    
  }
}