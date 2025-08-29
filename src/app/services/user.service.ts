import { Injectable } from '@angular/core';
import { IUserDetails } from '../models/user-details.model';
import { userData } from '../data/admin-user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  currentUser!: IUserDetails;

  verifyUser(user: IUserDetails): boolean{
      const validUserFound = userData.find((u: IUserDetails)=>u.email===user.email && u.password===user.password)
      if(validUserFound){
        this.currentUser =validUserFound;
        return true
      }
      else return false
  }

  checkUserAuth():boolean{
    if(this.currentUser){
      return true
    }
    else return false
  }

}
