import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

interface UserProfiles {
  id: number
  name: string
  description: string
  blogLink: string
  facebookLink: string
  email: string
}

const userUrl = 'https://insta.nextacademy.com/api/v1/users/'
// const userUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/users/'


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  userProfile = new BehaviorSubject<UserProfiles[]>([{
    id: 6,
    name: '-',
    description: '-',
    blogLink: '-',
    facebookLink: '-',
    email: '-',
  }])

  // name = new BehaviorSubject<string>('Spy Fox')
  // description = new BehaviorSubject<string>('Special Agent')
  // blogLink = new BehaviorSubject<string>('www.secretmissionblog.com/spy_fox')
  // facebookLink = new BehaviorSubject<string>('www.facebook.com/mynameisnotspyfox')
  // email = new BehaviorSubject<string>('spy.fox@youcannotseeme.com')

  // editedProfile = new BehaviorSubject<string[]>([])

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get(userUrl)
  }

  getUserProfile() {
    return this.userProfile
  }

  submitEditProfileForm(currentId, newName, newDescription, newBlogLink, newFacebookLink, newEmail) {
    // submitEditProfileForm(newNameBox){
    // let updatedUserProfile = []

    const updatedUserProfile = this.userProfile.getValue()
    // debugger
    // console.log(this)

    for(let profile of updatedUserProfile) {
      if (profile.id === currentId) {

        profile.name = newName
        profile.description = newDescription
        profile.blogLink = newBlogLink
        profile.facebookLink = newFacebookLink
        profile.email = newEmail
      }
      // updatedUserProfile.push(profile)
    }
    
    this.userProfile.next(updatedUserProfile)
    debugger
    console.log(this)
    
   
    // this.name.next(newEditProfileForm.nameBox)
    // this.description.next(newEditProfileForm.descriptionBox)
    // this.blogLink.next(newEditProfileForm.blogLinkBox)
    // this.facebookLink.next(newEditProfileForm.facebookLinkBox)
    // this.email.next(newEditProfileForm.emailBox)
  }

}
