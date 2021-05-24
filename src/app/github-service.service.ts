import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private httpClient:HttpClient) { }
//for github profile
public getProfile(searchQuery) {
let dataURL = 'https://api.github.com/users/${searchQuery}';
}
//for github repos
}
