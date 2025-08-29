import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http:HttpClient) { }

  getGithubUser(username:string){
    return this.http.get(`https://api.github.com/users/${username}`)
  }
}
