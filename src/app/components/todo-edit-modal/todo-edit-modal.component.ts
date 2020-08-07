import { Component, OnInit } from '@angular/core';
import { TODO_STATUS } from '../../enums/todo-status';
import { Store } from '@ngrx/store';
import * as TodoModalActions from '../../actions/todo-modal.actions';
import * as TodoActions from '../../actions/todo.actions';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-edit-modal',
  templateUrl: './todo-edit-modal.component.html',
  styleUrls: ['./todo-edit-modal.component.scss']
})
export class TodoEditModalComponent implements OnInit {
  
  selectedTodo: Observable<Todo>;
  selectedTodoIndex: Observable<number>;
  updatedTodo: string;
  updatedTodoStatus: TODO_STATUS;
  index: number;
  
  constructor(private store: Store<AppState>) {
    this.selectedTodo = this.store.select(state => 
      state.todoModal.selectedTodo ? state.todoModal.selectedTodo : null);
      
    this.selectedTodoIndex = this.store.select(state =>
        state.todoModal.selectedTodoIndex ? state.todoModal.selectedTodoIndex : null);

    this.selectedTodo.subscribe(todo => {
      todo && (
        this.updatedTodo = todo.text,
        this.updatedTodoStatus = todo.status
      )
    });

    this.selectedTodoIndex.subscribe(todoIndex => {
      todoIndex && (
        this.index = todoIndex
      )
    });
  }

  ngOnInit() {}

  get todoStatus() { return Object.keys(TODO_STATUS).map(key => TODO_STATUS[key])}

  handleModalOutsideClicked(): void {
    this.store.dispatch(new TodoModalActions.HandleTodoModal(
      {
        todo: null,
        index: null
      }
    )); 
  }

  handleUpdateClicked(): void {
    const todo = {
      text: this.updatedTodo,
      status: this.updatedTodoStatus
    }
    this.store.dispatch(new TodoActions.UpdateTodo(
      {
        todo: todo,
        index: this.index
      }
    ));
    this.handleModalOutsideClicked();
  }
}