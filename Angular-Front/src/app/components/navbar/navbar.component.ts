import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import { FlashMessagesService} from "angular2-flash-messages";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(
    private router:Router,
    public authService:AuthService,
    private flashMessage:FlashMessagesService,
  ) { }

  ngOnInit() {
    console.log("Logged : " + this.authService.loggedIn());
  }

  logoutUser(){

    this.authService.logout();
    this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 2000});
    this.router.navigate(['/home']);
    return false;
  }

}
