import callApi from '../Utils/callApi';
import {useEffect} from 'react';

const useGetMovies = (setState, filters) => {
  useEffect(() => {
  callApi(setState, filters)
}, [setState, filters])
}

export default useGetMovies;

