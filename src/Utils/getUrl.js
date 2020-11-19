export default function getUrl(filters) {


  const url = 'https://api.themoviedb.org/3/discover';
  const key = '?api_key=4124c5b3a60d237f9660517b3f1fc767&language=en-US';
  
  if(filters.type === 'tv') {
    return (
    `${url}/${filters.type}${key}&first_air_date_year=${filters.date[0]}
  &vote_average.gte=${filters.rate}&with_genres${filters.genre}&include_null_first_air_dates=false`
  )
  } else {
    return (
      `${url}/${filters.type}${key}&vote_average.gte=${filters.rate}&primary_release_year=${filters.date[0]}&with_genres${filters.genre}`
    )
  } 
  
}