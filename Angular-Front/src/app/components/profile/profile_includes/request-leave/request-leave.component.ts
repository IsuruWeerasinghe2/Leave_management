import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import { FlashMessagesService} from "angular2-flash-messages";
import  {Router} from "@angular/router";

@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css'],

})
export class RequestLeaveComponent implements OnInit {
  firstname:String;
  lastname:String;
  phonenumber:Number;
  reason:String;
  nicnumber:String;
  leavetype:String;
  email:String;
  startdate:String;
  enddate:String;
  starttime:String;
  endtime:String;


  user:any;

 // fullname=this.user.firstname+this.user.firstname
  constructor(

    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) {

  }

  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{
      this.user = res.user;})
  }

  submitRequest(){
    const request={
      firstname:this.firstname=this.user.firstname,
      lastname:this.lastname=this.user.lastname,
      phonenumber:this.phonenumber=this.user.phonenumber,
      reason:this.reason,
      nicnumber:this.nicnumber=this.user.nicnumber,
      leavetype:this.leavetype,
      email:this.email=this.user.email,
      startdate:this.startdate,
      enddate:this.enddate,
      starttime:this.starttime,
      endtime:this.endtime
    };
    this.authService.submitRequestData(request).subscribe(res=>{
        if (res.state) {

          this.flashMessage.show('Leave request Submitted', {cssClass: 'alert-success', timeout: 2000});
          this.router.navigate(['/profile']);
        }else{
          this.flashMessage.show('Something went wrong ', {cssClass:'alert alert-danger', timeout: 1000});
          this.router.navigate(['/register']);
        }
    }
    );
  }



  }


