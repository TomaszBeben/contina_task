import { useState, useEffect } from "react";

import { getCategories } from "../../api/getCategories";
import { getRandomJoke } from "../../api/getRandomJoke";

const App = () => {

  const [categories, setCategories] = useState < string[] > ([]);
  const [error, setError] = useState < string | null > ();

  useEffect(() => {
    getCategories(setCategories, setError)
  }, [])

  if (!categories) return null

  return (
    <div>
      {categories.map((element: string, index: number) => {
        return (
          <div key={index}>
            <p >{element}</p>
            <button onClick={() => { getRandomJoke(element, setError) }}>{element}</button>
          </div>

        )
      })}
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default App;
