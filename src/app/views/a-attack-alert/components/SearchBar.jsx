import React from "react";

function SearchBar({ handleSubmit, handleChange, search, disabled }) {
  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="search"
            type="search"
            value={search}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" disabled={disabled}>
            조회
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
