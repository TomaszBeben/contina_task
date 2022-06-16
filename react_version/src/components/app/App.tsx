import { useState, useEffect, FC } from "react";

import { getCategories } from "../../api/getCategories";
import { getRandomJoke } from "../../api/getRandomJoke";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton'

const App: FC = () => {

  const [categories, setCategories] = useState < string[] > ([]);
  const [error, setError] = useState < string | null > (null);

  useEffect(() => {
    getCategories(setCategories, setError)
  }, [])

  if (!categories) return null

  return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <button onClick={() => setCategories([...categories].reverse())} >elo</button>
        {categories.map((element: string, index: number) => (
          <ListItemButton>
            <ListItem
              key={index}
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment">
                  <CommentIcon onClick={() => { getRandomJoke(element, setError) }} />
                </IconButton>
              }>

              <ListItemText primary={element} />

            </ListItem>
          </ListItemButton>
        )
        )}
        {error ? <p>{error}</p> : null}
      </List>
  );
}

export default App;
