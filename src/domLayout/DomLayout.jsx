import React from 'react'
import { useParams } from "react-router-dom";
import { data } from '../redux/data'
import Gallery from './Gallery'

const DomLayout = () => {

    let { house } = useParams();
    let i = data.findIndex(item => item.path === house);


    return (
        <Gallery data={data[i].images} />
    )
}

export default DomLayout;