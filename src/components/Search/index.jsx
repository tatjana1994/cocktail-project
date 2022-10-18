import "./Search.scss"

import React from "react"

import SvgIcon from "../SvgIcon"

const Search = () => {
  return (
    <div className="searchContainer">
      <input placeholder="Search for cocktail" className="inputStyle" />
      <SvgIcon className="search-icon" icon="search" width="24px" height="24px" />
    </div>
  )
}

export default Search
