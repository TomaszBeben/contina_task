import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
    tableContainer: {
      maxHeight: '400px',
      height: '80vh',
      maxWidth: '700px',
    },
    tableHead: {
      backgroundColor: '#cccccc !important',
    },
    tableHeadBox: {
      cursor: 'pointer',
      display: 'flex',
    },
    tableBody: {
      '&:hover': {
        backgroundColor: '#cccccc '
      }
    },
  });