import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptorsService } from './jwt-interceptors.service';
import { JwtunAuthorizationInterceptorsService } from './jwtun-authorization-interceptors.service';
import { JwtModule } from '@auth0/angular-jwt';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    TasksComponent
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
    }),
    ReactiveFormsModule
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
