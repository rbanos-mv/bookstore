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
    <li className="row bookCard">
      <div className="column bookInfo">
        <h3 className="category opacity-50">{category}</h3>
        <h2 className="bookTitle">{title}</h2>
        <h3 className="text-style-6">{author}</h3>
        <ul className="row actions">
          <li>
            <button type="button" className="text-style-6">
              Comments
            </button>
          </li>
          <li>
            <button type="button" id={id} className="text-style-6" onClick={remove}>
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="text-style-6">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="row bookProgress">
        <CircularProgressBar
          percent={percent}
          animationSmooth="ls ease-out"
          colorCircle="#f1f1f1"
          colorSlice="#0290ff"
          size={75}
        />
        <div className="column progressText">
          <p className="presentage-text">
            {percent}
            %
          </p>
          <p className="text-style-2 opacity-50">Completed</p>
        </div>
      </div>
      <div className="column bookChapter">
        <p className="currentChapter opacity-50">Current Chapter</p>
        <p className="text-style-4">
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
