import React from 'react';

const AddBook = () => (
  <div>
    <h3>Add new book</h3>
    <form>
      <input type="text" id="title" placeholder="Book Title" />
      <select id="category" name="category">
        <option value="" disabled>
          Category1
        </option>
        <option value="" disabled>
          Category2
        </option>
        <option value="" selected disabled>
          Category3
        </option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default AddBook;
