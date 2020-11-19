import Slider from '../Slider/Slider';
import {useState} from'react';
import GenreFilter from '../GenreFilter/GenreFilter';
import getGenres from '../../Utils/getGenres';
import '../FiltersCard/filtersCard.css';
import pushToArray from '../../Utils/pushToArray';
import SortBy from '../SortBy/SortBy';
import useGetGenres from '../../hooks/useGetGenres';

export default function FiltersCard(props) {
  const applyFilters = props.applyFilters;
  const setFilters = props.setFilters;
  const filters = props.filters;
  const date = [1920, 2020];
  const rate = [0, 10];

  const [genres, setGenres] = useState([]);
  
  const [isChecked, setIsChecked] = useState([]);

  const newFilters={...filters};
  const newIsChecked = [...isChecked];

  useGetGenres(filters, setGenres);

  function handleChecked(event){
    const currentGenre = event.target.value
    const currentInput = event.target
    
    pushToArray(newFilters.genre, currentGenre)
    pushToArray(newIsChecked, currentInput)
    setFilters(newFilters);
    setIsChecked(newIsChecked);
  }

  function handleSelected(e) {
    const currentSort = e.target.value;
    newFilters.sortBy = currentSort;
    setFilters(newFilters);
  }

  const handleType = (e) => {
    const btn = e.target.value;
    const newFilters = {...filters, genre:[], sortBy:''};
    newFilters.type = btn;
    setFilters(newFilters);
    isChecked.map(input => input.checked = false);
    setIsChecked([]);
    getGenres(setGenres,filters);
  };


  return (
    <div className="filtersCard">
      <button value="movie" onClick={handleType}>Movies</button>
      <button value="tv" onClick={handleType}>Tv-shows</button>
      <Slider id={1} state={date} setFilters={setFilters} filters={filters}/>
      <Slider id={2} state={rate} setFilters={setFilters} filters={filters} />
      <GenreFilter handleChecked={handleChecked} genres={genres}></GenreFilter>
      <SortBy handleSelected={handleSelected}></SortBy>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  )
}