import { Component, OnInit } from '@angular/core';
//import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css']
})
export class AdminpannelComponent implements OnInit {
  user:any;
  constructor(
    private authService:AuthService,
    //private router:Router,
  ) { }

  ngOnInit() {


  }


}
