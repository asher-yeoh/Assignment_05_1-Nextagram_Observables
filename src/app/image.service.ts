import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

const imageUrl = 'https://insta.nextacademy.com/api/v1/images/?userId='

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  // getImages() {
  //   // return this.http.get<User[]>("https://insta.nextacademy.com/api/v1/users/")
  //   // return this.http.get(imageUrl + `${id}`)
  //   return this.http.get(imageUrl + `3`)
  // }

  getImages(id) {
    return this.http.get(imageUrl + `${id}`)
  }

}
