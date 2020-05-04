import { Component, OnInit, Input } from '@angular/core';
import { todoItem } from '../todo-list.component'

@Component({
    selector: 'app-todo-list-add-item',
    templateUrl: './todo-list-add-item.component.html',
    styleUrls: ['./todo-list-add-item.component.scss']
})
export class TodoListAddItemComponent implements OnInit {
    @Input("todo-list") todoList: todoItem[]

    public newTodo = '';

    public onAddTodoClick() {
        if (this.newTodo) {
            this.todoList.push(
                {
                    text: this.newTodo,
                    status: "TODO"

                }
            )
            this.newTodo = ''
        }
    }
    ngOnInit() {
    }

}