import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.loadTodos();
  }

  viewTodoDetail(todo: Todo): void {
    console.log('Détails du todo :', todo);
  }

  editTodo(todo: Todo): void {
    console.log('Modification du todo :', todo);
  }
}
