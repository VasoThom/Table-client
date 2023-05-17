import React from "react";

const SearchbyEmail = ({ handleChange }) => {
  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        placeholder="search by Email..."
      />
    </div>
  );
};

export default SearchbyEmail;
