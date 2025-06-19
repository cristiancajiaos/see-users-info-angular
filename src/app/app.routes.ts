import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
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
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
