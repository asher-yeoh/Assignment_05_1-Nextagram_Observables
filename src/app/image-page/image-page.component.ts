import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent implements OnInit {
  images: string[] = []

  // likes: number = null
  likes = {}
  comments: string[] = null

  id: number
  username: string
  imageIndex: number

  currentImageUrl: string
  currentLike: number = 10
  
  commentForm = new FormGroup({
    commentBox: new FormControl("", [Validators.required, Validators.minLength(1)]),
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

        // for (let index in this.likes) {
        //   if (this.likes[index].id !== this.id && this.likes[index].imageIndex == !this.imageIndex) {
        //     this.currentLike = this.likes[index].likeCounter
        //   }
        // }

        for (let index in this.likes) {
          if (this.likes[index].id == this.id && this.likes[index].imageIndex == this.imageIndex) {
            this.currentLike = this.likes[index].likeCounter
          }
        }
    })

    this.imageService.getLikes().subscribe(likes => {
      this.likes = likes
    })

    this.imageService.getComments().subscribe(comments => {
      this.comments = comments
    })
  }

  likeIncrease() {
    this.currentLike += 1

    for (let index in this.likes) {
      if (this.likes[index].id == this.id && this.likes[index].imageIndex == this.imageIndex) {
        this.likes[index].likeCounter = this.currentLike
      }
    }

    // this.imageService.addLikes(this.currentLike)
  }

  onSubmit() {
    if(!this.commentForm.invalid){
      this.imageService.addComment(this.commentForm.value)
    }
    this.commentForm.reset()
  }

}
