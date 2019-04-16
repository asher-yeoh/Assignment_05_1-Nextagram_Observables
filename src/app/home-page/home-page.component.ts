import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { User } from '../user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users: User[] = []

  constructor(private userListService: UserListService) { }

  ngOnInit(){
    this.userListService.getUsers().subscribe(users => {
      this.users = users
    })
  }

}
