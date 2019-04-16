import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  images = []

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(images => {
      this.images = images
    })
  }

}
