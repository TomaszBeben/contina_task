import { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {

  const [categories, setCategories] = useState<string[]>([])

  const getCategories = (url) => {
    axios.get(url)
  }

  return (
    <div>
      elo
    </div>
  );
}

export default App;
