import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

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
  { path: '**',
    redirectTo: '/users'
  }
];
