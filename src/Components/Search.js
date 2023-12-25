// SearchBar.js
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input" colSpan="2">
        <select>
          <option value="1">Bhubaneshwar</option>
          <option value="2">Delhi</option>
          <option value="3">Telengana</option>
        </select>
      </div>
      <div className="investment-dropdown">
        <select>
          <option value="1">Investment</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div className="price-range-dropdown">
        <select>
          <option value="0-500">95lacs - 1Cr</option>
          <option value="501-1000">{"< 95 lacs"}</option>
          <option value="1001-1500">{"above 1 Cr"}</option>
        </select>
      </div>
      <div className="bhk-dropdown">
        <select>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
        </select>
      </div>
      <div className="edit-search">
        <button>Edit Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
