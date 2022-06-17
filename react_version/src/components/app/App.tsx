import { useState, useEffect, FC } from "react";

import { getCategories } from "../../api/getCategories";
import { getRandomJoke } from "../../api/getRandomJoke";

import { makeStyles } from '@mui/styles';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif'
  }
})

const useStyle = makeStyles({
  tableHead: {
    backgroundColor: '#cccccc !important',
    // cursor: "pointer"
  },
  tableBody: {
    '&:hover': {
      backgroundColor: '#cccccc '
    }
  },
})

const App: FC = () => {
  const classes = useStyle()
  const [sortingArrow, setSortingArrow] = useState<boolean>(true);
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
              <TableCell 
              onClick={()=>{
                setSortingArrow(sortingArrow ? false : true);
                setCategories([...categories].reverse());
              } }
              className={classes.tableHead}>
                <Box
                  display="flex"
                  alignSelf="center"
                  justifySelf="center"
                >
                  Categories
                  {sortingArrow ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>}
                </Box>
              </TableCell>
              <TableCell className={classes.tableHead} align='center'>Random Joke</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <button onClick={() => setCategories([...categories].reverse())} >elo</button> */}
            {categories.map((element: string, index: number) => (
              <TableRow className={classes.tableBody} key={index}>
                <TableCell
                  onClick={() => { getRandomJoke(element, setError) }}>
                  {element}
                </TableCell>
                <TableCell align='center'>
                  <MessageIcon />
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
