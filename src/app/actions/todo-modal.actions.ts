import { Action } from '@ngrx/store'
import { Todo } from '../models/todo.model'

export const HANDLE_TODO_MODAL = '[TODO-MODAL] Handle'

export interface TodoModalPayload {
  todo: Todo,
  index: number
}

export class HandleTodoModal implements Action {
  readonly type = HANDLE_TODO_MODAL

  constructor(public payload: TodoModalPayload) {}
}

export type Actions = HandleTodoModal