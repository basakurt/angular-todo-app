import { Component, OnInit } from '@angular/core';
import { TODO_STATUS } from '../../enums/todo-status';
import { Store } from '@ngrx/store';
import * as TodoModalActions from '../../actions/todo-modal.actions';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-edit-modal',
  templateUrl: './todo-edit-modal.component.html',
  styleUrls: ['./todo-edit-modal.component.scss']
})
export class TodoEditModalComponent implements OnInit {
  
  selectedTodoText: Observable<string>;
  updatedTodoText: string;
  
  constructor(private store: Store<AppState>) {
    this.selectedTodoText = this.store.select(state => 
      state.todoModal.selectedTodo ? state.todoModal.selectedTodo.text : '' );
  }

  ngOnInit() {
  }

  get todoStatus() { return Object.keys(TODO_STATUS).map(key => TODO_STATUS[key])}

  handleModalOutsideClicked(): void {
    this.store.dispatch(new TodoModalActions.HandleTodoModal(null)); 
  }

  handleUpdateClicked(): void {}
}