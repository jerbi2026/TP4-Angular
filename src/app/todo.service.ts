import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  /*private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodoList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }*/

    private todos: Todo[] = [
      {
        id: 1,
        title: 'Apprendre Angular',
        done: false,
        date: new Date('2024-12-01'),
        description: 'Découvrir les bases du framework Angular.',
      },
      {
        id: 2,
        title: 'Créer une application TODO',
        done: true,
        date: new Date('2024-12-02'),
        description: 'Créer une application avec une liste de tâches.',
      },
      {
        id: 3,
        title: 'Tester les fonctionnalités',
        done: false,
        date: new Date('2024-12-03'),
        description: 'Tester les fonctionnalités de l\'application.',
      },
    ];
  
    constructor() {}
  
    getTodos(): Todo[] {
      return this.todos;
    }
  
    getTodoById(id: number): Todo | undefined {
      return this.todos.find((todo) => todo.id === id);
    }
  
    addTodo(todo: Todo): void {
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
    }
  
    updateTodo(updatedTodo: Todo): void {
      const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
    }
  
    deleteTodo(id: number): void {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}
