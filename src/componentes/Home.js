import { makeStyles, CssBaseline, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react'
import imaData from '../imaData';

import Banner from './Banner';
import DatePiker from './DatePiker';
import RoomCard from './RoomCard';
const Home = () => {
  const classes = useStyle();
  const [showdate, setShowdate] = useState(false);
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.dates}>
          <Button onClick={() => setShowdate(!showdate)}>
            {
              showdate ? "Hide" : "Search Dates"
            }
          </Button>
        </div>
        {
          showdate && <DatePiker />
        }
        <Banner />
        <Grid container className={classes.section} spacing={3}>
          {
            imaData.map(({ src, title, description }, index) => (
              <Grid item sm="6" md="4" lg="3">
                <RoomCard src={src}
                  title={title}
                  description={description}
                  key={index} />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </>
  )
}
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
  },
  dates: {
    display: "flex",
    flexDirection: "column",
    "& button": {
      boder: "1px solid #ccc",
      color: "#fff",
      backgraundColor: "#fff",
      color: "rgba(255, 103, 31)",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  },

}))
export default Home