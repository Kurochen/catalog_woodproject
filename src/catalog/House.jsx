import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        //paddingTop: '56.25%', // 16:9
        paddingTop: '75%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const House = (props) => {
    const classes = useStyles();
    return (

        <Card className={classes.card}>

            <CardActionArea>
                <NavLink to={props.data.path}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={process.env.PUBLIC_URL + props.data.images[0].smile}
                        title="Image title"
                    />
                </NavLink>
            </CardActionArea>

            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.data.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.data.general.sTotal + ' м2'}
                </Typography>
            </CardContent>

        </Card >

    )
}

export default House;