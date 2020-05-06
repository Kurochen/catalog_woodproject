import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
}));

const DescriptionContainer = (props) => {
    const classes = useStyles();

    return (
        <Container maxWidth={false} >
            <Grid item className={classes.root} md={6}>
                <Typography>
                    {props.data}
                </Typography>
            </Grid>
        </Container>
    )
}

export default DescriptionContainer
