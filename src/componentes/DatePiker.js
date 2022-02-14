import React from 'react'
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { People } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
//Catura de los datos para despues consumirlos
import {useSelector, useDispatch} from "react-redux";
import {selectStart, setStart} from "../features/startSlice";
import {selectEnd, setEnd} from "../features/endSlice";


const DatePiker = () => {
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();
    const start = useSelector(selectStart)//Da el estado inicial de las fechas
    const end = useSelector(selectEnd)//Da el estado final de las fechas
    
    const selectionRange = {
        startDate: start,
        endDate: end,
        key: "selection",
    }

    
    const hnadleSelect = (ranges) => {
        dispatch(setStart(ranges.selection.startDate.getTime()))
        dispatch(setEnd(ranges.selection.endDate.getTime()))
     }
    return (
        <div className={classes.root}>
            <DateRangePicker ranges={[selectionRange]}
                onChange={hnadleSelect}
            />
            <div className={classes.inputSelection}>
                <Typography variant='h5'>Number of guests</Typography>
            <div className={classes.people}>
                <InputBase placeholder='2pax'
                    inputProps={{ className: classes.input }}
                />
                <People />
            </div>
            <Button onClick={() => history.push("/search")}>Search Rooms</Button>
            </div>
        </div>
    )
}
const useStyle = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: "13vh",
        left: "30vw",
        zIndex: 999,
        //De esta manera añadimos la responsive en mataerial ui
        [theme.breakpoints.down("sm")]: {
            top: "16vh",
            left: 0,
        },
    },
    inputSelection: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        "& h5": {
            textAlign: "center",
        },
        "& button:hover": {
            backgroundColor: "rgba(225, 103, 31, 0.4)",
            color: "#fff",
        },  
    },
    people: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "6vw",
        border: "1px solid #ccc",
        margin: theme.spacing(0, 2, 2, 0),
        padding: theme.spacing(1, 0, 1, 3),
    },
}))
export default DatePiker