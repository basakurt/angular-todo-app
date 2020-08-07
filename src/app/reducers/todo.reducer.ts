import { Todo } from './../models/todo.model'
import { TODO_STATUS } from '../enums/todo-status';
import * as TodoActions from './../actions/todo.actions'

const todoList: Todo[] = [
  {
    text: "Read a book",
    status: TODO_STATUS.TODO
  },
  {
    text: "Feed & love Sisi",
    status: TODO_STATUS.TODO
  },
  {
    text: "Clean the house",
    status: TODO_STATUS.IN_PROGRESS
  },
  {
    text: "40 minutes pilates",
    status: TODO_STATUS.DONE
  }
]

const initialState: Todo [] = todoList;

// Reducers

export function todoReducer(state: Todo [] = initialState, action: TodoActions.Actions) {
    switch(action.type) {
        case TodoActions.ADD_TODO:
          return [...state, action.payload];

        case TodoActions.REMOVE_TODO: 
          const index = action.payload
          return [...state.slice(0, index), ...state.slice(index + 1)];

        case TodoActions.UPDATE_TODO:
          const todoIndex = action.payload.index;
          return [
            ...state.slice(0, todoIndex),
            Object.assign({}, state[todoIndex], action.payload.todo),
            ...state.slice(todoIndex + 1),
          ];

        default:
          return state;
    }
}