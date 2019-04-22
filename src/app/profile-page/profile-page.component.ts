import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { ActivatedRoute } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number
  username: string
  profileImage: string
  name: string
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  users: User[] = []


  id: number
  username: string

  currentId: number
  currentUsername: string
  currentProfileImage: string
  currentName: string
  currentDescription: string
  currentBlogLink: string
  currentFacebookLink: string
  currentEmail: string


  constructor(private userListService: UserListService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.username = this.route.snapshot.params.username;
  }

  ngOnInit() {
    this.userListService.getUsers().subscribe(response => {
      this.users = response as User[]

      for (let index in this.users) {
        if (this.users[index].id == this.id) {
          this.currentId = this.users[index].id
          this.currentUsername = this.users[index].username
          this.currentProfileImage = this.users[index].profileImage
          this.currentName = 'Spy Fox'
          this.currentDescription = 'Special Agent'
          this.currentBlogLink = 'www.secretmissionblog.com/spy_fox'
          this.currentFacebookLink = 'www.facebook.com/mynameisnotspyfox'
          this.currentEmail = 'spy.fox@youcannotseeme.com'
        }
      }
      
    })
  }

}
