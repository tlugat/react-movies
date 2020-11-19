import getStringToNumber from './getStringToNumber';

export default function getFiltersSlider(filters, results) {
  const dateFilter = results.filter(res => getStringToNumber(res.release_date, 0, 3) <= filters.date[1])
 /*  return dateFilter.filter( res => res.vote_average <= filters.rate[1]); */
 return dateFilter;
}