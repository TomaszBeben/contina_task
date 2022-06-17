import { useState, useEffect, FC } from "react";

import { getCategories } from "../../api/getCategories";
import { getRandomJoke } from "../../api/getRandomJoke";

import { useStyle } from '../styles/styles'
import { theme } from "../styles/theme";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';

import { ThemeProvider } from "@mui/material";

const App: FC = () => {
  const classes = useStyle()
  const [sortingArrow, setSortingArrow] = useState < boolean > (true);
  const [categories, setCategories] = useState < string[] > ([]);
  const [error, setError] = useState < string | null > (null);

  useEffect(() => {
    getCategories(setCategories, setError)
  }, [])

  if (!categories) return null

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} sx={{ maxHeight: '400px', maxWidth: '700px' }}>
        <Table aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>
                <Box
                  className={classes.tableHeadBox}
                  onClick={() => {
                    setSortingArrow(sortingArrow ? false : true)
                    setCategories([...categories].reverse())
                  }}>
                  Categories
                  <IconButton size="small">
                    {sortingArrow ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell className={classes.tableHead} align='center'>Random Joke</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((element: string, index: number) => (
              <TableRow className={classes.tableBody} key={index}>
                <TableCell>
                  {element}
                </TableCell>
                <TableCell align='center'>
                  <IconButton
                    onClick={() => { getRandomJoke(element, setError) }}
                    size="small">
                    <MessageIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {error ? <p>{error}</p> : null}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

export default App;
