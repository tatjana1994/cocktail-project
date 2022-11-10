import "./Loading.scss"

import React from "react"

import loading from "../../../assets/images/loading.gif"

const Loading = () => {
  return (
    <div className="loadingContainer">
      <img width="100" height="100" src={loading} alt="Loading animation" />
    </div>
  )
}

export default Loading
