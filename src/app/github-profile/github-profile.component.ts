import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { Users } from '../users';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
user:Users;
repoDetails =[]
  githubService: GithubServiceService;

constructor(githubService:GithubServiceService) { 
  this.githubService = githubService
}

  ngOnInit(){
  this.user=this.githubService.user,
this.repoDetails=this.githubService.repositoryData
  }

}
