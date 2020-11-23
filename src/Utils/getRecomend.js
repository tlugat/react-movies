export default function  getRecomend(url,key,id,type){
    
    return fetch(`${url}${type}/${id}/recommendations${key}`);
        
    
}