import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubAppComponent } from './github-app/github-app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

const routes: Routes = [
  {path:"githubApp", component:GithubAppComponent},
  {path:"githubProfile",component:GithubProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
