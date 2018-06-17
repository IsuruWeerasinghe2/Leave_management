import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";

import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{
      this.user = res.user;
      }
    );
  }
  downloadPDF() {
    const doc = new jsPDF();

    doc.setFont('Times');
    doc.text("Univercity of Colombo School of Computing Acadamic staff leave repor"+this.user.name,10,10);


    doc.text("User:"+this.user.name, 10,20,);
    doc.text("Username:"+this.user.username, 10,30);
    doc.text("email Address:"+this.user.email, 10,40);
    doc.save(this.user.name+'_leavereport .pdf');

  }

}
