import './GenreFilter.scss';
import GenreFilterBtn from './GenreFilterBtn/GenreFilterBtn';

export default function GenreFilter(props) {
  const genres = props.genres;
  return (
    genres.map(genre => <GenreFilterBtn className="genre" key={genre.id} handleChecked={props.handleChecked} genre={genre}></GenreFilterBtn> )
    
  )
}