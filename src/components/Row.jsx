import RowStyle from './Row.module.css';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const Row = ( {props, isVisible} ) => {

  const [isLocallyVisible, setIsLocallyVisible] = useState(false);
  const [specs, setSpecs] = useState(Object.values(props.stats));

  const handleclick = () => {
    setIsLocallyVisible(!isLocallyVisible);
  }

  return ( 
    <div>
      <div className = {RowStyle.row}>

        <Button variant = "outlined" color = "success" onClick={handleclick}>Detailed stats</Button> 
        <img className = {RowStyle.img} src={props.picture}></img>
        <div className = {RowStyle.id}>{props.id}</div>
        <div className = {RowStyle.name}>{props.name}</div>
        
        { isVisible && 
        <div className = {RowStyle.row}>
        <div className = {RowStyle.item} data-cy ='height'>{props.height}</div>
        <div className = {RowStyle.item} data-cy ='weight'>{props.weight}</div>
        <div>
          {props.types.map(( type) => {
            return <div key={type} className={RowStyle.types}>{type}</div>
          })}
        </div>
        </div>
        }

        {isLocallyVisible && 
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} className={RowStyle.grid} >
          {
          specs.map((spec) => {
            return <Grid item xs={1} sm={4} md={4} >
                      <div key={spec} className={RowStyle.spec}>{Object.keys(spec)} : {Object.values(spec)}</div>
                  </Grid>
          })
        }
        </Grid>
        }
      </div>

      <div className = {RowStyle.hline}></div>

    </div>
  );
}

export default Row;