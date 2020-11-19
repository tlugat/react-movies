export default function MovieCard(props) {
  const title = props.title;
  const url = props.url;
  return (
    <li>
      <h4>
        {title}
      </h4>
      <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${url}`} alt=""></img>
      </li>
  )
}