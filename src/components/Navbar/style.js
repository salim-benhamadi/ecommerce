import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() =>({
    title:{
        marginLeft: '16px',
        fontWeight:'bolder',
        color: '#f62f5e',
        letterSpacing: '8px',
        display:'flex',
        flexGrow: '1',
    },
    appBar:{
        background: '#2e2e2e',
       // padding: '16px 0',
    }
}))
export default useStyles;

