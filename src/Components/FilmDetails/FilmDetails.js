/* eslint-disable jsx-a11y/iframe-has-title */
import '../FilmDetails/FilmDetails.scss';
import Recomend from '../Recomend/Recomend';

import UseDetails from '../../hooks/UseDetails';
//import { useState } from 'react';


function FilmDetails(props) {
  const id = props.match.params.id;
  //console.log(id)

  const [detail,video,recomend]  = UseDetails(id,"movie");
  const {poster_path,
        original_title,
        budget,
        vote_average,
        release_date,
        spoken_name,
        overview,
        director,
        producers_names,
        actors_names,
        country}=detail
//console.log(detail)

    
  return (
    <div>
        
      <div className='film'>
        <div className='film__poster'>
            <div>
              <h1>{original_title}</h1>
              <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}  alt={`Poster of ${original_title}`}/>
            </div>
            <div className='film__infos'>
              <ul>
                {budget?<li>Budget: {budget} $</li>:null}
                {vote_average? <li>Rating : {vote_average}/10</li>:null}
                {director?<li>Director : {director}</li>:null}
                {producers_names?<li>Producers: {producers_names}</li>:null}
                {actors_names?<li>Actor : {actors_names}</li>:null}
                {release_date?<li>Release : {release_date}</li>:null}
                {country?<li>Country: {country}</li>:null}
                {spoken_name?<li>Language : {spoken_name}</li>:null}
              </ul>
            </div>
          
        </div>
        <div className='film__synopsis'>
          <h2>Synopsis</h2>
          <p>{overview}</p>
        </div>
        <div className='film__trailer'>
          {video?<h2>Trailer :</h2>:null}
          {video? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>:null}
         
        </div>
        {recomend?<Recomend recomend={recomend}/>:null}
        
      </div>
      
    </div>
  )
}

export default FilmDetails
