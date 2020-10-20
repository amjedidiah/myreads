// Module imports
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Book Shelf control
 * @constructor
 * @param {string} currentShelf - Current shelf book is on
 * @callback onChangeShelf
 * @param {Object[]} shelves - List of shelves
 */
const Control = ({currentShelf, onControlChangeShelf, shelves}) => (
  <div className="book-shelf-changer">
    <select
      value={currentShelf}
      onChange={(e) => onControlChangeShelf(e.target.value)}
    >
      <option value="move" disabled>
        Move to...
      </option>
      {shelves.map(({value, title}) => (
        <option value={value} key={`shelf-${value}`}>
          {title}
        </option>
      ))}
      <option value="none">None</option>
    </select>
  </div>
);

/**
 * Component propTypes
 */
Control.propTypes = {
  currentShelf: PropTypes.string,
  onControlChangeShelf: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired,
};

// Export Component
export default Control;
