const ADD = 'bookstore/Book/ADD';
const REMOVE = 'bookstore/Book/REMOVE';

export function addBook(book) {
  return { type: ADD, book };
}

export function removeBook(id) {
  return { type: REMOVE, id };
}

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];

    case REMOVE:
      return [...state].filter((book) => book.id !== action.id);

    default:
      return state;
  }
}
