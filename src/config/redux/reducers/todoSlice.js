import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.todos.find(item => item.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.todos.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        deleteCart: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload.id);//1
        },
        increaseQuantity: (state, action) => {
            const product = state.todos.find(item => item.id === action.payload.id);
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const product = state.todos.find(item => item.id === action.payload.id);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        }
    }
});

export const { addToCart, deleteCart, increaseQuantity, decreaseQuantity } = todoSlice.actions;
export default todoSlice.reducer;
