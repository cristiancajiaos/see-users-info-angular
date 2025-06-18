import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'comments/:id',
    component: CommentsComponent
  },
  { path: '**',
    redirectTo: '/users'
  }
];
