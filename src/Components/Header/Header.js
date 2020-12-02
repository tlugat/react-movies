import React from 'react'
import '../Header/Header.scss'
import {FaBars} from 'react-icons/fa';
import SearchBar from '../SearchBar/SearchBar';

function Header(props) {
const handleDisplayMenu = props.handleDisplayMenu;
const handleDisplayAcc = props.handleDisplayAcc;

  return (
    <div>
        <div className='header'>
          <div  className="header__title">
            <h1>Logo</h1>
          </div>
 
          <div onClick={handleDisplayMenu} className='header__openMenu'>
            <div className='header__mainMenu'><FaBars size="50px"/></div>
          </div>
        </div>
          

      
        <div className='header__title'>
          
          <h1> Find The Perfect Movie To Watch ! </h1>
          
        </div>
        <SearchBar handleDisplayAcc={handleDisplayAcc}></SearchBar>
    </div>
  )
}

export default Header
