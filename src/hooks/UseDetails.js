import { useEffect, useState } from 'react';

import getDetails from '../Utils/getDetails';

function useDetails(id,type) {
  const [detail, setDetail] = useState([]);
  const [video,setVideo]=useState(null);
  const [recomend,setRecomend]=useState(null);
  //let clone={};
 
  useEffect(() => {
     
        getDetails(id,type)
         .then(([detail,video,credit,recomend])=>{


          //FilterData


          //Detail
          //console.log(detail)
          const country=()=> detail.production_countries[0].name?detail.production_countries[0].name:null;
          
          //Video
          //console.log(video)

          const urlYoutube=()=>video.results[0].key?video.results[0].key:null;
          
          //console.log(video)
          //Credit
            //console.log(credit)
            const director_name=()=>{
              if(credit.cast.find(peo=>peo.known_for_department==="Directing")){
                  const directors=credit.cast.filter(peo=>peo.known_for_department==="Directing")
                  return directors[0].name?directors[0].name:null
                  

              }else if( credit.crew.find(peo=>peo.known_for_department==="Directing")){
                const directors=credit.crew.filter(peo=>peo.known_for_department==="Directing")
                return directors[0].name?directors[0].name:null
              }
            }
            const producers_names=()=>{
              if(credit.cast.find(peo=>peo.known_for_department==="Production")){
                const producers=credit.cast.filter(peo=>peo.known_for_department==="Production")
                const names = producers.map(el=>el.name).slice(0,5).toString()
                return names?names:null
              }else if( credit.crew.find(peo=>peo.known_for_department==="Production")){
                const producers=credit.crew.filter(peo=>peo.known_for_department==="Production")
                const names = producers.map(el=>el.name).slice(0,5).toString()
                return names?names:null
              }
            }
            const actors_names=()=>{
              if(credit.cast.find(peo=>peo.known_for_department==="Acting")){
                const actings=credit.cast.filter(peo=>peo.known_for_department==="Acting")
                const names = actings.map(el=>el.name).slice(0,5).toString()
                return names?names:null
              }else if(credit.crew.find(peo=>peo.known_for_department==="Acting")){
                const actings=credit.cast.filter(peo=>peo.known_for_department==="Acting")
                const names = actings.map(el=>el.name).slice(0,5).toString()
                return names?names:null
              }
            }
            
         

            
          //Recomment
            const recomendations=()=> recomend.results.slice(0,5)?recomend.results.slice(0,5):null
            
            







            //Merge and SetData
            setRecomend([...recomendations()])
            setDetail({
              ...detail,
              country:country(),
              director:director_name(),
              producers_names:producers_names(),
              //actors:actors,
              actors_name:actors_names()
                          
            })
            setVideo(urlYoutube())
          
           
            
            
           
          
          
          
          
      
         
         })
  },[id,type]);


  return [detail, video, recomend];
}

export default useDetails;