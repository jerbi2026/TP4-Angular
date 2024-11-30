import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-template-driven-form',
  templateUrl: './todo-template-driven-form.component.html',
  styleUrls: ['./todo-template-driven-form.component.css'],
})
export class TodoTemplateDrivenFormComponent {
  newTodo: Todo = {
    id: 0, // L'ID sera généré automatiquement par le service
    title: '',
    description: '',
    date: new Date(),
    done: false,
  };

  constructor(private todoService: TodoService) {}

  onSubmit(form: any): void {
    if (form.valid) {
      // Ajouter le nouveau todo via le service
      this.todoService.addTodo(this.newTodo);

      // Réinitialiser le formulaire
      this.newTodo = {
        id: 0,
        title: '',
        description: '',
        date: new Date(),
        done: false,
      };
      form.resetForm();
      alert('Tâche ajoutée avec succès!');
    }
  }
}
