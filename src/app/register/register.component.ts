import { Component } from '@angular/core';
import { IUserDetails } from '../models/user-details.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor() { }

  password: string = '';

  userDetails: IUserDetails = {
    name: '',
    email: '',
    password: ''
  };
}
