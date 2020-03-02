import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import House from './House';
import { data } from "../redux/data"

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const HouseList = (props) => {
    return (
        <Container maxWidth={false}>
            <Grid container spacing={4}>
                {data.map(card => (
                    <Grid item key={card.path} xs={12} sm={6} md={4} lg={3} xl={2}>
                        <House data={card} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default HouseList;