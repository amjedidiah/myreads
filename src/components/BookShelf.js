// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import BookList from './BookList';

/**
 * Displays a book shelf
 * @constructor
 * @param {Object[]} bookList - List of books
 * @param {Object[]} shelves - List of shelves
 * @param {string} title - Book shelf title
 */
const BookShelf = ({bookList, shelves, title}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>

    <div className="bookshelf-books">
      <BookList bookList={bookList} shelves={shelves} />
    </div>
  </div>
);

// PropTYpes
BookShelf.propTypes = {
  bookList: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

// Export component
export default BookShelf;
