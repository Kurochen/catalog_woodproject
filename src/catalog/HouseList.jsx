import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import House from './House';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const HouseList = (props) => {
    return (
        <Container>
            <Grid container spacing={4}>
                {cards.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <House />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default HouseList;