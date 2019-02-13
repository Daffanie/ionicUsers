import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from  '../user';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.page.html',
  styleUrls: ['./userview.page.scss'],
})
export class UserviewPage implements OnInit {

  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService

  ) { }

  ngOnInit() {
  
    this.activatedRoute.params.subscribe(params=>{
      this.getUserview(params['id']);
    });
  }


  getUserview(id:string):void{
    this.usersService.user(id).subscribe(
      (response:any)=>{
        this.user = response.userview;
      }
    );
  }
}
