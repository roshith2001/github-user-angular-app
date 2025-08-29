import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavourite } from 'src/app/store/favourite.action';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {

  constructor(private store: Store) { }

  @Input() profileData!: any;

  addAsFavourite(item:any){
    this.store.dispatch(addToFavourite({ favourite: item }))
  }

}
