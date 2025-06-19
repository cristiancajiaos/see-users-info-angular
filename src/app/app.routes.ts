import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailComponent
  },
  {
    path: 'comments/:id',
    component: CommentsComponent
  },
  {
    path: 'todos/:id',
    component: TodosComponent
  },
  {
    path: 'posts/:id',
    component: PostsComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
