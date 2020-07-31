import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import * as TodoActions from '../../../actions/todo.actions';
import { TODO_STATUS } from '../../../enums/todo-status';

@Component({
    selector: 'app-todo-list-add-item',
    templateUrl: './todo-list-add-item.component.html',
    styleUrls: ['./todo-list-add-item.component.scss']
})
export class TodoListAddItemComponent implements OnInit {
    constructor(private store: Store<AppState>) {}

    public newTodo = '';

    public handleAddClicked() {
        if (this.newTodo) {
            this.addTodo(this.newTodo)
            this.newTodo = ''
        }
    }

    addTodo(text: string) {
        this.store.dispatch(new TodoActions.AddTodo(
            {text: text, status: TODO_STATUS.TODO}
        ))
    }

    ngOnInit() {
    }
}