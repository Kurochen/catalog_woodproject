import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const NotFound = () => {
    return (
        <Container>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                {"Дом не найден"}
            </Typography>
        </Container>
    )
}

export default NotFound