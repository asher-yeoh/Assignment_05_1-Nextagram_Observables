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

interface UserProfiles {
  id: number
  name: string
  description: string
  blogLink: string
  facebookLink: string
  email: string
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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

  editProfileForm = new FormGroup({
    nameField: new FormControl(""),
    descriptionField: new FormControl(""),
    blogLinkField: new FormControl(""),
    facebookLinkField: new FormControl(""),
    emailField: new FormControl("", [Validators.email]),
  })

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
          'name': '-',
          'description': '-',
          'blogLink': '-',
          'facebookLink': '-',
          'email': '-',
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

  onSubmit() {
    if(!this.editProfileForm.invalid){
      this.userListService.submitEditProfileForm(this.currentId, this.editProfileForm.value.nameField, this.editProfileForm.value.descriptionField, this.editProfileForm.value.blogLinkField, this.editProfileForm.value.facebookLinkField, this.editProfileForm.value.emailField)
    }

    this.editProfileForm.reset()
  }
}
