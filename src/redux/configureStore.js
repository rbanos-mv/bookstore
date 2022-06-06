import { configureStore, combineReducers } from 'react-redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore(reducer);

export default store;
