import "./RecipePage.scss"

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import noImage from "../../../assets/images/no-image.jpeg"
import Header from "../../atoms/Header"
import Loading from "../../atoms/Loading"
import SvgIcon from "../../atoms/SvgIcon"

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
            {data.strAlcoholic === "Alcoholic" ? (
              <>
                <SvgIcon icon="alcohol" width={20} height={20} fill="black" />
                <p className="specificationText">{data.strAlcoholic}</p>
              </>
            ) : (
              <>
                <SvgIcon icon="fruit" width={20} height={20} fill="black" />
                <p className="specificationText">{data.strAlcoholic}</p>
              </>
            )}

            <SvgIcon icon="star" width={24} height={24} fill="black" margin="0 0 0 20px" />
            <p className="specificationText">{data.strCategory}</p>

            <SvgIcon icon="glass" width={22} height={22} fill="black" margin="0 0 0 20px" />
            <p className="specificationText">{data.strGlass}</p>
          </div>

          <div className="recipeInstructions">Recipe: {data.strInstructions}</div>

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
                    {item}
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
