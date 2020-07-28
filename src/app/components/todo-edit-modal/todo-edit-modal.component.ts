import { Component, OnInit } from '@angular/core';
import { TODO_STATUS } from '../../enums/todo-status';
import { Store } from '@ngrx/store';

import { handleEditModal } from 'src/app/reducers/modal.reducer';

@Component({
  selector: 'app-todo-edit-modal',
  templateUrl: './todo-edit-modal.component.html',
  styleUrls: ['./todo-edit-modal.component.scss']
})
export class TodoEditModalComponent implements OnInit {
  constructor(private store: Store) {}

  get todoStatus() { return Object.keys(TODO_STATUS).map(key => TODO_STATUS[key])}

  handleModalOutsideClicked(): void{
    this.store.dispatch(handleEditModal()); 
  }

  ngOnInit() {
  }
}