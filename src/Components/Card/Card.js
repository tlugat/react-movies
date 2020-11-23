import {Link} from 'react-router-dom'
import'./Card.scss';
export default function Card(props) {
    const id= props.id
   // const type=props.type
    const poster_path=props.poster_path
    //console.log(type)
    return(
        <div className="Poster">
            <Link to={{
                pathname: `/Detail/${id}`,
                
                }}>
                <img src={`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`} alt=""/>
            </Link>
        </div>
        
         
        
    )
}