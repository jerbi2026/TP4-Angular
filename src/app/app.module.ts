import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDirective } from './todo.directive';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoPipe } from './todo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoDirective,
    HeadBarComponent,
    TodoListComponent,
    TodoDetailComponent,
    UpdateTodoComponent,
    TodoTemplateDrivenFormComponent,
    TodoReactiveFormComponent,
    TodoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
