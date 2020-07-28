import { createReducer, on, props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { todoItem } from '../components/todo-list/todo-list.component';

export const handleEditModal = createAction('Handle Edit Modal');

const initialState = false;
 
const _modalReducer = createReducer(initialState,
  on(handleEditModal,state => !state));
 
export function modalReducer(state: any, action: any) {
  return _modalReducer(state, action);
}
