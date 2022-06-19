import { FC } from 'react'
import { Thead } from '../types/Thead';
import {
  TableHead,
  TableRow,
  TableCell,
  IconButton,
  Box,
  Typography
} from "@mui/material";
import { useStyle } from '../styles/styles'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const HeadOfList: FC<Thead> = ({ sortingArrow, setSortingArrow, categories, setCategories }) => {
  const classes = useStyle();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableHead}>
          <Box
            className={classes.tableHeadBox}
            onClick={() => {
              setSortingArrow(sortingArrow ? false : true);
              setCategories([...categories].reverse());
            }}>
            <Typography variant='h6'>
              Categories
            </Typography>
            <IconButton size="small">
              {sortingArrow ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
            </IconButton>
          </Box>
        </TableCell>
        <TableCell className={classes.tableHead} align='center'>
          <Typography variant='h6'>
            Random Joke
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  )
};

export default HeadOfList;