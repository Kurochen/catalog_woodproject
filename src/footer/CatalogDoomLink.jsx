import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

const CatalogDomLink = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            <Link href="https://sehou.ru/catalog/" target="_blank" color="inherit">
                <p>
                    Новая, улучшенная версия сайта, <br/> где можно добавлять бесплатные и платные проекты. 
                </p>
            </Link>
        </Typography>
    );
}

export default CatalogDomLink