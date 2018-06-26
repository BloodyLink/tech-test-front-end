import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../../services/index';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  usersDisplay() {
    console.log('que ondi');

    this.usersService.getAll().subscribe(
      data => {
        // if (data.status === 'OK') {
        console.log(data);
        // }
      },
      error => {}
    );
  }

  ngOnInit(): void {
    console.log('holi');
    this.usersDisplay();
  }
}
