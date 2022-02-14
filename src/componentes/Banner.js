import { Button, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import imagenBaugran  from "../imagenes/hotel1.png"; 
const Banner = () => {
  const classes = useStyle();
   
  return (
    <div className={classes.root}>
      <div className={classes.inf}>
      <Typography variant="h2">Planifica tu escapada</Typography>
      <Link to="/search">
      <Button variant="contained">Consulta nuestras habitaciones</Button> 
      </Link>
      </div>     
      </div>
  )
}

const useStyle = makeStyles((theme) => ({
  root: {
     height: "50vh",
     position: "relative",
     backgroundImage: `url(${imagenBaugran})`,
     backgroundPosition: "center",
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
  },
  inf:{
    backgroundColor: "#000",
    color: "#fff",
    width: "350px",
    padding: theme.spacing(2),
    "& h2":{
      marginBottom: theme.spacing(4),
    },
    "& button":{
      backgroundColor: "#fff",
      color: "rgba(255, 103, 31)",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& button:hover":{
      backgroundColor: "rgba(225, 103, 31, 0.4)",
      color: "#fff",
    },
    
  },
}))

export default Banner