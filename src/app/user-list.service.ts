import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const userUrl = 'https://insta.nextacademy.com/api/v1/users/'
// const userUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/users/'


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get(userUrl)
  }
}
