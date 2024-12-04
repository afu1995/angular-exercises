import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-checkboxes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>TODO List</h1>
    <div class="todo-list">
      @for(todo of todos(); track todo.id){
      <section class="todo-item">
        <input
          type="checkbox"
          [checked]="todo.completed"
          (change)="updateTodo(todo)"
        />
        <label
          [ngStyle]="{
            'text-decoration': todo.completed ? 'line-through' : 'none'
          }"
          >{{ todo.title }}</label
        >
      </section>
      }
    </div>
  `,
  styleUrls: ['./styles.css'],
})
export class TodolistComponent {
  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Fitness',
      completed: false,
    },
    {
      id: 2,
      title: 'Groceries',
      completed: false,
    },
    {
      id: 3,
      title: 'Walk 5km',
      completed: false,
    },
  ]);
  updateTodo(todo: Todo) {
    console.log('Updating todo:', todo);
    this.todos.update((todosList) => {
      const index = todosList.findIndex((t) => t.id === todo.id);
      todosList[index].completed = !todosList[index].completed;
      return todosList;
    });
  }
}
