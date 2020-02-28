import React from "react";
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Каталог проектов '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright