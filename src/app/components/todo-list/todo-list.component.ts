import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { AppState } from '../../app.state';
import { TodoModalState } from 'src/app/reducers/todo-modal.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Observable<Todo[]>;
  todoModal: Observable<TodoModalState>;
  todoModalStatus: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.todoList = store.select('todoList');
    this.todoModal = store.select('todoModal');
    this.todoModalStatus = this.store.select(state => state.todoModal.todoModalStatus);
  }

  ngOnInit() {
  }
}