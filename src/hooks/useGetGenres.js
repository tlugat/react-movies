import {useEffect} from 'react';

const useGetMovies = (setState, filters) => {

  //console.log(filters.type)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/${filters.type}/list?api_key=4124c5b3a60d237f9660517b3f1fc767&language=en-US`)
    .then(res => res.json())
    .then(res => setState(res.genres))



    }, [setState, filters])
    }

export default useGetMovies;