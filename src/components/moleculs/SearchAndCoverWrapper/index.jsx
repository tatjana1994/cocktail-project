import "./SearchAndCoverWrapper.scss"

import PropTypes from "prop-types"
import React from "react"

import cocktailImage from "../../../assets/images/cocktail-cover.jpeg"
import Search from "../../atoms/Search"

const SearchAndCoverWrapper = ({ value, setValue }) => {
  return (
    <div className="imageContainer">
      <img width="100%" src={cocktailImage} alt="cocktail" />
      <div className="searchWrapper">
        <Search value={value} setValue={setValue} label="Search" inputType="regular-style" />
      </div>
    </div>
  )
}

SearchAndCoverWrapper.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
}

SearchAndCoverWrapper.defaultProps = {
  value: "",
  setValue: () => {},
}

export default SearchAndCoverWrapper
