import { Location, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComment, faChevronLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Comment } from '../classes/comment';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, ReactiveFormsModule, NgFor],
  providers: [CommentsService],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  public faComment: IconDefinition = faComment;
  public faChevronLeft: IconDefinition = faChevronLeft;

  public id: string = '';

  public comments: Comment[] = [];

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private location: Location = inject(Location);
  private commentsService: CommentsService = inject(CommentsService);

  constructor() {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.setComments();
  }

  public setComments(): void {
    const idNum = parseInt(this.id);
    this.commentsService.getComments(idNum).subscribe(comments => {
      this.comments = comments;
    });
  }

  public goBack(): void {
    this.location.back();
  }

}
