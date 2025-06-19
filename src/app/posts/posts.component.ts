import { Location, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faPaperPlane, faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PostService } from '../services/post.service';
import { Post } from '../classes/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  providers: [PostService],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  public faChevronLeft: IconDefinition = faChevronLeft;
  public faPaperPlane: IconDefinition = faPaperPlane;
  public faSpinner: IconDefinition = faSpinner;

  public loadingPosts: boolean = false;

  public id: string = '';

  public posts: Post[] = [];

  private location: Location = inject(Location);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private postService: PostService = inject(PostService);

  constructor() {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.getPosts();
  }

  public getPosts(): void {
    this.loadingPosts = true;
    const idNum = parseInt(this.id);
    this.postService.getPostsByUserId(idNum).subscribe(posts => {
      this.posts = posts;
      this.loadingPosts = false;
    });

  }

  public goBack(): void {

  }

}
