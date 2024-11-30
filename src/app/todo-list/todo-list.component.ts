import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodoList().subscribe((data) => {
      this.todos = data;
    });
  }

  deleteTodo(todo: any): void {
    this.todoService.deleteTodo(todo.id).subscribe(() => {
      this.loadTodos();
    });
  }

  displayTodoDetail(todo: any): void {
    // Implémentez l'affichage des détails ici
  }
}
