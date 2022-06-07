import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import preloadedState from './initialData';

const store = configureStore({
  preloadedState,
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
