import './GenreFilter.scss';
import GenreFilterBtn from './GenreFilterBtn/GenreFilterBtn';

export default function GenreFilter(props) {
  const genres = props.genres;
  const handleChecked = props.handleChecked;
  return (
    <ul className="genres__items">
      {genres.map(genre => <GenreFilterBtn className="genre" key={genre.id} handleChecked={handleChecked} genre={genre}></GenreFilterBtn> )}
    </ul>
    
    
  )
}