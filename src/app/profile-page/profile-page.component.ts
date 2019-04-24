import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { ActivatedRoute } from '@angular/router';

interface User {
  id: number
  username: string
  profileImage: string
}

interface UserProfiles {
  profileImage: string
  id: number
  username: string
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

  userProfile: UserProfiles[] = []

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
    this.id = parseInt(this.route.snapshot.params.id)
    this.username = this.route.snapshot.params.username;
  }

  ngOnInit() {
    this.userListService.getUserProfile().subscribe(userProfile => {
      for (let profile of userProfile as UserProfiles[]) {
        if (profile.id === this.id) {
          this.currentId = profile.id
          this.currentUsername = profile.username
          this.currentProfileImage = profile.profileImage
          this.currentName = profile.name
          this.currentDescription = profile.description
          this.currentBlogLink = profile.blogLink
          this.currentFacebookLink = profile.facebookLink
          this.currentEmail = profile.email
        }
      }
    })
  }
}
