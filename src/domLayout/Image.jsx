import React from 'react'
//import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    wrapper: {
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: 'auto',
        maxWidth: 500
    },
}));

const Image = (props) => {
    const classes = useStyles();

    return (
        //<Box className={classes.wrapper}>
        <img className={classes.img} src={props.img} alt={props.alt} />
        // </Box>
    )
}

export default Image