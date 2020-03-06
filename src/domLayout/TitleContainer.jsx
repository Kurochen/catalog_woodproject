import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const TitleContainer = (props) => {
    return (
        <Container>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                {props.title}
            </Typography>
        </Container>
    )
}

export default TitleContainer