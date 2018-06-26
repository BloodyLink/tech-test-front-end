import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: './components/login/login.module#LoginModule'
      },
      {
        path: 'users',
        loadChildren: './components/users/users.module#UsersModule'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
