import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

const imageUrl = 'https://insta.nextacademy.com/api/v1/images/?userId='
// const imageUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/images?userId='

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  comments = new BehaviorSubject<string[]>([])

  constructor(private http: HttpClient) { }

  getImages(id: number) {
    return this.http.get(imageUrl + `${id}`)
  }

  addComment(newComment){
    let tempComment = this.comments.getValue()
    tempComment.push(newComment)
    this.comments.next(tempComment)
  }

  getComments(){
    return this.comments
  }

}
