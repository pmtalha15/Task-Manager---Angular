import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { JwtInterceptorsService } from './jwt-interceptors.service';
import { JwtunAuthorizationInterceptorsService } from './jwtun-authorization-interceptors.service';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    FormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>{
          return (sessionStorage.getItem("currentUser")?JSON.parse(sessionStorage.getItem("currentUser")as string).token:null)
        }
      }
    })
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptorsService,
    multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtunAuthorizationInterceptorsService,
      multi:true
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
