import { Component, inject } from '@angular/core';
import { User } from '../classes/user';
import { UsersService } from './users.service';
import { NgFor, NgIf } from '@angular/common';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  public faUser: IconDefinition = faUser;

  public users: User[] = [];

  private usersService: UsersService = inject(UsersService);

  constructor() {

  }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });

  }

}
