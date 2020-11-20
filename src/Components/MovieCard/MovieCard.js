import './MovieCard.scss';
import Star from '../AssetsComponents/Star/Star';

export default function MovieCard(props) {
  const media = props.media;
  return (
    <li className="Card">
      <div className="Card__title">
        {media.original_title || media.original_name}
      </div>
        

      <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${media.poster_path}`} alt=""></img>
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