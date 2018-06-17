import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import { FlashMessagesService} from "angular2-flash-messages";
import  {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
 // jsUrls:'./register.component.js',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 firstname:String;
 lastname:String;
 phonenumber:Number;
 address:String;
 nicnumber:String;
  position:String;
 email:String;
 password:String;
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router
    ) {

  }

  ngOnInit() {
  }
  registerData(){
      const user ={
        firstname:this.firstname,
        lastname:this.lastname,
        phonenumber:this.phonenumber,
        address:this.address,
        nicnumber:this.nicnumber,
        position:this.position,
        email:this.email,
        password:this.password
      };
      this.authService.registerUser(user).subscribe(res=> {

     if (res.state) {

          this.flashMessage.show('You are registred', {cssClass: 'alert-success', timeout: 2000});
          this.router.navigate(['/profile']);
        }else{
          this.flashMessage.show('Something went wrong ', {cssClass:'alert alert-danger', timeout: 1000});
          this.router.navigate(['/register']);
        }
      });
  }

}
