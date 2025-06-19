import { Location, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faList,
  faChevronLeft,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  public faList: IconDefinition = faList;
  public faChevronLeft: IconDefinition = faChevronLeft;

  public id: string = '';

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private location: Location = inject(Location);

  constructor() {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  public goBack(): void {
    this.router.navigateByUrl('users');
  }
}
