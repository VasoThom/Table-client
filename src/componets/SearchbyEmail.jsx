import React from "react";
import "./SearchByEmail.css";

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
