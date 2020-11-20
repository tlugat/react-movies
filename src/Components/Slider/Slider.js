import {useState} from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: '#fff',
    height: 1,
    padding: '1rem',
    width: '60%',
  },
  thumb: {
    backgroundColor: 'blue'
  }
});

export default function RangeSlider(props) {
  const classes = useStyles();
  const setFilters = props.setFilters;
  const state = props.state
  const [value, setValue] = useState(state);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const newFilters = {...props.filters};
    if(props.id === 1) {
      newFilters.date = newValue;
    } else if(props.id === 2 ) {
      newFilters.rate = newValue;
    }
    setFilters(newFilters);
  };

  return (

    <Slider className={classes.root}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      min={state[0]}
      max={state[1]}
    />
  );
}
