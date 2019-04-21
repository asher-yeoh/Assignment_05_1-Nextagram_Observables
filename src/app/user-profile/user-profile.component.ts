import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

interface ImageBox {
  image: string
  like: number
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  images: string[] = []
  imageBoxes: ImageBox[] = []

  id: string

  constructor(private imageService: ImageService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;

  }

  ngOnInit() {
    this.imageService.getImages(this.id).subscribe(response => {
      this.images = response as string[]

      for (let i = 0; i < this.images.length; i++) {
        this.imageBoxes.push({
          'image': this.images[i],
          'like': 0,
        })
      }
    })
  
  }

  likeIncrease(i) {
    this.imageBoxes[i].like += 1
  }
  
}
