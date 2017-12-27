import { Component, OnInit } from '@angular/core';
import {user} from './models/userModel'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
model:user = new user;
  constructor() { }

  ngOnInit() {
  }

}
