import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: theme.spacing(2),
    },
}));

const Logo = () => {
    const classes = useStyles();

    return (
        <Link to="/" className={classes.link}>
            <LibraryBooksIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap to="/">
                {'Каталог проектов'}
            </Typography>
        </Link>
    )
}

export default Logo