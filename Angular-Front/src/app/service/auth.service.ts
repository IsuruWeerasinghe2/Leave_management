import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {map} from  'rxjs/operators' ;
import { tokenNotExpired } from "angular2-jwt";

//import {Observable} from "rxjs/internal/Observable";


@Injectable()
export class AuthService {

  constructor(
    private http: Http,

  ) { }
  user:any;
  request:any

  authtoken:any;

  private loggedFlag: false;

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).pipe(map(res=>res.json()))
  }
  submitRequestData(request){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/request/requests",request,{headers:headers}).pipe(map(res=>res.json()))

  }

  loginUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/user/login",user,{headers:headers}).pipe(map(res=>res.json()))

  }
  getProfile(){

    this.fetchToken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get("http://localhost:3000/user/profile",{headers:headers}).pipe(map(res=>res.json()))

  }
  fetchToken(){
    const token = localStorage.getItem("tokenid");
    this.authtoken=token;
  }

  storeData(token,userdata){
    localStorage.setItem("tokenid",token);
    localStorage.setItem("user",JSON.stringify(userdata));
    this.authtoken=token;
    this.user=userdata;
  }

  logout(){
    this.authtoken=null;
    this.user = null;
    localStorage.clear();
  }
  loggedIn() {
    this.fetchToken();
    if (this.authtoken != null){
      return true;
    }

  }
  isthisAdmin(user){
    if(this.loggedIn()&& this.user.position=='Admin'){
      console.log("this is  Admin")
      return true;
    }
  }
}

