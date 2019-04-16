import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
// import { User } from '../user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // users: User[] = []

  // users = []

  constructor(private userListService: UserListService) { }

  ngOnInit(){
    this.userListService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  // ngOnInit() {
  //   this.getUsers()
  // }

  // getUsers() {
  //   this.userListService.getUsers().subscribe(response => {
  //     let usersResults = [{}]
  //     for (let user of response.results) {
  //       usersResults.push({
  //           'id': user.id,
  //           'profileImage': user.profileImage,
  //           'username': user.username,
  //         })
  //     }
  //     this.users = usersResults
  //   })
  // }



}
