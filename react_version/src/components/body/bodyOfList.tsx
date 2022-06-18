import { FC, useState } from 'react'
import { Tbody } from '../types/Tbody';

import { getRandomJoke } from '../../api/getRandomJoke';
import {
  TableBody,
  TableRow,
  TableCell,
  IconButton
} from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import { useStyle } from '../styles/styles'
import BasicModal from '../modal/Modal';


const BodyOfList:FC<Tbody> = ({categories, error, setError}) => {
  const classes = useStyle()
  const [category, setCategory] = useState<string>('category')
  const [joke, setJoke] = useState<string>('elo')
  const [open, setOpen] = useState<boolean>(false);

  const getJoke = (category: string, setError: (arg: string) =>void, setJoke: (arg: string) =>void) => {
      getRandomJoke(category, setError, setJoke)
      setOpen(true)
      setCategory(category)
  }

  return (
    <>
    <TableBody>
      {categories.map((element: string, index: number) => (
        <TableRow className={classes.tableBody} key={index}>
          <TableCell>
            {element}
          </TableCell>
          <TableCell align='center'>
            <IconButton
              // onClick={() => { getRandomJoke(element, setError, setJoke) }}
              onClick={ () => getJoke(element, setError, setJoke)}
              size="small">
              <MessageIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      {error ? <p>{error}</p> : null}
    </TableBody>
    <BasicModal category={category} joke={joke} setJoke={setJoke} open={open} setOpen={setOpen} />
    </>
  )
}

export default BodyOfList