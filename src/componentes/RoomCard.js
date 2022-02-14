import { makeStyles, Typography } from '@material-ui/core'
import createSpacing from '@material-ui/core/styles/createSpacing';
import React from 'react'

const RoomCard = ({src, title, description}) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
    <figure className={classes.imageWrapper}>
      <img className={classes.media} src={src} alt={title}></img>
    </figure>
    <Typography variant= "h5" color="textPrimary">{title}</Typography>
    <Typography variant= "h6" color="textSecundary">{description}</Typography>
    </div>
  )
}

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 0, 2, 0),
    [theme.breakpoints.down("xs")]: {
     "& h6": {
        wordWrap: "break-word",
     },
    },
  },

  imageWrapper:{
    overflow: "hidden"
  },
  media:{
    height: "400px",
    width: "600px",
    transform: "scale(1.1)",
    WebkitTransition:  ".4s easy-in-out",
    transition: ".4s easy-in-out",
    WebkitTransform:"scale(1.1)",
    objectFit: "cover",
    "&:hover":{
      transform: "scale(1)",
      WebkitTransform:"scale(1)",
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px"
    }
  }
  
}))

export default RoomCard