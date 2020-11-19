import {useState} from 'react';
import useGetMovies from '../../hooks/useGetMovies';
import FiltersCard from '../FiltersCard/FiltersCard';
import MovieCard from '../MovieCard/MovieCard';
import callApi from '../../Utils/callApi';

export default function Accueil() {

  const [medias, setMedias] = useState([]);

  const [filters, setFilters] = useState({
    type: 'movie',
    genre: 18,
    date: 2010,
    rate: 8,
    status: '',
  })

  const applyFilters = () => callApi(setMedias, filters);

  return (
    <>
      <FiltersCard applyFilters={applyFilters} setFilters={setFilters} filters={filters} ></FiltersCard>
      <ul>
        {medias.map(media => <MovieCard key={media.id} url={media.poster_path} title={media.original_title || media.original_name}/>)}
      </ul>
    </>
  )
}

