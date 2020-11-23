import callApi from '../Utils/callApi';
import {useEffect} from 'react';
export default function useGetDefaultData(state, setState) {
  useEffect(() => {
    const newState = {...state}
    callApi(setState, newState)
  });

}

