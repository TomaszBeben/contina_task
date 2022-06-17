import { makeStyles } from '@mui/styles';

export const useStyle = makeStyles({
    tableHead: {
      backgroundColor: '#cccccc !important',
    },
    tableHeadBox: {
      cursor: 'pointer',
    },
    tableBody: {
      '&:hover': {
        backgroundColor: '#cccccc '
      }
    },
  });