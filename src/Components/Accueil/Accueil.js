import MovieCard from '../MovieCard/MovieCard';

import useGetDefaultData from '../../hooks/useGetDefaultData';

import './Accueil.scss'

export default function Accueil(props) {
  const medias = props.medias;
  const setMedias = props.setMedias
  const filters = props.filters
  const isDisplayed = props.isDisplayed;
  

  useGetDefaultData(filters, setMedias)
  

  const classNameAcc = isDisplayed ? 'acc' : 'acc inactive';

  return (
    <div className={classNameAcc}>
      <ul>
        {medias.map(media => <MovieCard  key={media.id} media={media} filters={filters.type}/>)}
      </ul>
      <p></p>
    </div>
  )
}

