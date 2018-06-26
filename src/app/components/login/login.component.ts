import { Component, OnInit } from '@angular/core';
import { LoginService, UsersService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}
}
