import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'


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

    return (

        <Box className={classes.box}>
            {
                props.data.map((i, index) => (

                    <CardActionArea
                        key={index}
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