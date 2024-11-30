import { Component, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent {
  @Input() todoToUpdate: Todo = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    done: false,
  };

  constructor(private todoService: TodoService) {}

  onSubmit(form: any): void {
    if (form.valid) {
      this.todoService.updateTodo(this.todoToUpdate);
      alert('Tâche mise à jour avec succès!');
    }
  }
}
