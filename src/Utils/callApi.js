import getUrl from './getUrl';

const callApi = (setState, type) => {
  fetch(getUrl(type))
  .then(res => res.json())
  .then(res => setState(res.results))
    
} 
export default callApi;  