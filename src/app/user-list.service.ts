import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'

interface UserProfiles {
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

  name = new BehaviorSubject<string>('John')
  description = new BehaviorSubject<string>('John')
  blogLink = new BehaviorSubject<string>('John')
  facebookLink = new BehaviorSubject<string>('John')
  email = new BehaviorSubject<string>('John')

  userProfile = new BehaviorSubject<UserProfiles>({
    name: 'Blake Lively',
    description: 'Artist',
    blogLink: 'https://wordpress.com/blake',
    facebookLink: 'https://www.facebook.com/blake',
    email: 'blake.lively@gmail.com',
  })

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get(userUrl)
  }

  updateProfile() {

  }


  
}
