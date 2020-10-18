// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Component imports
import BookCover from './BookCover';
import Control from './Control';
import BookAuthors from './BookAuthors';

/**
 * Displays a single Book
 * @constructor
 * @param {[]} authors - Book authors
 * @param {string} backgroundImage - Link to book cover image
 * @param {string} currentShelf - Current shelf book is on
 * @param {Object[]} shelves - List of shelves
 * @param {string} title - Book title
 */
const Book = ({authors, backgroundImage, currentShelf, shelves, title}) => (
  <li>
    <div className="book">
      <div className="book-top">
        <BookCover backgroundImage={backgroundImage} />
        <Control shelves={shelves} currentShelf={currentShelf} />
      </div>
      <div className="book-title">{title}</div>
      <BookAuthors authors={authors} />
    </div>
  </li>
);

// PropTypes
Book.propTypes = {
  authors: PropTypes.array.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  currentShelf: PropTypes.string.isRequired,
  shelves: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

// Export component
export default Book;
