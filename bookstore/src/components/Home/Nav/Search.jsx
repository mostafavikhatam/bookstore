import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Search({length}) {
  console.log(length)
 
  return (
    <header className="header-search-container">
      <div className="icon-container">
        <FaShoppingCart className="shopping-card" />
        <BiSolidUserCircle className="user-icon" />
        <span className="count-product">{length}</span>
      </div>
      <div className="search-container">
        <div className="seach-icon-container">
          <FiSearch  />
        </div>
        <input type="text" />
        {/* <div classname = "option-container">Option Components for books</div> */}
      </div>
    </header>
  );
}

export default Search;
