import { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {
  
  const [categories, setCategories] = useState<string[]>([])

  const getCategories = (url) => {
    axios.get()
  }

  return (
    <div>
    </div>
  );
}

export default App;
