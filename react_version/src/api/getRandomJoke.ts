import axios from 'axios';

export const getRandomJoke = (category: string, setError: (arg: string) => void, setJoke: (arg: string) => void) => {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => {
        setJoke(response.data.value);
      })
      .catch((error) => {
        setError(error);
      })
  };