import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'


// const mainUrl = 'https://insta.nextacademy.com/api/v1/users/'

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://insta.nextacademy.com/api/v1/users/")
  }

//   constructor() {}
//   getUsers(): Observable<User[]> {
//     return Observable.create(function(observer){
//       observer.next([
//         {
//           "id": 3, 
//           "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/idol2-blake.jpg", 
//           "username": "blake"
//         }, 
//         {
//           "id": 2, 
//           "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/idol1-ryan.jpg", 
//           "username": "ryanG"
//         }, 
//         {
//           "id": 283, 
//           "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg", 
//           "username": "robertalan"
//         }, 
//         {
//           "id": 1, 
//           "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/bigfan-9AE7468E-4C35-41D1-AA68-31939891B5E1.png", 
//           "username": "bigfan"
//         }, 
//         {
//           "id": 307, 
//           "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg", 
//           "username": "SoulMUSZE"
//         }, 
//         {
//           "id": 284, 
//           "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/scenery-IMG_0319-sm.jpg", 
//           "username": "testing123"
//         }, 
//         {
//           "id": 285, 
//           "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg", 
//           "username": "hello"
//         }, 
//         {
//           "id": 6, 
//           "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/josht-avatar.png", 
//           "username": "josht"
//         }, 
//       ])
//       observer.complete();
//   }) 
// }




  // users: User[] = [
  //   {
  //     "id": 3, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/idol2-blake.jpg", 
  //     "username": "blake"
  //   }, 
  //   {
  //     "id": 2, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/idol1-ryan.jpg", 
  //     "username": "ryanG"
  //   }, 
  //   {
  //     "id": 283, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg", 
  //     "username": "robertalan"
  //   }, 
  //   {
  //     "id": 1, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/bigfan-9AE7468E-4C35-41D1-AA68-31939891B5E1.png", 
  //     "username": "bigfan"
  //   }, 
  //   {
  //     "id": 307, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg", 
  //     "username": "SoulMUSZE"
  //   }, 
  //   {
  //     "id": 284, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/scenery-IMG_0319-sm.jpg", 
  //     "username": "testing123"
  //   }, 
  //   {
  //     "id": 285, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/profile-placeholder.jpg", 
  //     "username": "hello"
  //   }, 
  //   {
  //     "id": 6, 
  //     "profileImage": "http://next-curriculum-instagram.s3.amazonaws.com/josht-avatar.png", 
  //     "username": "josht"
  //   }, 
  // ]


  // constructor(private http: HttpClient) { }
}
