import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface ImageBox {
  image: string
  like: number
}

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent implements OnInit {
  images: string[] = []

  currentImages: ImageBox[] = []

  comments = []

  id: number
  username: string
  imageIndex: number
  
  
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

        this.currentImages.push({
          'image': this.images[this.imageIndex],
          'like': 0,

        })

    })

    this.imageService.getComments().subscribe(comments => {
      this.comments = comments
    })
  }

  likeIncrease(i) {
    this.currentImages[i].like += 1
  }

  onSubmit() {
    if(!this.commentForm.invalid){
      this.imageService.addComment(this.commentForm.value)
    }
  }

}
