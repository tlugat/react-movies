import './BackBtn.scss';

const BackBtn = (props) => {
  const handleDisplayMenu = props.handleDisplayMenu;
  return ( 
    <div onClick={handleDisplayMenu} className="BackBtn">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
      <span>Back to search</span>
    </div>
   );
}
 
export default BackBtn;
