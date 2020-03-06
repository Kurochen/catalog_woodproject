import React from 'react'
import Image from './Image'
import Gallery from './Gallery'
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid";

const ImageContainer = (props) => {
    return (
        <Container maxWidth={false}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Image img={props.img} alt={props.alt} />
                </Grid>
                <Grid item xs>
                    <Gallery data={props.data} />
                </Grid>
            </Grid>
        </Container >
    )
}

export default ImageContainer