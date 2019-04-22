import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { ActivatedRoute } from '@angular/router';

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

  name: string = null
  description: string = null
  blogLink: string = null
  facebookLink: string = null
  email: string = null

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
          this.currentName = this.name
          this.currentDescription = this.description
          this.currentBlogLink = this.blogLink
          this.currentFacebookLink = this.facebookLink
          this.currentEmail = this.email
        }
      }
      
    })

    this.userListService.getName().subscribe(name => {
      this.name = name
    })

    this.userListService.getDescription().subscribe(description => {
      this.description = description
    })

    this.userListService.getBlogLink().subscribe(blogLink => {
      this.blogLink = blogLink
    })

    this.userListService.getFacebookLink().subscribe(facebookLink => {
      this.facebookLink = facebookLink
    })

    this.userListService.getEmail().subscribe(email => {
      this.email = email
    })
  }

}
