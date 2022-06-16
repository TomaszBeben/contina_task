import axios from 'axios'

export const getCategories = (url: string) => {
    axios.get(url)
      .then((response) => {
        setCategories(response.data.sort())
      })
      .catch((error) => {
        setError(error)
      })
  }