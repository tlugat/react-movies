import Slider from '../Slider/Slider';

import '../FiltersCard/filtersCard.css';

export default function FiltersCard(props) {
  const applyFilters = props.applyFilters;
  const setFilters = props.setFilters;
  const filters = props.filters;
  const date = [1920, 2020];
  const rate = [0, 10];

  const handleType = (e) => {
    const btn = e.target.value;
    const newFilters = {...filters};
    newFilters.type = btn;
    setFilters(newFilters);

  };

  return (
    <div className="filtersCard">
      <button value="movie" onClick={handleType}>Movies</button>
      <button value="tv" onClick={handleType}>Tv-shows</button>
      <Slider id={1} state={date} setFilters={setFilters} filters={filters}/>
      <Slider id={2} state={rate} setFilters={setFilters} filters={filters} />
      <button onClick={applyFilters} >Apply Filters</button>
    </div>
  )
}