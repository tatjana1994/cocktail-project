import "./CocktailsPage.scss"

import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useDebounce } from "../../../utils/hooks"
import Header from "../../atoms/Header"
import Loading from "../../atoms/Loading"
import CocktailCard from "../../moleculs/CocktailCard"
import SearchAndCoverWrapper from "../../moleculs/SearchAndCoverWrapper"

const CocktailsPage = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [debounceSearch, setDebounceSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useDebounce({
    value: search,
    miliseconds: 500,
    callback: () => setDebounceSearch(search),
  })

  useEffect(() => {
    setLoading(true)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${debounceSearch}`)
      .then(response => response.json())
      .then(json => {
        setData(json.drinks)
        setLoading(false)
      })
      // eslint-disable-next-line no-alert
      .catch(error => alert(error))
  }, [debounceSearch])

  const getPageContent = () => {
    if (data) {
      return (
        <div className="cocktailCardWrapper">
          {data?.map((item, index) => (
            <CocktailCard
              key={index}
              data={item}
              onClick={() => navigate(`/recipe/${item.idDrink}`)}
            />
          ))}
        </div>
      )
    }
    return (
      <p className="noRecipeMessage">Sorry we don&apos;t have that recipe. Please try again :) </p>
    )
  }
  return (
    <div>
      <Header title="COCKTAILS" />
      <SearchAndCoverWrapper value={search} setValue={setSearch} />
      {loading ? <Loading /> : getPageContent()}
    </div>
  )
}

export default CocktailsPage
