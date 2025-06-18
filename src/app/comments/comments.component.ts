import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComment, faChevronLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FontAwesomeModule],
  providers: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  public faComment: IconDefinition = faComment;
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
    this.location.back();
  }

}
