import {
  TableBody,
  TableRow,
  TableCell,
  IconButton
} from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import { useStyle } from '../styles/styles'

const bodyOfList = () => {
  const classes = useStyle()
  return (
    <TableBody>
      {/* {categories.map((element: string, index: number) => (
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
      {error ? <p>{error}</p> : null} */}
    </TableBody>
  )
}

export default bodyOfList