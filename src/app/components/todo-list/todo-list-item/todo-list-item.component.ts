import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../../models/todo.model';
import { Store, select } from '@ngrx/store';
import * as TodoActions from '../../../actions/todo.actions';
import * as TodoModalActions from '../../../actions/todo-modal.actions';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
    @Input('todo') todo: Todo
    @Input('index') index: number;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {}

    public getClass(status: string) {
        let classnames = {
            "TODO": "list-item_todo",
            "IN-PROGRESS": "list-item_in-progress",
            "DONE": "list-item_done"
        }
        return classnames[status]
    }

    handleDeleteClicked(): void {
        this.store.dispatch(new TodoActions.RemoveTodo(this.index) )
    }

    handleEditClicked (): void {
        this.store.dispatch(new TodoModalActions.HandleTodoModal(this.todo)); 
    }
}