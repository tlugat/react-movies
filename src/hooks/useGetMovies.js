import callApi from '../Utils/CallApi';
import {useEffect} from 'react';

const useGetMovies = (setState, type) => {
  useEffect(() => {
  callApi(setState, type)
}, [setState, type])
}

export default useGetMovies;

