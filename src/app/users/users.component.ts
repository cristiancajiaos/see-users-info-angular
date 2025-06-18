import { Component, inject } from '@angular/core';
import { User } from '../classes/user';
import { UsersService } from './users.service';
import { NgFor, NgIf } from '@angular/common';
import { faUser, faComment, faList, faPaperPlane, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, NgbTooltipModule, RouterModule],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  public faUser: IconDefinition = faUser;
  public faComment: IconDefinition = faComment;
  public faList: IconDefinition = faList;
  public faPaperPlane: IconDefinition = faPaperPlane

  public users: User[] = [];

  private usersService: UsersService = inject(UsersService);

  constructor() {

  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  public foo(): void {

  }

}
