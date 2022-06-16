import axios from 'axios';

export const getCategories = (setCategories: (arg: string[]) => void, setError: (arg: string) => void) => {
    const categoriesURL = 'https://api.chucknorris.io/jokes/categories';
    axios.get(categoriesURL)
      .then((response) => {
        setCategories(response.data.sort())
      })
      .catch((error) => {
        setError(error)
      })
  };