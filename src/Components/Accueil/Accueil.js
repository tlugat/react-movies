import {useState} from 'react';
import useGetMovies from '../../hooks/useGetMovies';
import Slider from '../Slider/Slider';

export default function TestAPi() {

  const [medias, setMedias] = useState([]);

  const [filters, setFilters] = useState({
    type: 'movie',
    genre: 18,
    date: 2010,
    rate: 8,
  })

  useGetMovies(setMedias, filters);

  const handleType = (e) => {
    const btn = e.target.value;
    const newFilters = {...filters};
    newFilters.type = btn;
    setFilters(newFilters);

  };

  const date = [1920, 2020];
  const rate = [0, 10]

  return (
    <>
      <Slider id={1} state={date} setFilters={setFilters} filters={filters}/>
      <Slider id={2} state={rate} setFilters={setFilters} filters={filters} />
      <button value="movie" onClick={handleType}>Movies</button>
      <button value="tv" onClick={handleType}>Tv-shows</button>
      <ul>
        {medias.map(media => <li>
          <h4>
            {media.original_title || media.original_name}
          </h4>
          <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${media.poster_path}`} alt=""></img>
          </li>)}
      </ul>
    </>
  )
}

