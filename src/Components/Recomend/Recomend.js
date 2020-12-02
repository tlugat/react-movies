import MovieCard from'../MovieCard/MovieCard';
export default function Recomend(props){
   const recomendations =props.recomend
    //console.log(recomendations)
    return(
        <div className='film__plus'>
          <h2>You may also like : </h2>
          <div className="film__plus__all">
              <ul>
              {recomendations.map(item=> <MovieCard media={item}/>)}
              </ul>
          </div>
        </div>



    )
}