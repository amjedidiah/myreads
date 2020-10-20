// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import BookList from './BookList';

/**
 * Displays a book shelf
 * @constructor
 * @param {Object[]} particularShelfBooks - List of books in a particular shelf
 * @param {Object[]} shelves - List of shelves
 * @param {string} title - Book shelf title
 */
const BookShelf = ({particularShelfBooks, shelves, title}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>

    <div className="bookshelf-books">
      <BookList
        bookIDList={particularShelfBooks.map(({id}) => id)}
        shelves={shelves}
      />
    </div>
  </div>
);

// Component propTypes
BookShelf.propTypes = {
  particularShelfBooks: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

// Export component
export default BookShelf;
