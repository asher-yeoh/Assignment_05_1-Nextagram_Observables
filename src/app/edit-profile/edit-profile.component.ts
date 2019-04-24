import { Component, OnInit } from '@angular/core'
import { UserListService } from '../user-list.service'
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'

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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
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

  editProfileForm = new FormGroup({
    nameField: new FormControl(''),
    descriptionField: new FormControl(''),
    blogLinkField: new FormControl(''),
    facebookLinkField: new FormControl(''),
    emailField: new FormControl('', [Validators.email]),
  })

  constructor(private userListService: UserListService, private route: ActivatedRoute) {
    this.id = parseInt(this.route.snapshot.params.id)
    this.username = this.route.snapshot.params.username
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

  onSubmit() {
    if (!this.editProfileForm.invalid) {
      this.userListService.submitEditProfileForm(
        this.currentId,
        this.editProfileForm.value.nameField,
        this.editProfileForm.value.descriptionField,
        this.editProfileForm.value.blogLinkField,
        this.editProfileForm.value.facebookLinkField,
        this.editProfileForm.value.emailField
      )
    }

    this.editProfileForm.reset()
  }
}