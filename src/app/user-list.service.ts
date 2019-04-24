import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

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

const userUrl = 'https://insta.nextacademy.com/api/v1/users/'
// const userUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/users/'

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  userProfile = new BehaviorSubject<UserProfiles[]>([])

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(userUrl)
  }

  getUserProfile() {
    if (this.userProfile.getValue().length === 0) {
      this.getUsers().subscribe(response => {
        const users = response as User[]

        let userProfiles = []

        for (const user of users) {
          userProfiles.push({
            profileImage: user.profileImage,
            id: user.id,
            username: user.username,
            name: '-',
            description: '-',
            blogLink: '-',
            facebookLink: '-',
            email: '-',
          })
        }

        this.userProfile.next(userProfiles)
      })
    }

    return this.userProfile
  }

  submitEditProfileForm(currentId, newName, newDescription, newBlogLink, newFacebookLink, newEmail) {
    let updatedUserProfile = []

    for (let profile of this.userProfile.getValue()) {
      if (profile.id === currentId) {
        profile.name = newName
        profile.description = newDescription
        profile.blogLink = newBlogLink
        profile.facebookLink = newFacebookLink
        profile.email = newEmail
      }
      updatedUserProfile.push(profile)
    }

    this.userProfile.next(updatedUserProfile)
  }
}