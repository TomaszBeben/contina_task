import { useState, useEffect, FC } from "react";

import HeadOfList from '../head/HeadOfList';
import BodyOfList from "../body/BodyOfList";
import { getCategories } from "../../api/getCategories";
import { useStyle } from "../styles/styles";

import { theme } from "../styles/theme";
import { TableContainer, Table, Paper, ThemeProvider } from "@mui/material";

const App: FC = () => {
  const classes = useStyle()
  const [sortingArrow, setSortingArrow] = useState < boolean > (true);
  const [categories, setCategories] = useState < string[] > ([]);
  const [error, setError] = useState < string | null > (null);

  useEffect(() => {
    getCategories(setCategories, setError)
  }, []);

  if (!categories) return null;

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader>
          <HeadOfList
            sortingArrow={sortingArrow}
            setSortingArrow={setSortingArrow}
            categories={categories}
            setCategories={setCategories} />
          <BodyOfList
            categories={categories}
            error={error}
            setError={setError} />
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default App;
