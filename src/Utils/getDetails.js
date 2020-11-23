

import getRecomend from '../Utils/getRecomend';

export default function getDetails(id,type) {
  const url = 'https://api.themoviedb.org/3/';
  const key = '?api_key=4124c5b3a60d237f9660517b3f1fc767&language=en-US';
  return  Promise.all([  
          fetch(`${url}${type}/${id}${key}`),
          getVideo( url,key,id,type),
          getCredit(url,key,id,type),
          getRecomend(url,key,id,type)
        ])
      .then(allResponse => Promise.all(allResponse.map(res=>res.json())));
}

export function getVideo(url,key,id,type) {

  return fetch(`${url}${type}/${id}/videos${key}`);
}

export function getCredit(url,key,id,type) {

  return fetch(`${url}${type}/${id}/credits${key}`);
}
