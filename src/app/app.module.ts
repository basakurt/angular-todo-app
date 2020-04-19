import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { TodoListAddItemComponent } from './todo-list/todo-list-add-item/todo-list-add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListAddItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
