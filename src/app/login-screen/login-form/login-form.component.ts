import { Component } from '@angular/core';
import { IUserDetails } from 'src/app/models/user-details.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }
  user: IUserDetails = {
    email: '',
    password: ''
  };
  validUserFound: boolean = true ;

  onSubmitLoginForm():void{
      this.validUserFound = this.userService.verifyUser(this.user);
      
      if(this.validUserFound){
        this.router.navigate(['home'])
      }

  }
  

}
