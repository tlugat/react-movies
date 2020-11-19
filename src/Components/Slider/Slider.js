import {useState} from 'react';
import Slider from '@material-ui/core/Slider';


export default function RangeSlider(props) {
  const setFilters = props.setFilters;
  const state = props.state
  const [value, setValue] = useState(state);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const newFilters = {...props.filters};
    if(props.id === 1) {
      newFilters.date = newValue;
      console.log(newValue);
      console.log(newFilters.date)
    } else if(props.id === 2 ) {
      newFilters.rate = newValue;
      console.log(newValue);
      console.log(newFilters.rate)
    }
    setFilters(newFilters);
  };

  return (
    <div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={state[0]}
        max={state[1]}
      />
    </div>
  );
}
