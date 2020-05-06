import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import House from './House';
import { data } from "../redux/data"


const HouseList = () => {
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