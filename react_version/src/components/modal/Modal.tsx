import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useStyle } from '../styles/styles'
import { Tmodal } from '../types/Tmodal';

const BasicModal:FC<Tmodal> = ({category, joke, open, setOpen, setJoke }) => {
  const classes = useStyle();
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
            setOpen(false)
            setJoke('')}}
      >
        <Box className={classes.modal}>
          <Typography variant="h6" component="h2">
            {`Category: ${category}`}
          </Typography>
          <Typography>
            {joke}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;
