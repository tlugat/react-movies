import getUrl from './getUrl';

const callApi = (setState, filters, id) => {
  fetch(getUrl(filters, id))
  .then(res => res.json())
  .then(res => setState(res.results))
} 
export default callApi;  