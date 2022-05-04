import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServService {
  userData: any; 
  constructor(private auth: AngularFireAuth, private router: Router) { 
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
  //      this.router.navigate(['/dashboard'])
    })
    .catch(()=> alert('No se pudo iniciar sesion'))
  }

  createUser(email:string, password:string){
    this.auth.createUserWithEmailAndPassword(email,password)
    .then((result)=>{
      alert("Usuario generado!")
    })
    .catch(()=> alert('No se pudo registrar'))
   
  }

  logout() {
    this.auth.signOut()
    .then(()=>{
      localStorage.removeItem('user');
      this.router.navigate([''])
    })
    
  }
}