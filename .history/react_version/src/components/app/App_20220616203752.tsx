import { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {

  const [categories, setCategories] = useState < string[] > ([])
  const [error, setError] = useState < string | null > ()


  const categoriesURL = 'https://api.chucknorris.io/jokes/categories'
  const getCategories = (url: string) => {
    axios.get(url)
      .then((response) => {
        setCategories(response.data.sort())
      })
      .catch((error) => {
        setError(error)
      })
  }

  const getRandomJoke = (url: string) => {
    axios.get(url)
      .then((response) => {
        alert(response.data.value)
      })
      .catch((error) => {
        setError(error)
      })
  }

  useEffect(() => {
    getCategories(categoriesURL)
  })
  if (!categories) return null


  return (
    <div>
      {categories.map((element, index) => {
        return(
          <span>
            <p key={index}>{element}</p>
          <button>{element}</button>
          </span>
        )
      })}
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default App;
