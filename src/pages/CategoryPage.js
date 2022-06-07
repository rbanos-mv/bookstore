import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const check = () => dispatch(checkStatus());
  return (
    <button type="button" onClick={check}>
      Check status
    </button>
  );
};

export default CategoryPage;
