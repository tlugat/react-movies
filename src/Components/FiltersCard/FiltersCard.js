import {useState} from'react';

import '../FiltersCard/filtersCard.scss';

import Slider from '../Slider/Slider';
import GenreFilter from '../GenreFilter/GenreFilter';
import getGenres from '../../Utils/getGenres';
import pushToArray from '../../Utils/pushToArray';
import SortBy from '../SortBy/SortBy';
import useGetGenres from '../../hooks/useGetGenres';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import BackBtn from '../BackBtn/BackBtn';

export default function FiltersCard(props) {
  const applyFilters = props.applyFilters;
  const setFilters = props.setFilters;
  const filters = props.filters;
  const isActive = props.isActive;
  const handleDisplayMenu = props.handleDisplayMenu; 
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

  const classNameFilters = isActive ? 'filtersCard active' : 'filtersCard'

  return (
    <div className={classNameFilters}>
      <BackBtn handleDisplayMenu={handleDisplayMenu}/>
      <div className="buttons">
        <PrimaryBtn text="Movies" value="movie" handleType={handleType}></PrimaryBtn>
        <PrimaryBtn text="Tv-shows" value="tv" handleType={handleType}></PrimaryBtn>
      </div>
      <div className="sliders">
        <h3 className="filtersCard__filterTitle">Release Date</h3>
        <Slider id={1} state={date} setFilters={setFilters} filters={filters}/>
      </div>
      <div className="sliders">
      <h3 className="filtersCard__filterTitle">Rattings</h3>
        <Slider id={2} state={rate} setFilters={setFilters} filters={filters} />
      </div> 
      <div className="genres">
        <h3 className="filtersCard__filterTitle">Genres</h3>
        <GenreFilter handleChecked={handleChecked} genres={genres}></GenreFilter>
        
      </div>
      
      <SortBy handleSelected={handleSelected}></SortBy>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  )
}