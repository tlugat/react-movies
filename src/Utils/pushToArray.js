export default  function (newState, e) {
  if(newState.includes(e)){
    newState.splice(newState.indexOf(e),1);
  } else {
    newState.push(e);
  } 
}