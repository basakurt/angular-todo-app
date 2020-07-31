import * as TodoModalActions from './../actions/todo-modal.actions'
import { Todo } from '../models/todo.model';

export interface TodoModalState {
  todoModalStatus: boolean
  selectedTodo: Todo
}
const initialState: TodoModalState = {
  todoModalStatus: false,
  selectedTodo: null
};

export function todoModalReducer(state: TodoModalState = initialState, action: TodoModalActions.Actions) {
  switch(action.type) {
      case TodoModalActions.HANDLE_TODO_MODAL:
        return {
          ...state,
          todoModalStatus: !state.todoModalStatus,
          selectedTodo: action.payload
        }

      default:
        return state;
  }
}