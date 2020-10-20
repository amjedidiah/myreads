// Module imports
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays Book authors
 * @constructor
 * @param {[]} authors - Book authors
 */
const BookAuthors = ({authors}) => (
  <div className="book-authors">
    {authors &&
      authors.map((author, i) => (
        <span key={`author-${i}`}>
          {i > 0 && ` | `}
          {author}
        </span>
      ))}
  </div>
);

// Component propTypes
BookAuthors.propTypes = {
  authors: PropTypes.array,
};

// Export Component
export default BookAuthors;
