import './MovieCard.scss';
import Star from '../AssetsComponents/Star/Star';
import Card from '../Card/Card';

export default function MovieCard(props) {
  const media = props.media;
  //const filters= props.filters
  
  return (
    <li className="Card">
      <div className="Card__title">
        {media.original_title || media.original_name}
      </div>
        
        <Card id={media.id}  poster_path={media.poster_path}/>
      
      <div className="Card__average">
        <span>
          <Star></Star>
          <div className="Card__averageTitle">
            {media.vote_average}/10
          </div>
        </span>
      </div>
      
    </li>
  )
}