import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
// import { userInfo } from 'os';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: string
  // images = []

  // specificUser = null

  // userId = 3
  // userId = id
  // id = 3

  // constructor(private imageService: ImageService, private route: ActivatedRoute) { }
  constructor(private imageService: ImageService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  // ngOnInit() {
  //   this.imageService.getImages().subscribe(images => {
  //     this.images = images
  //   })
  // }

  ngOnInit() {
    this.imageService.getImages(this.id).subscribe(images => {
      this.images = images
    })
  }


  // ngOnInit() {
  //   setTimeout(() => {
  //     this.imageService
  //       .getImages(this.route.snapshot.params.userId)
  //       .subscribe(response => {
  //         this.specificUser = response
  //       })
  //   }, 3000)
  // }

}
