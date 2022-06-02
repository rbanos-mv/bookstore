import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, author } = props;
  return (
    <li>
      <h4>{title}</h4>
      <h6>{author}</h6>
      <button type="button" id={id}>
        Remove
        {' '}
      </button>
    </li>
  );
};

export default Book;
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
