import {useState, useEffect} from 'react';
import FiltersCard from '../FiltersCard/FiltersCard';
import MovieCard from '../MovieCard/MovieCard';
import callApi from '../../Utils/callApi';
import useGetDefaultData from '../../hooks/useGetDefaultData';
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

  /* callApi(setMedias, filters); */
  const applyFilters = () => callApi(setMedias, {});

  return (
    <>
      <FiltersCard applyFilters={applyFilters} setFilters={setFilters} filters={filters} ></FiltersCard>
      <ul>
        {medias.map(media => <MovieCard key={media.id} url={media.poster_path} title={media.original_title || media.original_name}/>)}
      </ul>
      <p></p>
    </>
  )
}

