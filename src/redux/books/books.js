import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore/Book/ADD';
const REMOVE = 'bookstore/Book/REMOVE';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Game',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

export function addBook(book) {
  return { type: ADD, book };
}

export function removeBook(id) {
  return { type: REMOVE, id };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];

    case REMOVE:
      return [...state].filter((book) => book.id !== action.id);

    default:
      return state;
  }
}
