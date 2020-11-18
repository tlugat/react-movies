import {useState} from 'react';
import useGetMovies from '../../hooks/useGetMovies';

export default function TestAPi() {

  const [medias, setMedias] = useState([]);

  const [filters, setFilters] = useState({
    type: 'movie',
    genre: 18,
    date: 2010,
    note: 8,
  })

  useGetMovies(setMedias, filters);

  const handleType = (e) => {
    const btn = e.target.value;
    const newFilters = {...filters};
    newFilters.type = btn;
    setFilters(newFilters);

  };

  

  return (
    <>
      <button value="movie" onClick={handleType}>Movies</button>
      <button value="tv" onClick={handleType}>Tv-shows</button>
      <ul>
        {medias.map(media => <li>
          <h3>
            {media.original_title || media.original_name}
          </h3>
          <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${media.poster_path}`} alt=""></img>
          </li>)}
      </ul>
    </>
  )
}

