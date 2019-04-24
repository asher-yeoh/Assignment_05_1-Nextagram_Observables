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
 
  id: number
  username: string

  constructor(private imageService: ImageService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.username = this.route.snapshot.params.username
  }

  ngOnInit() {
    this.imageService.getImages(this.id).subscribe(response => {
      this.images = response as string[]
    })
  }
}
