import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TODO_STATUS } from '../../enums/todo-status';

export interface todoItem {
  text: string,
  status: string
};

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoList: todoItem[] = [
    {
      text: "Read a book",
      status: TODO_STATUS.TODO
    },
    {
      text: "Feed & love Sisi",
      status: TODO_STATUS.TODO
    },
    {
      text: "Clean the house",
      status: TODO_STATUS.IN_PROGRESS
    },
    {
      text: "40 minutes pilates",
      status: TODO_STATUS.DONE
    }
  ]

  isEditTodoOpen$: Observable<boolean>;

  constructor(private store: Store<{ isEditTodoOpen: boolean }>) {
    this.isEditTodoOpen$ = store.pipe(select('isEditTodoOpen'));
  }
  ngOnInit() {
  }
}