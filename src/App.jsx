import "./App.css"

import React from "react"

import mojito from "./assets/images/mojito.webp"
import CocktailCard from "./components/CocktailCard"
import CoverPhoto from "./components/CoverPhoto"
import Header from "./components/Header"

const App = () => {
  const cocktailCard = [
    {
      title: "Mojito",
      image: <img src={mojito} alt="mojito" width={200} height={200} />,
    },
    {
      title: "Mojito",
      image: <img src={mojito} alt="mojito" width={200} height={200} />,
    },
    {
      title: "Mojito",
      image: <img src={mojito} alt="mojito" width={200} height={200} />,
    },
    {
      title: "Mojito",
      image: <img src={mojito} alt="mojito" width={200} height={200} />,
    },
    {
      title: "Mojito",
      image: <img src={mojito} alt="mojito" width={200} height={200} />,
    },
    {
      title: "Mojito",
      image: <img src={mojito} alt="mojito" width={200} height={200} />,
    },
    {
      title: "Mojito",
      image: <img src={mojito} alt="mojito" width={200} height={200} />,
    },
  ]
  return (
    <div>
      <Header />
      <CoverPhoto />
      <div className="cocktailCardWrapper">
        {cocktailCard.map(item => (
          <CocktailCard title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default App
