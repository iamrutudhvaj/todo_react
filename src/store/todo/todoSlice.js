import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoSuccess: (state, action) => {
            state.todos.push(action.payload);
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        updateTodos: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    console.log(action.payload);
                    return action.payload
                }
                return todo
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        checkBoxChange: (state, action) => {
            const { id, isCompleted } = action.payload;
            console.log(action.payload);
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    console.log(todo);
                    return {
                        ...todo,
                        isCompleted
                    }
                }
                return todo;
            })
        }
    },
});

export const { addTodoSuccess, setTodos, updateTodos, deleteTodo, checkBoxChange } = todoSlice.actions;

export default todoSlice.reducer;