import './GenreFilterBtn.css';

export default function GenreFilterBtn(props) {
  const name = props.genre.name;
  const id = props.genre.id;
  const handleChecked = props.handleChecked;
  
  return (
    <li className="genre" >
        <div className="minimal push" >
            <label className="check"htmlFor={name} >{name}</label>
            <input className="push-btn" id={id} name={id} onChange={handleChecked} type="checkbox" value={id}></input>  
        </div>

    </li>
  )
}