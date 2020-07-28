import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { modalReducer } from './modal.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  isEditTodoOpen: modalReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
