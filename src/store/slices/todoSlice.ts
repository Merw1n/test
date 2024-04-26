import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    { id: 1, text: 'Learn React', completed: false, deleted: false },
    { id: 2, text: 'Learn Redux', completed: false, deleted: false },
  ],
};



const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.deleted = true;
      }
    },
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
        deleted: false,
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action: PayloadAction<{ id: number, newText: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText;
      }
    },
  },
});

export const { toggleTodo, deleteTodo, addTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
