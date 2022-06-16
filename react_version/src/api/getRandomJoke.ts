import axios from 'axios'

export const getRandomJoke = (category: string, setError: (arg: string) => void) => {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        alert(response.data.value)
        console.log(response.data);
      })
      .catch((error) => {
        setError(error)
      })
  }