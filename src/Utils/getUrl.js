export default function getUrl(filters) {


  const url = 'https://api.themoviedb.org/3/';
  const key = '?api_key=4124c5b3a60d237f9660517b3f1fc767&language=en-US';
  
  if(filters.type === 'tv') {
    return (
    `${url}discover/${filters.type}${key}&first_air_date.gte=${filters.date[0]}-01-01&first_air_date.lte=${filters.date[1]}-12-30&vote_average.gte=${filters.rate[0]}&vote_average.lte=${filters.rate[1]}&primary_release_date.gte=${filters.date[0]}-01-01&vote_average.lte=${filters.rate[1]}&with_genres=${filters.genre.join('%2C')}&sort_by=${filters.sortBy}&include_null_first_air_dates=false`
  )
  } 
  else {
    return (
      `${url}discover/${filters.type}${key}&vote_average.gte=${filters.rate[0]}&vote_average.lte=${filters.rate[1]}&primary_release_date.gte=${filters.date[0]}-01-01&primary_release_date.lte=${filters.date[1]}-12-30&with_genres=${filters.genre.join('%2C')}&sort_by=${filters.sortBy}`
    )
  } 
  
}