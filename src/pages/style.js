import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() =>({
card :{
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    maxWidth: '300px',
    margin: 'auto',
    padding:'10%',
    marginTop:'5%',
    textAlign: 'center',
    fontFamily: 'arial',
  },
  
price: {
    color: 'grey',
    fontSize: '22px',
  },
  
  cardButton :{
    border: 'none',
    outline: '0',
    padding: '12px',
    color: 'white',
    backgroundColor: '#000',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
    fontSize: '18px',
  },
  

}))
export default useStyles;