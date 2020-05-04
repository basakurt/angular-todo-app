import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  public todoList: todoItem[] = [
    {
      text: "Read a book",
      status: "TODO"
    },
    {
      text: "Feed & love Sisi",
      status: "TODO"
    },
    {
      text: "40 minutes pilates",
      status: "DONE"
    }

  ]

  ngOnInit() {
  }

}