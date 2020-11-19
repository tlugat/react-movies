import GenreFilterBtn from './GenreFilterBtn/GenreFilterBtn';

export default function GenreFilter(props) {
  const genres = props.genres;
  return (
    genres.map(genre => <GenreFilterBtn handleChecked={props.handleChecked} genre={genre}></GenreFilterBtn> )
    
  )
}