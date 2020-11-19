import getUrl from './getUrl';
import './getFiltersSlider';
import getFiltersSlider from './getFiltersSlider';
const callApi = (setState, filters) => {
  fetch(getUrl(filters))
  .then(res => res.json())
  .then(res => getFiltersSlider(filters, res.results))
  .then(res => setState(res))
    
} 
export default callApi;  