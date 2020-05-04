import { Component, OnInit, Input } from '@angular/core';
import { todoItem } from '../todo-list.component'
@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
    @Input('todo') todo: todoItem
    @Input('todo-list') todoList: todoItem[]
    @Input('index') index: number;

    public getClass(status: string) {
        let classnames = {
            "TODO": "list-item_todo",
            "IN-PROGRESS": "list-item_in-progress",
            "DONE": "list-item_done"
        }
        console.log(classnames[status])
        return classnames[status]
    }
    public handleDeleteClicked(index: number) {
        this.todoList.splice(index, 1)
    }
    ngOnInit() {
    }

}