import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users: any = []

  constructor(private userListService: UserListService) { }

  ngOnInit(){
    this.userListService.getUsers().subscribe(users => {
      this.users = users
    })
  }
}
