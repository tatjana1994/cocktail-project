import "./CocktailCard.scss"

import PropTypes from "prop-types"
import React from "react"

const CocktailCard = ({ title, image }) => {
  return (
    <div className="coctailCardContainer">
      <div className="imageWrapper">{image}</div>
      <div className="titleWrapper">{title}</div>
    </div>
  )
}

CocktailCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

CocktailCard.defaultProps = {
  title: "",
  image: "",
}

export default CocktailCard
