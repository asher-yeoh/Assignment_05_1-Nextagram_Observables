import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

interface ImageProperties {
  id: number
  imageIndex: number
  likeCounter: number
  commentBox: string[]
}

const imageUrl = 'https://insta.nextacademy.com/api/v1/images/?userId='
// const imageUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/images?userId='

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageProperty = new BehaviorSubject<ImageProperties[]>([])
  
  constructor(private http: HttpClient) { }

  getImages(id: number) {
    return this.http.get(imageUrl + `${id}`)
  }

  getImageProperty() {
    return this.imageProperty
  }

  addComment(currentId, currentImageIndex, newComment) {
    let updatedImageProperty = []

    for(let property of this.imageProperty.getValue()) {
      if (property.id === currentId && property.imageIndex === currentImageIndex) {
        property.commentBox.push(newComment) 
      }
      updatedImageProperty.push(property)
    }

    this.imageProperty.next(updatedImageProperty)
  }
}
