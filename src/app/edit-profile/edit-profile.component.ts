import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number
  username: string
  profileImage: string
  name: string
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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

  editProfileForm = new FormGroup({
    // nameBox: new FormControl("", [Validators.required, Validators.minLength(1)]),
    // descriptionBox: new FormControl("", [Validators.required, Validators.minLength(1)]),
    // blogLinkBox: new FormControl("", [Validators.required, Validators.minLength(1)]),
    // facebookLinkBox: new FormControl("", [Validators.required, Validators.minLength(1)]),
    // emailBox: new FormControl("", [Validators.required, Validators.minLength(1)]),
    nameBox: new FormControl(""),
    descriptionBox: new FormControl(""),
    blogLinkBox: new FormControl(""),
    facebookLinkBox: new FormControl(""),
    // emailBox: new FormControl(""),
    emailBox: new FormControl("", [Validators.email]),
  })

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

  onSubmit() {
    if(!this.editProfileForm.invalid){
      this.userListService.submitEditProfileForm(this.editProfileForm.value)
    }
    this.editProfileForm.reset()
  }

  // showInvalidEmailError(){
  //   if(this.editProfileForm !== null){
  //     return this.editProfileForm.errors.email
  //   }
  //   return true
  // }
}
