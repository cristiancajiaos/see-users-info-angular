import { Component, inject } from '@angular/core';
import { User } from '../../classes/user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faChevronLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  providers: [UsersService],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  public faUser: IconDefinition = faUser;
  public faChevronLeft: IconDefinition = faChevronLeft;

  public id: string = '';

  public user: User = new User();

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private location: Location = inject(Location);
  private usersService: UsersService = inject(UsersService);

  constructor() {

  }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params["id"];
    this.getUser();
  }

  public getUser() {
    const idNum = parseInt(this.id);
    this.usersService.getUser(idNum).subscribe(user => {
      this.user = user;
    });
  }

  public goBack(): void {
    this.location.back();
  }

}
