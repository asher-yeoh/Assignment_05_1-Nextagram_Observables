import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

interface Likes {
  id: number
  imageIndex: number
  likeCounter: number
}

const imageUrl = 'https://insta.nextacademy.com/api/v1/images/?userId='
// const imageUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/images?userId='

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  // likes = new BehaviorSubject<number>(0)

  likes = new BehaviorSubject<Likes[]>([{
    id: 0,
    imageIndex: 0,
    likeCounter: 0,
  }])

  comments = new BehaviorSubject<string[]>([])
  
  constructor(private http: HttpClient) { }

  getImages(id: number) {
    return this.http.get(imageUrl + `${id}`)
  }

  getLikes() {
    return this.likes
  }

  getComments() {
    return this.comments
  }

  // addLikes(newLikes) {
  //   this.likes.next(newLikes)
  // }

  addComment(newComment) {
    let tempComment = this.comments.getValue()
    tempComment.push(newComment)
    this.comments.next(tempComment)
  }
}
