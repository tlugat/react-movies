import getStringToNumber from './getStringToNumber';

export default function getFiltersSlider(filters, results) {
  return results.filter(res => getStringToNumber(res.release_date, 0, 3) < filters.date[1]);
}