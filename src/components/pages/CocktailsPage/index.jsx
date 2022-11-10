import "./CocktailsPage.scss"

import React, { useEffect, useState } from "react"

import { useDebounce } from "../../../utils/hooks"
import CocktailCard from "../../CocktailCard"
import Header from "../../Header"
import SearchAndCoverWrapper from "../../SearchAndCoverWrapper"

const CocktailsPage = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [debounceSearch, setDebounceSearch] = useState("")

  useDebounce({
    value: search,
    miliseconds: 500,
    callback: () => setDebounceSearch(search),
  })

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${debounceSearch}`)
      .then(response => response.json())
      .then(json => {
        setData(json.drinks)
      })
      .catch(error => alert(error))
    // .finally(() => setIsLoading(false))
  }, [debounceSearch])
  return (
    <div>
      <Header />
      <SearchAndCoverWrapper value={search} setValue={setSearch} />
      <div className="cocktailCardWrapper">
        {data?.map(item => (
          <CocktailCard data={item} />
        ))}
      </div>
    </div>
  )
}

export default CocktailsPage
