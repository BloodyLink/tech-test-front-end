import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { LoginComponent } from "./components/login/login.component";

import { UsersService } from "./services/users.service";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
