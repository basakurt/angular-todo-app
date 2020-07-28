import { Component, OnInit, Input } from '@angular/core';
import { todoItem } from '../todo-list.component';
import { handleEditModal } from '../../../reducers/modal.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
    @Input('todo') todo: todoItem
    @Input('todo-list') todoList: todoItem[]
    @Input('index') index: number;

    isEditTodoOpen$: Observable<boolean>;
    isEditTodoOpen: boolean;

    constructor(private store: Store<{ isEditTodoOpen: boolean }>) {
        this.isEditTodoOpen$ = store.pipe(select('isEditTodoOpen'));
    }

    ngOnInit() {
        this.isEditTodoOpen$.subscribe(isEditTodoOpen => this.isEditTodoOpen = isEditTodoOpen);
    }

    public getClass(status: string) {
        let classnames = {
            "TODO": "list-item_todo",
            "IN-PROGRESS": "list-item_in-progress",
            "DONE": "list-item_done"
        }
        return classnames[status]
    }

    handleDeleteClicked(index: number): void {
        this.todoList.splice(index, 1)
    }

    handleEditClicked (index: number): void {
        const todoItem = this.todoList[index];
        this.store.dispatch(handleEditModal()); 
    }
}