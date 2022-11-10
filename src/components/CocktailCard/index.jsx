import "./CocktailCard.scss"

import PropTypes from "prop-types"
import React from "react"

const CocktailCard = ({ data }) => {
  return (
    <div className="coctailCardContainer">
      <div className="imageWrapper">
        <img src={data.strDrinkThumb} width={150} height={150} alt="aaa" />
      </div>
      <div>
        <div className="titleWrapper">{data.strDrink}</div>
        <div className="descriptionWrapper">{data.strInstructions}</div>
      </div>
    </div>
  )
}

CocktailCard.propTypes = {
  data: PropTypes.instanceOf(Object),
}

CocktailCard.defaultProps = {
  data: {},
}

export default CocktailCard
