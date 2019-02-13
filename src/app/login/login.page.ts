import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

    user:User =new User();
    //errors: Array<any> = []; Deleted this statement
    errorMessage: string;
      
    constructor(
      private authService: AuthService
  
    ) {}
  
    ngOnInit() {
    }
  
    response(response): void{
      if(response.success===false){
        //this.errors = response.error.errors; deleted this line
        this.errorMessage = 'Invalid Credentials';//response.error.message;
        //console.log('Please register to login!'); Instead of using this message can use error!
      }
  
      if(response.success===true){
        window.location.href='/';
      }
    }
  
    onSubmit(): void{
     
      this.authService.logIn(this.user).subscribe(
        (response) => {
          this.response(response);
        }
      );
    }
  
  }
  