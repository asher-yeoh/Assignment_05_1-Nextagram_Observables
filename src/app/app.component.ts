import { Component } from '@angular/core';
import { UserListService } from './user-list.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nextagram';

  users: User[] = []

  constructor(private userListService: UserListService){}

  ngOnInit(){
    this.userListService.getUsers().subscribe(users => {
      this.users = users
    })
  }

    // ngOnInit(){
    //     console.log(this.userListService.users)
    // }

  // users: User[] = [
  //   {
  //     "id": 3, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/idol2-blake.jpg", 
  //     "username": "blake"
  //   }, 
  //   {
  //     "id": 2, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/idol1-ryan.jpg", 
  //     "username": "ryanG"
  //   }, 
  //   {
  //     "id": 283, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg", 
  //     "username": "robertalan"
  //   }, 
  //   {
  //     "id": 1, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/bigfan-9AE7468E-4C35-41D1-AA68-31939891B5E1.png", 
  //     "username": "bigfan"
  //   }, 
  //   {
  //     "id": 307, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg", 
  //     "username": "SoulMUSZE"
  //   }, 
  //   {
  //     "id": 284, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/scenery-IMG_0319-sm.jpg", 
  //     "username": "testing123"
  //   }, 
  //   {
  //     "id": 285, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg", 
  //     "username": "hello"
  //   }, 
  //   {
  //     "id": 6, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/josht-avatar.png", 
  //     "username": "josht"
  //   }, 
  // ]
  
}
