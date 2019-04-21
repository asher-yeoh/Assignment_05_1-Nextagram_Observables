import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ImagePageComponent } from './image-page/image-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users/:username/:id', component: UserProfileComponent },
  { path: 'users/:username/:id/profiles', component: ProfilePageComponent },
  { path: 'users/:username/:id/profiles/edit', component: EditProfileComponent },
  { path: 'users/:username/:id/images/:imageIndex', component: ImagePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
