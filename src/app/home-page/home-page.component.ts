import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';

interface User {
  id: number
  username: string
  profileImage: string
  name: string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users: User[] = []

  constructor(private userListService: UserListService) { }

  ngOnInit(){
    this.userListService.getUsers().subscribe(response => {
      this.users = response as User[]
    })
  }
}
