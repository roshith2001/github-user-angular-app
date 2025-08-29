import { Component, EventEmitter, Output } from '@angular/core';
import { GitService } from 'src/app/services/git.service';

@Component({
  selector: 'app-search-git',
  templateUrl: './search-git.component.html',
  styleUrls: ['./search-git.component.css']
})
export class SearchGitComponent {

  constructor(private gitService:GitService) { }
  username:string = '';
  githubUser!: any;

  @Output() viewUserProfile = new EventEmitter<any>();

  findUser(value:string){
    this.gitService.getGithubUser(value).subscribe((user) => {
      this.githubUser = user;
    })
  }

  viewProfile(user: any){
    this.viewUserProfile.emit(user)
  }

}
