import React from "react";

const Filter = props => {
  return (
    <select
      value={props.filterValue}
      onChange={event => props.handleChange(event.target.value)}
    >
      <option value="none">Please select genre</option>
      <option value="romance">Romance</option>
      <option value="school">School</option>
      <option value="comedy">Comedy</option>
      <option value="drama">Drama</option>
      <option value="slice of life">Slice of Life</option>
      <option value="thriller">Thriller</option>
    </select>
  );
};

export default Filter;
