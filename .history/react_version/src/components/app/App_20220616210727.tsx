import { useState, useEffect } from "react";
import axios from 'axios';

import { getCategories } from "../../api/getCategories";

const App = () => {

  const [categories, setCategories] = useState < string[] > ([]);
  const [error, setError] = useState < string | null > ();


  // const categoriesURL = 'https://api.chucknorris.io/jokes/categories'

  // const getCategories = (url: string) => {
  //   axios.get(url)
  //     .then((response) => {
  //       setCategories(response.data.sort())
  //     })
  //     .catch((error) => {
  //       setError(error)
  //     })
  // }

  const getRandomJoke = (category: string) => {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        alert(response.data.value)
      })
      .catch((error) => {
        setError(error)
      })
  }

  useEffect(() => {
    getCategories(setCategories, setError)
  })

  if (!categories) return null

  return (
    <div>
      {categories.map((element: string, index: number) => {
        return (
          <div key={index}>
            <p >{element}</p>
            <button onClick={() => { getRandomJoke(element) }}>{element}</button>
          </div>

        )
      })}
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default App;
