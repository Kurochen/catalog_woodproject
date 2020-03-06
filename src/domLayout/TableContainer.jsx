import React from 'react'
import TableItem from './TableItem'
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

const TableContainer = (props) => {
    return (
        <Container maxWidth={false}>
            <Grid container spacing={4}>
                {
                    props.data.map(item => (
                        <Grid item key={item[0]} xs={12} sm={12} md={6} lg={4}>
                            <TableItem data={item} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default TableContainer