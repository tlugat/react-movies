

export default function GenreFilterBtn(props) {
  const name = props.genre.name;
  const id = props.genre.id;
  const handleChecked = props.handleChecked;
  
  return (
    <li className="genre" >
      <input id={id} name={id}onChange={handleChecked} type="checkbox" value={id}></input> 
      <label htmlFor={name} >{name}</label>
    </li>
  )
}