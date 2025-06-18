import { Component, inject } from '@angular/core';
import { User } from '../../classes/user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faChevronLeft, faInfo, faLocationDot, faBuilding, faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommonModule, Location, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgIf],
  providers: [UsersService],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  public faUser: IconDefinition = faUser;
  public faChevronLeft: IconDefinition = faChevronLeft;
  public faInfo: IconDefinition = faInfo;
  public faLocationDot: IconDefinition = faLocationDot;
  public faBuilding: IconDefinition = faBuilding;
  public faSpinner: IconDefinition = faSpinner;

  public loadingUser: boolean = false;

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
    this.loadingUser = true;
    const idNum = parseInt(this.id);
    this.usersService.getUser(idNum).subscribe(user => {
      this.user = user;
      this.loadingUser = false;
    });
  }

  public goBack(): void {
    this.location.back();
  }

}
