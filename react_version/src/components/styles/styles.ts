import { makeStyles } from '@mui/styles';

const backgroundColor = '#cccccc';

export const useStyle = makeStyles({
    tableContainer: {
      maxHeight: '400px',
      height: '80vh',
      maxWidth: '700px',
    },
    tableHead: {
      backgroundColor: `${backgroundColor} !important`,
    },
    tableHeadBox: {
      cursor: 'pointer',
      display: 'flex',
    },
    tableBody: {
      '&:hover': {
        backgroundColor: backgroundColor
      }
    },
    modal:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: backgroundColor,
      border: '2px solid #000',
      boxShadow: '24',
      p: '4',
      padding: '2rem',
      borderRadius: '5px'
    }
  });