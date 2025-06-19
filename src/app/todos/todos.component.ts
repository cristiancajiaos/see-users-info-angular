import { Location, CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faList,
  faChevronLeft,
  faSpinner,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { TodosService } from '../services/todos.service';
import { Todo } from '../classes/todo';
import { UiSwitchModule } from 'ngx-ui-switch';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgFor, UiSwitchModule],
  providers: [TodosService],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  public faList: IconDefinition = faList;
  public faChevronLeft: IconDefinition = faChevronLeft;
  public faSpinner: IconDefinition = faSpinner;

  public loadingTodos: boolean = false;

  public id: string = '';

  public todos: Todo[] = [];

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private location: Location = inject(Location);
  private todosService: TodosService = inject(TodosService);

  constructor() {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.setTodos();
  }

  private setTodos(): void {
    this.loadingTodos = true;
    const idNum: number = parseInt(this.id);
    this.todosService.getTodos(idNum).subscribe(todos => {
      this.todos = todos;
      this.loadingTodos = false;
    });

  }

  public goBack(): void {
    this.router.navigateByUrl('users');
  }
}
