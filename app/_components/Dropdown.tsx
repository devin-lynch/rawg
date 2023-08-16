import { useState } from 'react';

export default function Dropdown({ searchType, handleSearchTypeChange }) {
  return (
    <div className="dropdown">
      <label htmlFor="searchType">Search via: </label>

      <select
        name="searchType"
        id="searchType"
        value={searchType}
        onChange={(e) => handleSearchTypeChange(e.target.value)}
      >
        <option value="gameTitles">Title</option>
        <option value="developers">Developers</option>
        <option value="platforms">Platforms</option>
      </select>
    </div>
  );
}
