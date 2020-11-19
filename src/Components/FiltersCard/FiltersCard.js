import Slider from '../Slider/Slider';
import {useState} from'react';
import GenreFilter from '../GenreFilter/GenreFilter';
import useGetGenres from '../../hooks/useGetGenres';
import '../FiltersCard/filtersCard.css';

export default function FiltersCard(props) {
  const applyFilters = props.applyFilters;
  const setFilters = props.setFilters;
  const filters = props.filters;
  const date = [1920, 2020];
  const rate = [0, 10];

  const [genres, setGenres] = useState([]);

  useGetGenres(setGenres,filters);

  const [isChecked, setIsChecked] = useState();

  function handleChecked(event){
    const currentGenre=event.target.value
    const newFilters={...filters};
    if(newFilters.genre.includes(currentGenre)){
      newFilters.genre.splice(newFilters.genre.indexOf(currentGenre),1);
    } else {
      newFilters.genre.push(currentGenre);
    } 
    setFilters(newFilters)
    const newIsChecked = {...isChecked};
    newIsChecked.target = event.target;
    newIsChecked.status = !newIsChecked.status;
    setIsChecked(newIsChecked);
    console.log(newIsChecked)
  }

  const handleType = (e) => {
    const btn = e.target.value;
    const newFilters = {...filters, genre:[]};
    newFilters.type = btn;
    setFilters(newFilters);
    if(isChecked) {

    }
  };


  return (
    <div className="filtersCard">
      <button value="movie" onClick={handleType}>Movies</button>
      <button value="tv" onClick={handleType}>Tv-shows</button>
      <Slider id={1} state={date} setFilters={setFilters} filters={filters}/>
      <Slider id={2} state={rate} setFilters={setFilters} filters={filters} />
      <button onClick={applyFilters} >Apply Filters</button>
      <GenreFilter handleChecked={handleChecked} genres={genres}></GenreFilter>
    </div>
  )
}