import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { LoginService, UsersService } from '../../services/index';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [UsersRoutingModule, CommonModule],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [LoginService, UsersService, HttpClient]
})
export class UsersModule {}
