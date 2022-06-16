import axios from 'axios'

export const getCategories = (url: string, setCategories: () => void, setError: () => void) => {
    axios.get(url)
      .then((response) => {
        setCategories(response.data.sort())
      })
      .catch((error) => {
        setError(error)
      })
  }