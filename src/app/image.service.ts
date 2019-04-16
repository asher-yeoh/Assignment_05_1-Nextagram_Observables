import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const imageUrl = 'https://insta.nextacademy.com/api/v1/images/?userId='

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImages(id) {
    return this.http.get(imageUrl + `${id}`)
  }

}
