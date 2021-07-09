import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() =>({
    popupView :{
        zIndex: '2',
        position: 'fixed',
        top: '0',
        left: '50%',
        bottom: '15%',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    popupCard :{
        position: 'relative',
        background: 'white',
        display: 'flex',
        width: '900px',
        height: '500px',
        margin:'20px',
        borderRadius:' 5px',
    },
     product :{
        zIndex: '2',
        position: 'relative',
        display: 'block',
        justifyContent: 'center',
    },
    tablePreview:{
        minWidth: '750px',
    },
    itemDetails:{
        display:'flex',
    },
    itemName:{
        marginLeft: '8px',
        marginBottom:'16px',

    },

}))
export default useStyles;