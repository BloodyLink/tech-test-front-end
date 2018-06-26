import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../../services/index';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users: any;

  constructor(private usersService: UsersService) {}
  usersDisplay() {
    this.usersService.getAll().subscribe(
      data => {
        console.log(data);
        this.users = data;
      },
      error => {}
    );
  }

  ngOnInit(): void {
    this.usersDisplay();
  }
}
