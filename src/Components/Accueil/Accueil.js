import {useState} from 'react';
import FiltersCard from '../FiltersCard/FiltersCard';
import MovieCard from '../MovieCard/MovieCard';
import callApi from '../../Utils/callApi';
import useGetDefaultData from '../../hooks/useGetDefaultData';

import './Accueil.scss'

export default function Accueil() {

  const [medias, setMedias] = useState([]);

  const [filters, setFilters] = useState({
    type: 'movie',
    genre: [],
    date: [2019, 2020],
    rate: [0, 10],
    status: '',
    sortBy: 'release_date.desc'
  })

  useGetDefaultData(filters, setMedias)
  //console.log(medias);
  /* callApi(setMedias, filters); */
  const applyFilters = () => callApi(setMedias, filters);

  return (
    <div className="acc">
      <FiltersCard applyFilters={applyFilters} setFilters={setFilters} filters={filters} ></FiltersCard>
      <ul className="Resultfiltered">
        {medias.map(media => <MovieCard key={media.id} url={media.poster_path} average={media.vote_average} title={media.original_title || media.original_name}/>)}
      </ul>
      <p></p>
    </div>
  )
}

