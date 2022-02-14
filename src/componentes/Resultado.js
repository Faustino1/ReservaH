import React from 'react'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import accounting from "accounting";


const Resultado = ({ src, title, description, price, stock }) => {
    const classes = useStyle();
    return (
        <Paper className={classes.root}>
            <div className={classes.left}>
                <img src={src} className={classes.image} alt={title} />
            </div>
            <div className={classes.rigth}>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body1">{description}</Typography>
                <Typography variant="body1">
                    Precio por noche {" "}
                    <span className={classes.number}>{accounting.formatMoney(price)}</span>
                </Typography>
                <Typography variant="body1">Habitaciones disponibles
                    <span className={classes.number}>{stock}</span>
                </Typography>

            </div>
        </Paper>
    )
}
const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "flexStart",
        margin: theme.spacing(1),
    },
    left: {
        margin: theme.spacing(2, 5, 5, 5)
    },
    image: {
        width: "400px",
        height: "auto",
        borderRadius: "10px",
        [theme.breakpoints.down("xs")]: {
            width: "200px"
        },
    },
    number:{
        fontWeight: "1000",
        marginLeft: theme.spacing(2),
        fontSize: "1.1rem",
    },
}))
export default Resultado