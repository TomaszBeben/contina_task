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

  return (
    <div>
      elo
    </div>
  );
}

export default App;
