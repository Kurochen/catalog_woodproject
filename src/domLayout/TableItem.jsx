import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    table: {
        maxWidth: 550,
    },
});


const TableItem = (props) => {
    const classes = useStyles()

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan="2" align="center">
                            {props.data[0][1]}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.data.slice(1).map(
                            row => (
                                <TableRow key={row[0]}>
                                    <TableCell component="th" scope="row">{row[0]}</TableCell>
                                    {
                                        /http/i.test(row[1])  // check RegEx "http"
                                            ? <TableCell align="right">
                                                <Link href={row[1]} target="_blank">
                                                    Ссылка
                                                </Link>
                                            </TableCell>
                                            : <TableCell align="right">{row[1]}</TableCell>
                                    }
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default TableItem