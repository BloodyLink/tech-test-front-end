import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-name",
  templateUrl: "./name.component.html",
  styleUrls: ["./name.component.scss"]
})
export class NameComponent implements OnInit {
  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {}
}
