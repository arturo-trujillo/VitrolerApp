import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  showFiller = false;
  
  

  constructor(public dialog:MatDialog) { }

  loadlogin(){
    const dialogRef = this.dialog.open(LoginComponent);
  }

  loadregister(){
    const dialogRef = this.dialog.open(RegisterComponent);
  }

  logout(){
    localStorage.setItem("user", "null");
  }
  
  userlogged(){
  
    if(localStorage.getItem("user") == "null"){
      return true;
    }else
      return false;
  }
  ngOnInit(): void {
   
  }

 

}
