import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const newBookState = {
  title: '',
  author: '',
};

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, changeBook] = useState(newBookState);
  const { category, title, author } = book;
  const changeTitle = (event) => {
    changeBook({
      ...book,
      title: event.target.value,
    });
  };

  const changeAuthor = (event) => {
    changeBook({
      ...book,
      author: event.target.value,
    });
  };

  const changeCategory = (event) => {
    changeBook({
      ...book,
      category: event.target.value,
    });
  };

  const addNewBook = (event) => {
    event.preventDefault();
    const author = (book.author || '').trim();
    const title = (book.title || '').trim();
    const category = (book.category || '').trim();
    if (author !== '' && title !== '' && category !== '') {
      const newBook = {
        id: uuidv4(),
        category,
        author,
        title,
      };
      dispatch(addBook(newBook));
      changeBook(newBookState);
    }
  };

  return (
    <div className="column formContainer">
      <h2 className="formTitle">Add new book</h2>
      <form className="row" onSubmit={addNewBook}>
        <input
          type="text"
          id="title"
          placeholder="Book Title"
          value={title}
          onChange={changeTitle}
          required
        />
        <input
          type="text"
          id="author"
          placeholder="Author"
          value={author}
          onChange={changeAuthor}
          required
        />
        <select value={category} onChange={changeCategory} required>
          <option value="">Select category</option>
          <option value="Action">Action</option>
          <option value="Economy">Economy</option>
          <option value="Science">Science</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button type="submit" className="text-style">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
