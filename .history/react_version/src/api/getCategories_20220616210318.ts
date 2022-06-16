import axios from 'axios'

export const getCategories = (setCategories: () => void, setError: () => void) => {
    const categoriesURL = 'https://api.chucknorris.io/jokes/categories'
    axios.get(categoriesURL)
      .then((response) => {
        setCategories(response.data.sort())
      })
      .catch((error) => {
        setError(error)
      })
  }