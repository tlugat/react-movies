import {useEffect} from 'react';
import getGenres from '../Utils/getGenres'

export default function useGetGenres(state, setState) {
  useEffect(() => {
    const newState = {...state}
    getGenres(setState, newState)
  }, [])
}