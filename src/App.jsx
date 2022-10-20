import "./App.css"

import React from "react"
import { Route, Routes } from "react-router-dom"

import CocktailsPage from "./components/pages/CocktailsPage"
import RecipePage from "./components/pages/RecipePage"

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<CocktailsPage />} />
      <Route exact path="/recipe" element={<RecipePage />} />
    </Routes>
  )
}

export default App
