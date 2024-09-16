import { Component } from '@angular/core';

interface Todo {
  id?: string;
  title: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTodoTitle = '';
  todos: Todo[] = [];

  // Add a new todo
  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        title: this.newTodoTitle,
        checked: false,
      };
      this.todos.push(newTodo);
      this.newTodoTitle = '';  // Clear the input field
    } else {
      alert('You must write something!');
    }
  }

  // Toggle todo's checked status
  toggleTodoCheck(todo: Todo) {
    todo.checked = !todo.checked;
  }

  // Remove a todo from the list
  removeTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
}
