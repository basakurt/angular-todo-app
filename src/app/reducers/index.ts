import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from '../app.state';
import { todoReducer } from './todo.reducer';
import { todoModalReducer } from './todo-modal.reducer';

export const reducers: ActionReducerMap<AppState> = {
  todoList: todoReducer,
  todoModal: todoModalReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
