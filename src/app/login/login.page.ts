import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

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
      private authService: AuthService,
      private cookieService: CookieService,
      private router: Router
  
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
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++){
          text += possible.charAt(Math.floor(Math.random()*possible.length));
      }
        this.cookieService.set('sugar', text, (1/24), '/ionicUsers');
        window.location.href='/ionicUsers';
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
  