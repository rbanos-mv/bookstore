import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <ul>
      {books.map((book) => {
        const {
          id, category, title, author, percent, chapter,
        } = book;
        return (
          <Book
            key={id}
            {...{
              id,
              category,
              title,
              author,
              percent,
              chapter,
            }}
          />
        );
      })}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      percent: PropTypes.number.isRequired,
      chapter: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default BookList;
