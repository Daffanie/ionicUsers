import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {

  constructor(
    private authService: AuthService,
    private cookieServer: CookieService
  ) { }


  ionViewWillEnter() {
    this.logout();
  }

  logout(): void{
    this.authService.logOut().subscribe(
      (response: any) => {
        this.cookieServer.delete('sugar', '/ionicUsers');
        window.location.href='/ionicUsers';
      }
    );
  }
 
}