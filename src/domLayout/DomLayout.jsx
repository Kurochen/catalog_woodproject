import React from 'react'
import { useParams } from "react-router-dom";
import { data } from '../redux/data'
import TableContainer from './TableContainer';
import ImageContainer from './ImageContainer';
import TitleContainer from './TitleContainer';
import DescriptionContainer from './DescriptionContainer';
import NotFound from "./NotFound"


const DomLayout = () => {
    let { house } = useParams();
    let i = data.findIndex(item => item.path === house); //search index === Route

    if (i !== -1) {
        return (
            <>
                <TitleContainer title={data[i].name} />
                <ImageContainer
                    data={data[i].images}
                    img={data[i].images[0].smile}
                    alt={data[i].name}
                />
                <DescriptionContainer data={data[i].description} />
                <TableContainer
                    data={data[i].properties}
                    description={data[i].description} />
            </>
        )
    }

    return (
        <NotFound />
    )
}

export default DomLayout;