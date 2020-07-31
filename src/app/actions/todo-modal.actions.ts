import { Action } from '@ngrx/store'
import { Todo } from '../models/todo.model'

export const HANDLE_TODO_MODAL = '[TODO-MODAL] Handle'

export class HandleTodoModal implements Action {
  readonly type = HANDLE_TODO_MODAL

  constructor(public payload: Todo) {}
}

export type Actions = HandleTodoModal