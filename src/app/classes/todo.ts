export class Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor() {
    this.userId = 0;
    this.id = 0;
    this.title = '';
    this.completed = false;
  }
}
