import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:9090/"
  private httpClient : HttpClient | null = null;
  constructor(private httpBackend:HttpBackend, private jwtHelperService:JwtHelperService) { }

  currentUserName:any = null;

  public Login(loginViewModel:LoginViewModel):Observable<any>{
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>(this.url + "authenticate",loginViewModel,{responseType:"json", observe:"response"})
    .pipe(map(response=>{
      if(response){
        this.currentUserName = response.body.userName;
        sessionStorage['currentUser'] = JSON.stringify(response.body);
        sessionStorage["x-xsrf-token"]= response.headers.get("XSRF-REQUEST-TOKEN");
      }
      return response.body;
    }))
  }

  public Logout(){
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }

  public isAuthenticated():boolean{
    var token = sessionStorage.getItem("currentUser")?JSON.parse(sessionStorage.getItem("currentUser")as string).token:null;

    if(this.jwtHelperService.isTokenExpired()){
      return false;
    }else{
      return true
    }
  }
}
