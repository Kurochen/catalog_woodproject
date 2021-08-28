import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

const CatalogDomLink = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            <Link href="https://catalogdom.web.app/" target="_blank" color="inherit">
                Или может каталог за разумные цены?
            </Link>
        </Typography>
    );
}

export default CatalogDomLink