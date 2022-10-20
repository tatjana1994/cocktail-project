import "./Search.scss"

import PropTypes from "prop-types"
import React from "react"

import SvgIcon from "../SvgIcon"

const Search = ({ value, setValue }) => {
  return (
    <div className="searchContainer">
      <input
        placeholder="Search for cocktail"
        className="inputStyle"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <SvgIcon className="search-icon" icon="search" width={24} height={24} />
    </div>
  )
}

Search.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
}

Search.defaultProps = {
  value: "",
  setValue: () => {},
}

export default Search
