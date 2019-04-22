import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

const userUrl = 'https://insta.nextacademy.com/api/v1/users/'
// const userUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/users/'


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  name = new BehaviorSubject<string>('Spy Fox')
  description = new BehaviorSubject<string>('Special Agent')
  blogLink = new BehaviorSubject<string>('www.secretmissionblog.com/spy_fox')
  facebookLink = new BehaviorSubject<string>('www.facebook.com/mynameisnotspyfox')
  email = new BehaviorSubject<string>('spy.fox@youcannotseeme.com')

  editedProfile = new BehaviorSubject<string[]>([])

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get(userUrl)
  }

  getName() {
    return this.name
  }

  getDescription() {
    return this.description
  }

  getBlogLink() {
    return this.blogLink
  }

  getFacebookLink() {
    return this.facebookLink
  }

  getEmail() {
    return this.email
  }

  submitEditProfileForm(newEditProfileForm) {
 
    if (newEditProfileForm.nameBox.length != 0) {
      this.name.next(newEditProfileForm.nameBox)
    }

    if (newEditProfileForm.descriptionBox.length != 0) {
      this.description.next(newEditProfileForm.descriptionBox)
    }

    if (newEditProfileForm.blogLinkBox.length != 0) {
      this.blogLink.next(newEditProfileForm.blogLinkBox)
    }

    if (newEditProfileForm.facebookLinkBox.length != 0) {
      this.facebookLink.next(newEditProfileForm.facebookLinkBox)
    }

    if (newEditProfileForm.emailBox.length != 0) {
      this.email.next(newEditProfileForm.emailBox)
    }
   
    // this.name.next(newEditProfileForm.nameBox)
    // this.description.next(newEditProfileForm.descriptionBox)
    // this.blogLink.next(newEditProfileForm.blogLinkBox)
    // this.facebookLink.next(newEditProfileForm.facebookLinkBox)
    // this.email.next(newEditProfileForm.emailBox)
  }

}
