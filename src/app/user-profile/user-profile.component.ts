import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

interface ImageBox {
  image: string
  like: number
  comments: string[]
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  images: string[] = []
  // commentList: string[] = [
  //   'Comment 1',
  //   'Comment 2',
  //   'Comment 3',
  //   'Comment 4',
  // ]
  // imageBoxes: ImageBox[] = []

  id: number
  username: string

  // commentForm = new FormGroup({
  //   commentBox: new FormControl("X", [Validators.required, Validators.minLength(2)]),
  // })

  constructor(private imageService: ImageService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.username = this.route.snapshot.params.username
  }

  ngOnInit() {
    this.imageService.getImages(this.id).subscribe(response => {
      this.images = response as string[]

      // for (let i = 0; i < this.images.length; i++) {

      //   this.imageBoxes.push({
      //     'image': this.images[i],
      //     'like': 0,
      //     'comments': this.commentList,
      //   })
      // }
    })

    // this.imageService.getComments().subscribe(commentList => {
    //   this.commentList = commentList
    // })
  
  }

  // onSubmit() {
  //   if(!this.commentForm.invalid){
  //     this.imageService.addComment(this.commentForm.value)
  //   }
  // }

  // likeIncrease(i) {
  //   this.imageBoxes[i].like += 1
  // }
  
}
