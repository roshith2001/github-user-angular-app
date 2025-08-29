import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor() { }

githubUserProfile!: Object;

  getUserProfile(value:Object){
    this.githubUserProfile = value;
    console.log(this.githubUserProfile)
  }
}
