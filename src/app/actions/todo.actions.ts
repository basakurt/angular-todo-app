import { Action } from '@ngrx/store'
import { Todo } from '../models/todo.model'

export const ADD_TODO = '[TODO] Add'
export const REMOVE_TODO = '[TODO] Remove'
export const UPDATE_TODO = '[TODO] Update'

export class AddTodo implements Action {
    readonly type = ADD_TODO

    constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO

    constructor(public payload: number) {}
}

interface UpdateTodoPayload {
  todo: Todo,
  index: number
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO
 
  constructor(public payload: UpdateTodoPayload) {}
}

export type Actions = AddTodo | RemoveTodo | UpdateTodo 