import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { TodoListItemComponent } from './components/todo-list/todo-list-item/todo-list-item.component';
import { TodoListAddItemComponent } from './components/todo-list/todo-list-add-item/todo-list-add-item.component';
import { TodoEditModalComponent } from './components/todo-edit-modal/todo-edit-modal.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListAddItemComponent,
    TodoEditModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
