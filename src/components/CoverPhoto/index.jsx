import "./CoverPhoto.scss"

import React from "react"

import cocktailImage from "../../assets/images/cocktail-cover.jpeg"
import Search from "../Search"

const CoverPhoto = () => {
  return (
    <div className="imageContainer">
      <img width="100%" src={cocktailImage} alt="BigCo Inc. logo" />
      <div className="searchWrapper">
        <Search label="Search" inputType="regular-style" />
      </div>
    </div>
  )
}

export default CoverPhoto
