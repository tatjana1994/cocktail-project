import "./RecipePage.scss"

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import noImage from "../../../assets/images/no-image.jpeg"
import CocktailSpecification from "../../atoms/CocktailSpecification"
import Header from "../../atoms/Header"
import Loading from "../../atoms/Loading"

const RecipePage = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const extractObjectData = (obj, string) => {
    const ingredients = []
    if (!obj) {
      return ingredients
    }
    const ingredientsKeys = Object.keys(obj).filter(item => item.indexOf(string) === 0)

    ingredientsKeys.forEach(item => {
      if (obj[item]) {
        ingredients.push(obj[item])
      }
    })
    return ingredients
  }

  const ingredients = extractObjectData(data, "strIngredient")
  const measure = extractObjectData(data, "strMeasure")

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(json => {
        setData(json.drinks[0])
        setLoading(false)
      })
      // eslint-disable-next-line no-alert
      .catch(error => alert(error))
  }, [])

  //
  return (
    <div>
      <Header title="RECIPE" />

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="nameOfCockail"> {data.strDrink} </div>
          <div className="cocktailSpecifications">
            {data.strAlcoholic === "Alcoholic" || data.strAlcoholic === "Optional alcohol" ? (
              <CocktailSpecification data={data.strAlcoholic} iconName="alcohol" />
            ) : (
              <div>
                <CocktailSpecification data={data.strAlcoholic} iconName="fruit" />
              </div>
            )}
            <CocktailSpecification data={data.strCategory} iconName="star" width={24} height={24} />
            <CocktailSpecification data={data.strGlass} iconName="glass" width={22} height={22} />
          </div>

          <div className="recipeInstructions">
            <div className="title">Recipe:</div>
            <div className="recipe">{data.strInstructions}</div>
          </div>

          <div className="recipeContainer">
            {data.strDrinkThumb ? (
              <div className="image">
                <img src={data.strDrinkThumb} width={300} height={300} alt="drink" />
              </div>
            ) : (
              <div className="image">
                <img src={noImage} width={400} height={300} alt="drink" />
              </div>
            )}

            <div className="ingredientsCointaner">
              <div className="ingredientWrapper">
                <p className="columnTitle">Ingredients</p>
                {ingredients.map((item, index) => (
                  <p className="details" key={index}>
                    {item}:
                  </p>
                ))}
              </div>
              <div>
                <div className="columnTitle rightSide">Measure</div>
                {measure.map((item, index) => (
                  <p className="details" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

RecipePage.propTypes = {}

RecipePage.defaultProps = {}

export default RecipePage
