import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Repo } from './repo';
@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  user:Users
  repo:Repo
  repositoryData=[]
  newUserData:any = []

  constructor(private httpClient:HttpClient) { }
//for github profile
public getProfile(searchQuery) {
let dataURL = 'https://api.github.com/users/${searchQuery}';
}
//for github repos
}
