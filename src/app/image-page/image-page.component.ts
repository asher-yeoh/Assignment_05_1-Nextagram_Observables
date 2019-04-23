import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface ImageProperties {
  id: number
  imageIndex: number
  likeCounter: number
  commentBox: string[]
}

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent implements OnInit {
  images: string[] = []

  imageProperty: ImageProperties[] =[]

  id: number
  username: string
  imageIndex: number

  currentIndex: number
  currentImageUrl: string
  currentLike: number
  currentComments: string[] = null
  
  commentForm = new FormGroup({
    commentField: new FormControl("", [Validators.required, Validators.minLength(1)]),
  })
  
  constructor(private imageService: ImageService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.username = this.route.snapshot.params.username;
    this.imageIndex = this.route.snapshot.params.imageIndex
  }

  ngOnInit() {
    this.imageService.getImages(this.id).subscribe(response => {
      this.images = response as string[]
      
        this.currentImageUrl = this.images[this.imageIndex]
        
        let flag = true

        for (let index in this.imageProperty) {
          if (this.imageProperty[index].id == this.id && this.imageProperty[index].imageIndex == this.imageIndex) {
            flag =  false
          }
        }

        if (flag) {
          this.imageProperty.push({
            'id': this.id,
            'imageIndex': this.imageIndex,
            'likeCounter': 0,
            'commentBox': []
          })
        }
          
        for (let index in this.imageProperty) {
          if (this.imageProperty[index].id == this.id && this.imageProperty[index].imageIndex == this.imageIndex) {
            this.currentIndex = parseInt(index)
            this.currentLike = this.imageProperty[index].likeCounter
            this.currentComments = this.imageProperty[index].commentBox
          }
        }
    })

    this.imageService.getImageProperty().subscribe(imageProperty => {
      this.imageProperty = imageProperty as ImageProperties[]
    })

  }

  addLike() {
    this.currentLike += 1

    for (let index in this.imageProperty) {
      if (this.imageProperty[index].id == this.id && this.imageProperty[index].imageIndex == this.imageIndex) {
        this.imageProperty[index].likeCounter = this.currentLike
      }
    }
  }

  onSubmit() {
    if(!this.commentForm.invalid){
      this.imageService.addComment(this.id, this.imageIndex, this.commentForm.value.commentField)
    }
    this.commentForm.reset() 
  }

}

