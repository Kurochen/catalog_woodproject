import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    box: {

        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        maxWidth: 200,
        margin: 5
    },

    img: {
        height: 140,
        backgroundSize: 'contain'
    }
})

function Gallery(props) {
    const classes = useStyles();
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    let arrayImg = [];
    for (let i = 0; i < props.data.length; i++) {
        arrayImg.push(props.data[i].big)
    };
    //console.log(arrayImg)
    return (

        <Box className={classes.box}>
            {
                props.data.map((i, index) => (

                    <CardActionArea
                        onClick={() => openLightboxOnSlide(index + 1)}
                        className={classes.card}>
                        <CardMedia
                            className={classes.img}
                            image={i.smile}
                        />
                    </CardActionArea>

                ))
            }
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={arrayImg}
                slide={lightboxController.slide}
            />
        </Box>
    );
}

export default Gallery