import React from 'react';

const AddBook = () => (
  <div>
    <h3>Add new book</h3>
    <form>
      <input type="text" id="title" placeholder="Book Title" />
      <input type="text" id="author" placeholder="Author" />
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default AddBook;
