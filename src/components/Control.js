// Module imports
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Book Shelf control
 * @constructor
 * @param {string} currentShelf - Current shelf book is on
 * @param {Object[]} shelves - List of shelves
 */
const Control = ({currentShelf, shelves}) => (
  <div className="book-shelf-changer">
    <select>
      <option value="move" disabled>
        Move to...
      </option>
      {shelves.map(({value, title}) => {
        const attributes = currentShelf === value && {selected: true};

        return (
          <option {...attributes} value={value} key={`shelf-${value}`}>
            {title}
          </option>
        );
      })}
      <option value="none">None</option>
    </select>
  </div>
);

// PropTypes
Control.propTypes = {
  currentShelf: PropTypes.string.isRequired,
  shelves: PropTypes.array.isRequired,
};

// Export Component
export default Control;
