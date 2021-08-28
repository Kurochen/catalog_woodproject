import React from 'react'
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
        <img className={classes.img} src={props.img} alt={props.alt} />
    )
}

export default Image