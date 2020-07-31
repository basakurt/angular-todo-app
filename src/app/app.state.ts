import { Todo } from './models/todo.model';
import { TodoModalState } from './reducers/todo-modal.reducer';

export interface AppState {
  readonly todoList: Todo[] 
  readonly todoModal: TodoModalState
}