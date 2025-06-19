import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  public getTodos(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/users/${id}/todos`);
  }




}
