import "./CocktailCard.scss"

import PropTypes from "prop-types"
import React from "react"

import noImage from "../../../assets/images/no-image.jpeg"

const CocktailCard = ({ data, onClick }) => {
  return (
    <div role="button" onClick={onClick} className="coctailCardContainer">
      {data.strDrinkThumb ? (
        <div className="imageWrapper">
          <img src={data.strDrinkThumb} width={150} height={150} alt="drink" />
        </div>
      ) : (
        <div className="imageWrapper">
          <img src={noImage} width={200} height={150} alt="drink" />
        </div>
      )}
      <div>
        <div className="titleWrapper">{data.strDrink}</div>
        <div className="descriptionWrapper">{data.strInstructions}</div>
      </div>
    </div>
  )
}

CocktailCard.propTypes = {
  data: PropTypes.instanceOf(Object),
  onClick: PropTypes.func,
}

CocktailCard.defaultProps = {
  data: {},
  onClick: () => {},
}

export default CocktailCard
