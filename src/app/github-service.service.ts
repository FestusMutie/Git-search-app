import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Repo } from './repo';
import { r3JitTypeSourceSpan } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  user:Users
  repo:Repo
  repositoryData=[]
  newUserData:any = []

  constructor(private Http:HttpClient) { 
this.user = new Users("", "", "", 0, new Date)
this.repo = new Repo ("", "", new Date, "")
  }

//for github user data
public getUserData(userName:string) {
interface apiResponse{
  login:string, 
  avatar_url:string,
  bio:string;
  public_repos:number,
  created_at:Date
};
let promise = new Promise<void>((reject,resolve)=>{
this.Http.get<apiResponse>("https://api.github.com/users/" + userName).toPromise().then(response =>{
  this.user.login = response.login,
  this.user.avatar_url = response.avatar_url,
  this.user.bio = response.bio,
  this.user.public_repos = response.public_repos,
  this.user.created_at = response.created_at

  resolve()

},error=>{
  reject(error)
})
})
}
//for github repos
}
