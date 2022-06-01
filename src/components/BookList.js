import React from 'react';
import Book from './Book';

const BOOKDATA = [
  {
    id: 1,
    title: 'The Hunger Game',
    author: 'Suzanne Collins',
    category: 'action',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'science fiction',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'economy',
  },
];

const BookList = () => (
  <div>
    <ul>
      {BOOKDATA.map((book) => {
        const {
          id, title, author, category,
        } = book;
        return (
          <Book
            key={id}
            {...{
              id,
              title,
              author,
              category,
            }}
          />
        );
      })}
    </ul>
  </div>
);

export default BookList;
