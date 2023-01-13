import "./CocktailSpecification.scss"

import PropTypes from "prop-types"
import React from "react"

import SvgIcon from "../SvgIcon"

const CocktailSpecification = ({ data, iconName, width, height, fill, margin }) => {
  return (
    <div className="cocktailSpecifications">
      <SvgIcon icon={iconName} width={width} height={height} fill={fill} margin={margin} />
      <p className="specificationText">{data}</p>
    </div>
  )
}

CocktailSpecification.propTypes = {
  data: PropTypes.instanceOf(Object),
  iconName: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  margin: PropTypes.string,
}

CocktailSpecification.defaultProps = {
  data: {},
  iconName: "",
  width: 20,
  height: 20,
  fill: "black",
  margin: "",
}
export default CocktailSpecification
