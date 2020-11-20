import './MovieCard.scss';
import StarIcon from '@material-ui/icons/Star';

export default function MovieCard(props) {
  const title = props.title;
  const average = props.average;
  const url = props.url;
  return (
    <li className="Card">
      <div className="Card__content">
        <div className="Card__title">
          {title}
        </div>
          

        <img className="Card__poster" src={`//image.tmdb.org/t/p/w220_and_h330_face/${url}`} alt=""></img>
        <div className="Card__rate">
            <StarIcon ></StarIcon>
            <div className="Card__average">
              {average}/10
            </div>
        </div>
      </div>
      
    </li>
  )
}