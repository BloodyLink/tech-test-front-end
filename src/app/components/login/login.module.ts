import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { LoginService, UsersService } from '../../services/index';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [LoginRoutingModule, CommonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [LoginService, UsersService, HttpClient]
})
export class LoginModule {}
