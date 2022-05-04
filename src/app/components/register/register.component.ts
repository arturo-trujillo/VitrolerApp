import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { AuthServService } from 'src/app/services/auth-serv.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {


  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';

   

  }

  constructor(private auth:AuthServService) { }

  register(){
    this.auth.createUser(this.email.value,this.password.value);
  }
  ngOnInit(): void {
  }

}
