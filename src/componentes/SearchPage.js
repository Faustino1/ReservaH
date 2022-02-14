import { Chip, makeStyles, Typography, Slider } from '@material-ui/core'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import imaData, { chips } from '../imaData';
import  { useState } from 'react';
import Resultado from './Resultado';
import {useSelector} from "react-redux";
import {selectStart} from "../features/startSlice";
import {selectEnd} from "../features/endSlice";


const SearchPage = () => {
  const classes = useStyle();
  const [value, setValue] = useState(400);

  const start = useSelector(selectStart)
  const end = useSelector(selectEnd)

  const handlePrecio = (e, newValue) =>{
    setValue(newValue);
   }
  return (
    <div className={classes.root}>
      <Typography variant='h5' gutterBottom>
        Habitaciones disponibles
      </Typography>
      <div className={classes.chips}>
        {
          chips.map(data => {
            let icon = <HighlightOffTwoToneIcon />
            return (
              <Chip label={data.label}
                key={data.key}
                icon={icon}
                className={classes.chip} />
            )
          })
        }
      </div>
      <div className={classes.selector}>
        <Typography gutterBottom>Precios</Typography>
        <Slider value={value} onChange={handlePrecio} aria-labelledby="continuous-slider"
          min={100}
          max={400}
          valueLabelDisplay="auto"
          color="secondary"
        />
      </div>
      {
        //Para filtrar las imagenes dependiendo el precio que se le coloque en la flecha o slider
        //filtro por precio 
        imaData
        .filter((data)=> data.cat === "room")
        .filter((data)=> data.price < value)
        .filter((data)=> end < data.notAvailablestart || start > data.notAvailableend)
        .map(({src, title, description, price, stock}, index) => (
          <Resultado title={title}
          key={index}
          src={src}
          description={description}
          price={price}
          stock={stock}
          />

        ))
      }
    </div>
  )
}

const useStyle = makeStyles((theme) => ({
  root: {
  },
  chips: {
    padding: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(1),
  },
  selector: {
    width: "300px",
    marginLeft: theme.spacing(3),
  }
}))


export default SearchPage