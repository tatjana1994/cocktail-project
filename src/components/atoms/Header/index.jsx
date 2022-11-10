import "./Header.scss"

import PropTypes from "prop-types"
import React from "react"

const Header = ({ title }) => {
  return (
    <div className="headerContainer">
      <div className="headerTitleWrapper">{title}</div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: "",
}

export default Header
