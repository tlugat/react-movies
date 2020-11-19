export default function SortBy(props) {
  const handleSelected = props.handleSelected;
  const sortBy =[
    {
      sort_by:"popularity.desc",
      alt:"Popular",
    },
    {
      sort_by:"release_date.desc",
      alt:"Now playing"
    },
    {
      sort_by:"vote_average.desc",
      alt:"Most rated"
    }
    ]
  return (
    <select onChange={handleSelected}>
      <option value="">Sort by</option>
      {sortBy.map((sort, i )=> <option key={i} value={sort.sort_by}>{sort.alt}</option>)}
    </select>
  )
}