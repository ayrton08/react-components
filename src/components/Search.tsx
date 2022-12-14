import React from "react";
import "./search.css";

export const Search = () => {
  return (
    <form>
      <label htmlFor="default-search" className="label">
        Search
      </label>
      <div className="container">
        <svg
          aria-hidden="true"
          className="svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="input"
        placeholder="Search Mockups, Logos..."
        required
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
};

export default Search;
