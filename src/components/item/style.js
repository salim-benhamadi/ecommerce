import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() =>({
    isHover:{

        position: 'absolute',
        marginTop:'80%',
        marginLeft:'35%',
        boxShadow :'0px 0px 50px 500px rgba(255, 255, 255, .8)',
    },
    root :{
        maxWidth : '100%',
        paddingTop: '25%',
        paddingBottom: '25%',
        position:'relative',
        '&:hover': { 
            boxShadow :'5px 5px 10px 5px rgba(0, 0, 0, .2)',
           }
    },
    media :{
        height:0,
        paddingTop:'56.25%',
        margin : '10%',
        
    },
    CardContent:{
        fontWeight :'bolder',
    },

}))
export default useStyles;