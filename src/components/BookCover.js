// Module imports
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays Book Cover
 * @constructor
 * @param {string} backgroundImage - Link to book cover image
 */
const BookCover = ({backgroundImage}) => (
  <div
    className="book-cover"
    style={{
      width: 128,
      height: 193,
      backgroundImage,
    }}
  ></div>
);

// Component propTypes
BookCover.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

// Export component
export default BookCover;
