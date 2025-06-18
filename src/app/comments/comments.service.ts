import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  public getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/posts/${id}/comments`);
  }
}
