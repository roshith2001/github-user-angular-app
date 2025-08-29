import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {  removeFromFavourite } from 'src/app/store/favourite.action';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private store: Store<any>) { }

  @Output() viewUserProfile = new EventEmitter<any>();

  favourites: any[] = [];
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.store.select('favourite').subscribe(
      res => {
        this.favourites = res.favourite;
        console.log(this.favourites)
      }
    )
  }

  removeFavourite(item:any){
    console.log(item)
    this.store.dispatch(removeFromFavourite({favourite: item}))
  }

  viewProfile(item:any){
    this.viewUserProfile.emit(item);
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
