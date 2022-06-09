import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id, category, title, author, percent, chapter,
  } = props;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));
  return (
    <li>
      <div className="bookInfo">
        <h3 className="category">{category}</h3>
        <h2 className="title">{title}</h2>
        <h3 className="author">{author}</h3>
        <button type="button" id={id} onClick={remove}>
          Remove
        </button>
      </div>
      <div className="bookProgress">
        <CircularProgressBar
          percent={percent}
          animationSmooth="ls ease-out"
          colorCircle="#f1f1f1"
          colorSlice="#0290ff"
          size={75}
        />
        <div className="progressText">
          <p className="presentage-text">
            {percent}
            %
          </p>
          <p className="completed-text">Completed</p>
        </div>
      </div>
      <div className="bookChapter">
        <p className="currentChapter">Current Chapter</p>
        <p className="chapter">
          Chapter&nbsp;
          {chapter}
        </p>
        <button className="updateBtn" type="button">
          Update progress
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
};

export default Book;
