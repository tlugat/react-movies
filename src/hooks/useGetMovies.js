import callApi from '../Utils/callApi';
import {useEffect} from 'react';

const useGetMovies = (setState, type) => {
  useEffect(() => {
  callApi(setState, type)
}, [setState, type])
}

export default useGetMovies;

