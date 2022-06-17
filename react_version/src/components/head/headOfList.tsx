import {
  TableHead,
  TableRow,
  TableCell,
  IconButton,
  Box
} from "@mui/material";
import { useStyle } from '../styles/styles'

const headOfList = () => {
  const classes = useStyle()
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableHead}>
          {/* <Box
            className={classes.tableHeadBox}
            onClick={() => {
              setSortingArrow(sortingArrow ? false : true)
              setCategories([...categories].reverse())
            }}>
            Categories
            <IconButton size="small">
              {sortingArrow ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
            </IconButton>
          </Box> */}
        </TableCell>
        <TableCell className={classes.tableHead} align='center'>Random Joke</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default headOfList