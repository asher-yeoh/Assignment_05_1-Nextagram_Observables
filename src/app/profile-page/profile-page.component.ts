import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { ActivatedRoute } from '@angular/router';

interface User {
  id: number
  username: string
  profileImage: string
  name: string
}

interface UserProfiles {
  id: number
  name: string
  description: string
  blogLink: string
  facebookLink: string
  email: string
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  users: User[] = []

  userProfile: UserProfiles[] =[]

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

      this.currentId = this.id
      this.currentUsername = this.username

      for (let index in this.users) {
        if (this.users[index].id == this.id) {
          this.currentProfileImage = this.users[index].profileImage
        }
      }

      let flag = true

      for (let index in this.userProfile) {
        if (this.userProfile[index].id == this.id) {
          flag =  false
        }
      }

      if (flag) {
        this.userProfile.push({
          'id': this.id,
          'name': 'a',
          'description': 'a',
          'blogLink': 'a',
          'facebookLink': 'a',
          'email': 'a@gmail.com',
        })
      }
        
      for (let index in this.userProfile) {
        if (this.userProfile[index].id == this.id) {                                      
          this.currentName = this.userProfile[index].name
          this.currentDescription = this.userProfile[index].description
          this.currentBlogLink = this.userProfile[index].blogLink
          this.currentFacebookLink = this.userProfile[index].facebookLink
          this.currentEmail = this.userProfile[index].email
        }
      }
      
    })

    this.userListService.getUserProfile().subscribe(userProfile => {
      this.userProfile = userProfile as UserProfiles[]
    })
  }
}
