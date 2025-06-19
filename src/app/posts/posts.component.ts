import { Location, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faPaperPlane, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  public faChevronLeft: IconDefinition = faChevronLeft;
  public faPaperPlane: IconDefinition = faPaperPlane;

  public id: string = '';

  private location: Location = inject(Location);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
  }

}
